# 지원서 개인정보 유실 장애 — 대응 현황

- 최초 작성: 2026-09-04 / 최종 갱신: 2026-09-04 (백엔드 회신 반영)
- 프론트 PR: [Leets-FE#156](https://github.com/Leets-Official/Leets-FE/pull/156) (`hotfix/application-empty-submit` → `master`)
- 참조: 백엔드 회신 문서 `BACKEND_APPLICATION_INCIDENT_RESPONSE.md`

---

## 1. 요약

모집 진행 중 제출된 지원서에서 `name`, `phone`, `major`, `grade` 4개 필드만 빈 문자열로 저장되는 사고가 발생했습니다. 자기소개서 5개 항목과 `project` / `algorithm` / `portfolio` / `interviewDay` / `interviewTime` 은 정상 보관되어, **특정 4개 필드만 선택적으로 유실되는 패턴**이었습니다. 동일 지원서가 2회 접수되는 문제도 함께 확인되었습니다.

확인된 피해 사례: `application.id = 189` (2026-09-03T22:31:05 접수, BACKEND 지원)

**프론트·백엔드 양쪽 모두 원인 규명 및 코드 수정을 완료했습니다.** 남은 것은 배포와 DB 접근이 필요한 복구 작업입니다.

> **원인 규명에 대한 단서:** 양측 모두 정확한 재현 시퀀스를 확정하지는 못했습니다. 프론트의 복원 effect 재실행과 백엔드의 무조건 대입이 서로를 먹여주는 구조라, 어느 한쪽만으로는 완전히 설명되지 않습니다. 결과적으로 **양쪽에서 각각 차단했으므로 어느 경로였든 재발하지 않습니다.** 정확한 시퀀스 확정과 189번 원본 복구를 위해 binlog 보존은 여전히 필요합니다.

---

## 2. 진행 현황

| 항목 | 프론트 | 백엔드 |
| --- | --- | --- |
| 최종 제출 필수값 검증 | ✅ 완료 | ✅ 완료 |
| `"null"` / `"undefined"` 문자열 거부 | ✅ 완료 | ✅ 완료 (`TextSanitizer`) |
| 임시저장에 필수값 검증 미적용 | — | ✅ 확인 |
| 임시저장 왕복(덮어쓰기) | ✅ 완료 | ✅ 완료 |
| 중복 제출 차단 | ✅ 완료 (화면 잠금) | ✅ 완료 (트랜잭션 + 행 잠금) |
| 409 처리 | ✅ 완료 | ✅ 완료 |
| 이메일 노출 | — | ✅ 완료 |
| `sid` 방어 | ✅ 완료 | ✅ 완료 |
| 토큰 / 개인정보 로그 | ✅ 완료 | ⬜ `show_sql` 미처리 |
| 빌드 차단 해제 | — | ✅ 완료 (JDK 21) |
| **프론트 배포** | ⬜ **PR #156 머지 대기** | — |
| **백엔드 배포** | — | ⬜ 대기 |
| binlog 보존 / 중복 정리 / UNIQUE | — | ⬜ DB 접근 필요 |

---

## 3. 원인

### 3-1. 프론트 (수정 완료)

1. **임시저장 응답 타입 오류**
   `GET /temporary-application` 응답에는 `user` 객체가 없는데, `getTemporaryApplication` 이 `user` 를 포함한 타입으로 잘못 선언되어 있었습니다.

   ```ts
   name: name ?? user.name,     // user 는 런타임에 undefined
   phone: phone ?? user.phone,
   ```

   서버가 빈 문자열을 주면 `??` 가 단축평가되어 **빈 값이 그대로 폼에 주입**되고, `null` 을 주면 `user.name` 접근에서 TypeError 가 나 복원이 통째로 중단됐습니다.

2. **복원 `useEffect` 의 재실행**
   의존성이 `[submitStatus, accessToken]` 이라, 임시저장 후 세션의 `submitStatus` 가 `NONE → SAVE` 로 바뀔 때마다 effect 가 재실행되며 **사용자 입력을 서버 응답으로 덮어썼습니다.** 취소 가드와 `try/catch` 도 없었습니다.

3. **최종 제출 직전 재검증 부재**
   제출 버튼이 체크박스 상태만 확인했습니다. 단계 이동 검증은 계산만 되고 제출 경로에서 쓰이지 않아, step 3 도달 후 값이 비워지면 막을 방법이 없었습니다.

4. **중복 제출 잠금 부재**
   `isSubmitting` 상태와 버튼 `disabled` 속성이 없어 응답 대기 중에도 버튼이 활성 상태였습니다.

### 3-2. 백엔드 (수정 완료)

1. `ApplicationRequest` 에 검증이 없고 `@Valid` 가 빠져 있어 빈 문자열이 그대로 저장됐습니다.
2. **임시저장이 요청 값을 무조건 대입**하고 있었습니다.

   ```kotlin
   name = request.name      // 빈 문자열이 와도 그대로 덮어씀
   phone = request.phone
   ```

   1단계에서 저장된 개인정보가, 2단계 임시저장 시 전송된 빈 문자열로 덮여 사라졌습니다.
3. `User.updateUserInfo()` 가 빈 값을 받으면 갱신을 건너뛰지 않고 **`null` 로 덮어쓰고** 있었습니다. 구 프론트가 `sid: 'null'` 문자열을 보내고 있었으므로, 기존 유저의 학번이 오염됐을 가능성이 있습니다. (7-2절 확인 필요)

---

## 4. 프론트 조치 내역

PR #156, 커밋 2개.

### `7a67953` — 개인정보 유실 및 중복 제출 방지

| 항목 | 내용 |
| --- | --- |
| 타입 교정 | `TemporaryApplicationResponse` 를 실제 API 스펙에 맞게 신설 (`user` 없음, 필드 nullable) |
| 복원 1회 제한 | `hasRestoredRef` 로 마운트당 1회만 복원 |
| 덮어쓰기 차단 | `keepFilled()` — 서버의 빈 값이 이미 채워진 값을 덮어쓰지 못하게 병합 |
| 입력 보호 | `dirtyFieldsRef` — 사용자가 직접 건드린 필드는 복원 대상에서 제외 |
| 안전성 | `cancelled` 가드 + `try/catch`. 복원 실패해도 폼은 정상 사용 가능 |
| 최종 재검증 | 제출 직전 전 필드 `trim()` 후 빈 값 검사. 실패 시 해당 단계로 자동 이동 |
| 전화번호 | 입력 시 숫자만 허용 + 하이픈 자동 삽입, 제출 시 10~11자리 검증 |
| 중복 방지 | `isSubmitting` / `isSaving` 잠금 + 버튼 `disabled` + 제출 중 라벨. 성공 시 잠금 유지 |
| 상태 유실 | `handleInputChange` 를 함수형 업데이트로 전환 |

### `7342632` — sid / 409 / 토큰 로깅

| 항목 | 내용 |
| --- | --- |
| `sid` | 문자열 리터럴 `'null'` → 빈 문자열 `''` |
| 409 | `POST /application` 이 409 를 반환하면 세션 갱신 후 완료 페이지로 이동 |
| 보안 | `authOptions.ts` 의 `console.log` 3건 제거. 그중 하나가 **accessToken 과 refreshToken 을 서버 로그에 평문 출력**하고 있었음 |

검증: `tsc --noEmit` 통과 / `next lint` 에러 0 / `npm run build` 통과.

---

## 5. 백엔드 조치 내역 (회신 기준)

| 항목 | 처리 |
| --- | --- |
| 최종 제출 검증 | `ApplicationRequest` 필수 필드에 `@NotBlank`/`@NotNull`, `POST`·`PATCH /application` 에 `@Valid` |
| placeholder 문자열 | 공용 `TextSanitizer` 로 `"null"`·`"undefined"` 거부 |
| 임시저장 | 필수값 검증 미적용, null-safe 저장으로 전환 (값이 들어온 항목만 갱신) |
| `updateUserInfo` | 빈 값·placeholder 를 "갱신 안 함"으로 처리 |
| 중복 제출 | `@Transactional` + 유저 행 쓰기 잠금(`SELECT ... FOR UPDATE`) 으로 동시 요청 직렬화 |
| 이메일 | `ApplicationResponse` / `ApplicationDetailsResponse` 에 `email` 추가 (additive) |
| 빌드 | `jvmToolchain(21)` + foojay resolver. **CI 가 JDK 21 이므로 21 이 맞음** (최초 요청서의 17 제안은 오류) |

UNIQUE 인덱스는 의도적으로 제외했습니다. 운영이 `ddl-auto: update` 라 모집 기간 중 운영 테이블로 `ALTER` 가 나가고, 기존 중복 행 때문에 어차피 실패하기 때문입니다. 행 잠금으로 재발은 이미 차단됩니다.

---

## 6. API 계약 (프론트 참고)

### 6-1. `POST /application` — 필수 값 누락 시 400

필수 12개: `name`, `phone`, `major`, `grade`, `position`, `interviewDay`, `interviewTime`, `motive`, `expectation`, `capability`, `conflict`, `passion`

선택: `sid`, `project`, `algorithm`, `portfolio`, `career`

```json
{
  "result": null,
  "httpStatus": 400,
  "code": "INVALID_REQUEST_BODY",
  "message": "올바르지 않은 요청입니다 [name, phone]"
}
```

프론트는 제출 전 재검증을 하므로 정상 흐름에서는 발생하지 않습니다. 최후 방어선입니다.

### 6-2. 응답에 `email` 추가 (additive)

기존 필드는 그대로이므로 어드민 화면은 영향받지 않습니다. Google OAuth 단일 로그인이라 `email` 은 항상 존재합니다.

### 6-3. 임시저장은 빈 값을 무시합니다

서버가 빈 값을 무시하고 기존 값을 보존하므로, **사용자가 의도적으로 비운 필드는 임시저장으로 지워지지 않습니다.**

**모집 기간 동안 현행 유지하기로 합의했습니다.** 근거:

- 비울 수 있어야 하는 건 `portfolio` 등 선택 항목뿐이며, 필수 항목의 빈 값은 유효한 최종 상태가 아닙니다.
- **최종 제출은 영향 없습니다.** `POST /application` 은 임시저장본이 아니라 프론트 폼의 현재 상태를 그대로 보내므로, 사용자가 화면에서 지운 값은 제출 결과에 정확히 반영됩니다.
- 남는 부작용은 "지우고 임시저장 → 재접속 시 예전 값이 다시 보임" 하나이며, 개인정보 유실 대비 감수할 만합니다.

모집 종료 후에는 명시적 삭제 신호(예: `null` 은 삭제, 필드 누락은 유지) 도입을 권장합니다.

---

## 7. 남은 작업

### 7-1. 배포 (최우선)

1. **프론트 PR #156 머지** — 백엔드 배포를 기다릴 필요 없음
2. **백엔드 배포**

### 7-2. DB 접근 필요 (백엔드)

- [ ] **MySQL binlog 보존** — 189번 원본 `name`/`phone` 복구 및 실제 시퀀스 확정용. **시간에 민감**
- [ ] 8-2 SQL 로 피해 범위 확정 → `users.email` 로 지원자 연락
- [ ] **`users.sid` / `users.phone` 의 문자열 `"null"` 오염 확인** (8-3 SQL) — 구 프론트가 `sid: 'null'` 을 보내고 있었고 `updateUserInfo` 가 이를 그대로 반영했으므로, 기존 유저 학번이 오염됐을 수 있음
- [ ] 중복 행 정리 후 UNIQUE 추가 (후순위 — 재발은 행 잠금으로 이미 차단됨)

> UNIQUE 는 후순위로 두되 드롭하지 않기를 권합니다. 잠금은 코드라 리팩터링 중 조용히 빠질 수 있지만, 제약은 스키마라 그런 일이 없습니다.

### 7-3. `show_sql: true` — 이번 배포에 포함 요청 ⚠️

운영 설정이 `show_sql: true` 라 **지원자 이름·전화번호·자기소개서 전문이 지금도 로그에 쌓이고 있습니다.**

- 모집 중이라 유입이 가장 많은 시기입니다. "모집 종료 후"로 미루면 가장 민감한 데이터가 가장 많이 들어오는 구간을 그대로 통과시키게 됩니다.
- `application.yml` 의 `show_sql: false` 한 줄이라 스키마·로직 영향이 없어 **배포 위험이 사실상 0** 입니다.
- 이미 쌓인 로그의 **보관 기간과 접근 권한**도 함께 점검이 필요합니다. 로그 백업이 외부로 나가는 경로가 있으면 그쪽이 더 큰 문제입니다.

### 7-4. 프론트 후속 (모집 종료 후)

- [ ] `position` state 표현 통일 — 진입 경로에 따라 `'UX_UI'`(sessionStorage)와 `'UX/UI'`(드롭다운·복원) 두 형태가 공존. `replace('/', '_')` 가 전송 시 정규화하므로 **전송 값은 항상 올바르나**, 드롭다운 선택 표시가 어긋날 수 있음
- [ ] `Validator` 의 사용되지 않는 `'SID'` 분기 정리

---

## 8. SQL 모음

> 테이블명은 백엔드 문서 기준(`applications`, `users`)입니다. 실제 스키마에 맞게 조정하세요.

### 8-1. 피해 지원자 식별 (연락처 확보)

```sql
SELECT a.id,
       a.applied_at,
       u.email,
       u.name  AS user_name,
       u.phone AS user_phone,
       a.name  AS app_name,
       a.phone AS app_phone
FROM applications a
JOIN users u ON a.user_id = u.id
WHERE a.id = 189;
```

### 8-2. 빈 값이 저장된 전체 지원자 조회

```sql
SELECT a.id,
       a.applied_at,
       u.email,
       u.name AS user_name,
       a.position
FROM applications a
JOIN users u ON a.user_id = u.id
WHERE a.name  = '' OR a.name  IS NULL
   OR a.phone = '' OR a.phone IS NULL
   OR a.major = '' OR a.major IS NULL
   OR a.grade = '' OR a.grade IS NULL
ORDER BY a.applied_at;
```

### 8-3. 문자열 `"null"` / `"undefined"` 오염 확인

```sql
SELECT id, name, phone, major, grade, sid
FROM applications
WHERE name  IN ('null', 'undefined')
   OR phone IN ('null', 'undefined')
   OR major IN ('null', 'undefined')
   OR grade IN ('null', 'undefined')
   OR sid   IN ('null', 'undefined');

SELECT id, email, name, phone, sid
FROM users
WHERE sid   IN ('null', 'undefined')
   OR phone IN ('null', 'undefined')
   OR name  IN ('null', 'undefined');
```

### 8-4. 중복 제출 확인 → 정리 → UNIQUE 추가

```sql
-- 1) 중복 확인
SELECT user_id,
       COUNT(*)          AS cnt,
       GROUP_CONCAT(id)  AS ids
FROM applications
GROUP BY user_id
HAVING cnt > 1;

-- 2) 남길 행 결정. 자기소개서가 더 완전한 쪽을 남겨야 할 수 있으니 눈으로 확인 후 결정
SELECT * FROM applications WHERE user_id = ? ORDER BY id;

-- 3) 중복 행 삭제 (백업 후 실행)
-- DELETE FROM applications WHERE id IN (...);

-- 4) UNIQUE 제약 추가 (3번 완료 후에만)
-- ALTER TABLE applications ADD CONSTRAINT uk_applications_user UNIQUE (user_id);
```

### 8-5. 임시저장 잔존 데이터 확인

```sql
SELECT t.*, u.email
FROM temporary_applications t
JOIN users u ON t.user_id = u.id
WHERE u.email = '피해자_이메일';
```

---

## 9. 배포 직후 확인 항목

- [ ] 필수 값 비우고 최종 제출 → 400 `INVALID_REQUEST_BODY`
- [ ] step 1 만 채우고 임시저장 → **200 성공** (400 이면 임시저장에 검증이 걸린 것)
- [ ] 임시저장 후 재접속 → `name` / `phone` / `major` / `grade` 복원
- [ ] 이미 제출한 계정으로 재제출 → 409, 프론트가 완료 페이지로 이동
- [ ] 탭 2개에서 동시 제출 → 하나만 성공, 나머지 409
- [ ] 어드민 지원서 조회 응답에 `email` 포함
- [ ] 새 지원서 1건 제출 후 DB에서 필수 12개 필드가 모두 채워졌는지 육안 확인

---

## 10. 해소된 확인 요청

| 질문 | 답변 |
| --- | --- |
| 임시저장 시 `position` 을 항상 보내는가? | **예.** state 초기값이 `'FRONTEND'` 이고 `null`/`undefined` 가 되는 경로가 없습니다. `TemporaryApplicationRequest.position` 은 non-null 유지해도 됩니다 |
| 임시저장의 "빈 값 무시" 를 유지할 것인가? | **유지.** 근거는 6-3 절 |
| `sid` 를 프론트에서 추가 처리해야 하는가? | **불필요.** 서버가 빈 값·placeholder 를 모두 무시합니다 |
| JVM target 은 17 인가 21 인가? | **21.** CI 가 JDK 21 이므로 최초 요청서의 17 제안은 오류였습니다 |

---

## 11. 인프라 메모

- 프론트: AWS Amplify (`amplify.yml`), 프로덕션 브랜치는 **`master`** (`main` 없음)
- 백엔드 API: `https://158.180.90.211.nip.io` — **`158.180.x.x` 는 Oracle Cloud(OCI) 대역**
- DB: `application.yml` 의 `${DATABASE_URL}` 이 가리키는 곳. **OCI 콘솔과 서버 환경변수** 확인 필요
- Cloudflare 는 DNS / WAF / CDN / SSL 레이어이며 DB 와 무관
