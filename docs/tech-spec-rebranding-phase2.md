# Tech Spec: Leets 리브랜딩 Phase 2 — 지원 프로세스 + 관리 포털

> **Status**: Completed
> **Author**: Claude Code
> **Created**: 2026-02-21
> **Branch**: `feat/#143/리브랜딩-랜딩`
> **Depends on**: Phase 1 (랜딩 페이지 리브랜딩)

---

## 1. Overview

### 1.1 목적

Phase 1에서 구축한 디자인 시스템과 랜딩 페이지를 기반으로, **지원서 작성 프로세스**, **지원 결과 페이지**, **회원 관리 포털**을 Figma 디자인에 맞춰 전면 리뉴얼한다.

### 1.2 범위

| 포함 | 제외 |
|------|------|
| 지원 분야 선택 페이지 (`/position`) 리디자인 | Admin 페이지 (`/admin/*`) |
| 지원서 작성 폼 (`/apply`) 3단계 스텝 리디자인 | Project 갤러리 (`/project`) |
| 제출 완료 페이지 (`/apply/complete`) 신규 | Login 페이지 (`/login`) |
| 지원 현황 페이지 (`/apply/status`) 신규 | Certificate 페이지 (`/certificate`) |
| 지원서 조회 페이지 (`/apply/view`) 신규 | |
| 관리 포털 (`/manage`) 신규 — 홈, 프로필, 프로젝트, 포트폴리오 | |
| 헤더 인증 플로우 변경 (Nav, HeaderTemplate) | |
| 지원 포지션 체계 변경 (3종 → 5종) | |
| Middleware mock 데이터 바이패스 | |

### 1.3 주요 변경점 요약

| 영역 | Before | After |
|------|--------|-------|
| 지원 포지션 | DEV / UX_UI / PM (3종) | FRONTEND / BACKEND / BX_BI / UX_UI / PM (5종) |
| 지원서 폼 | 단일 페이지 | 3-Step (기본 정보 → 자기소개서 → 제출 확인) |
| 헤더 로그인 | 로그아웃 버튼 | "ㅇㅇㅇ님" → `/manage` 링크 |
| 관리 포털 | 없음 | 프로필/프로젝트/포트폴리오 관리 |
| 지원 후 페이지 | 없음 | 제출 완료, 상태 조회, 지원서 보기 |
| 희망 직무 필드 | 존재 | 삭제 |

---

## 2. Problems & Solutions

### 2.1 지원 포지션 체계가 실제 운영과 불일치

**문제**: 기존 3개 포지션(DEV / UX_UI / PM)은 실제 Leets의 팀 구성을 반영하지 못함. 프론트엔드/백엔드를 구분하지 않아 지원자 배치와 면접 운영에 혼선 발생.

**해결**:
- `APPLY_POSITION`을 5종으로 확장: `FRONTEND`, `BACKEND`, `BX_BI`, `UX_UI`, `PM`
- Position 선택 페이지를 2x2 그리드 카드 UI로 전면 리디자인 (기존 3열 → 2열)
- 각 포지션별 고유 컬러 테마, 스킬 태그, 호버 설명 추가
- 포지션별 입력 필드/자소서 문항 분기 로직 유지 (DEV_INPUTS → FRONTEND/BACKEND 공용)

```
기존: DEV → DEV_INPUTS, DEV_TEXTAREAS
변경: FRONTEND / BACKEND → DEV_INPUTS, DEV_TEXTAREAS (동일 문항 공유)
      BX_BI / UX_UI → DESING_INPUTS, DESIGN_TEXTAREAS (동일 문항 공유)
      PM → PM_INPUTS, PM_TEXTAREAS
```

### 2.2 지원서 작성 UX가 한 페이지에 과부하

**문제**: 모든 입력 필드(기본 정보 + 자기소개서 + 면접 일정)가 단일 페이지에 배치되어 스크롤이 길고, 작성 중간 이탈률이 높음.

**해결**:
- **3-Step 폼**으로 분리: `기본 정보` → `자기소개서` → `제출 확인`
- **PC**: 점 + 대시 라인 스테퍼 (완료/현재/예정 상태 시각화)
- **Mobile**: 3-segment 프로그레스 바 (활성 세그먼트 컬러 변화)
- **임시저장**: 각 스텝에서 가능, 언더라인 + 아이콘 스타일
- **스텝 간 이동**: 스테퍼 클릭으로 이전 스텝 복귀 가능 (미방문 스텝은 불가)
- **유효성 검증**: 각 스텝별 필수 필드 입력 완료 시에만 "다음" 버튼 활성화

### 2.3 지원 후 상태 확인 불가

**문제**: 지원서 제출 이후 합격/불합격 확인, 면접 참석 여부 응답 등이 이메일에만 의존.

**해결**:
- **`/apply/complete`**: 제출 완료 확인 + 상태 조회/지원서 보기 네비게이션
- **`/apply/status`**: 5단계 상태 표시 (심사중, 서류합격, 서류탈락, 최종합격, 최종탈락)
  - 서류 합격 시: 면접 일시/장소 표시 + 참석/불참석 버튼
  - 각 상태별 아이콘(체크/X/시계) + 메시지 분기
- **`/apply/view`**: 제출한 지원서 읽기 전용 조회 (apply 폼과 동일 디자인 시스템)
- **Mock 바이패스**: `?mock=true` 쿼리 파라미터로 개발 중 인증 없이 접근 가능

### 2.4 로그인 사용자의 관리 기능 부재

**문제**: 로그인한 사용자가 프로필을 수정하거나 프로젝트를 등록할 수 있는 공간이 없었음. 헤더에 로그아웃 버튼만 존재.

**해결**:
- **관리 포털 (`/manage`)** 신규 구축:
  - `/manage`: 인사말 + 3개 CTA 버튼 (프로필 관리, 프로젝트 관리, 참여 프로젝트)
  - `/manage/profile`: 프로필 사진, 이름, 파트 선택 (세그먼트 컨트롤), 링크 입력
  - `/manage/project`: 프로젝트 등록 폼 (기수/규모, 기간, 제목, 슬로건, 설명, 썸네일, 팀원)
  - `/manage/portfolio`: 참여한 프로젝트 그리드 (3열 PC / 1열 모바일)
- **헤더 변경**: 로그아웃 버튼 → "ㅇㅇㅇ님" 텍스트 (클릭 시 `/manage`로 이동)
  - Nav 컴포넌트 (랜딩/지원 페이지용)
  - HeaderTemplate 컴포넌트 (관리 포털용) 동시 변경

### 2.5 개발 중 페이지 접근 어려움

**문제**: middleware가 인증 + 모집 기간 체크를 강제하여, 개발/디자인 검수 시 페이지 확인이 불가능.

**해결**:
- `middleware.ts`에 `?mock=true` 조건 추가 — 쿼리 파라미터 존재 시 모든 체크 바이패스
- 각 페이지 컴포넌트에서도 `useSearchParams`로 mock 모드 감지하여 목업 데이터 렌더링
- Status 페이지는 `?mock=true&status=PASS_PAPER` 형태로 특정 상태도 지정 가능

---

## 3. Architecture

### 3.1 디렉토리 구조 (변경/추가된 파일)

```
app/(user)/
  (application)/
    apply/
      page.tsx                    # [REWRITE] 3-Step 지원서 폼
      styled/index.ts             # [REWRITE] 전체 styled-components 재구성
      layout.tsx                  # [MODIFIED] 레이아웃 정리
      complete/
        page.tsx                  # [NEW] 제출 완료 페이지
      status/
        page.tsx                  # [NEW] 지원 현황 페이지
      view/
        page.tsx                  # [NEW] 지원서 조회 페이지
  manage/
    layout.tsx                    # [NEW] 관리 포털 레이아웃 (인증 체크)
    page.tsx                      # [NEW] 관리 포털 홈
    profile/
      page.tsx                    # [NEW] 프로필 관리
    project/
      page.tsx                    # [NEW] 프로젝트 등록
    portfolio/
      page.tsx                    # [NEW] 참여 프로젝트
  position/
    components/
      PositionCard.tsx            # [REWRITE] 5포지션 카드 (PC hover + mobile)
      PositionGrid.tsx            # [REWRITE] 2x2 그리드 + 포지션 데이터
    types/
      position.ts                 # [NEW] PositionData, PositionColorTheme 타입

components/Common/
  Nav/
    index.tsx                     # [MODIFIED] Logout → "ㅇㅇㅇ님" 링크
  HeaderTemplate/
    index.tsx                     # [MODIFIED] 로그아웃 → "ㅇㅇㅇ님" 링크

constants/
  route.ts                        # [MODIFIED] MANAGE, APPLY_COMPLETE/STATUS/VIEW 추가
  search.ts                       # [MODIFIED] APPLY_POSITION 5종 확장
  message.ts                      # [MODIFIED] APPLICATION_STATUS_MESSAGE 추가

middleware.ts                     # [MODIFIED] ?mock=true 바이패스 추가
```

### 3.2 라우트 구조

```
/position                    → 지원 분야 선택 (2x2 카드 그리드)
/apply                       → 지원서 작성 (3-Step)
/apply/complete              → 제출 완료
/apply/status                → 지원 현황 조회
/apply/view                  → 지원서 읽기 전용

/manage                      → 관리 포털 홈
/manage/profile              → 프로필 관리
/manage/project              → 프로젝트 등록
/manage/portfolio            → 참여 프로젝트
```

### 3.3 라우트 상수

```typescript
export const USER = {
  HOME: '/',
  LOGIN: '/login',
  APPLY: '/apply',
  APPLY_COMPLETE: '/apply/complete',
  APPLY_STATUS: '/apply/status',
  APPLY_VIEW: '/apply/view',
  CERTIFICATE: '/certificate',
  POSITION: '/position',
} as const;

export const MANAGE = {
  HOME: '/manage',
  PROFILE: '/manage/profile',
  PROJECT: '/manage/project',
  PORTFOLIO: '/manage/portfolio',
} as const;
```

---

## 4. Component Specifications

### 4.1 지원서 작성 폼 (`/apply`)

**3-Step 구조:**

| Step | 내용 | 유효성 조건 |
|------|------|------------|
| 1. 기본 정보 | 지원 파트 드롭다운, 이름, 학번, 학과, 전화번호 + 포지션별 추가 필드 | 모든 필수 필드 입력 |
| 2. 자기소개서 | 면접 일정 필드 + 자기소개 textarea 5개 | 모든 필드 + textarea 입력 |
| 3. 제출 확인 | "제출하시겠습니까?" + 체크박스 | 체크박스 선택 |

**PC 스테퍼:**
- 3개 dot (12x12px, `border-radius: 999px`)
- 연결 대시 라인 (1.4px, 4px dash + 5px gap)
- 상태: completed (solid blue), current (ring + inner dot), upcoming (faded 20%)

**Mobile 스테퍼:**
- 3-segment 프로그레스 바 (h=3px, `border-radius: 10px`, gap=4px)
- 활성: `#3584FB`, 비활성: `rgba(21, 52, 100, 0.2)`
- 하단 라벨: "1. 기본 정보" (16px/700)

**버튼 사이즈 (Figma 기준):**

| 버튼 | PC | Mobile |
|------|-----|--------|
| 다음 (단일) | 360x66, 28px/600 | 100% x 48, 20px/600 |
| 다음 (쌍) | 300x66 | 196x48 |
| 이전 | 200x66, outline | 108x48, outline |
| 제출하기 | 300x66 | 196x48 |

**임시저장 버튼:**
- 텍스트 + 다운로드 아이콘, underline 스타일
- PC: 20px/500, 아이콘 20x20
- Mobile: 14px/500, 아이콘 14x14

### 4.2 제출 완료 (`/apply/complete`)

- **배경**: `linear-gradient(180deg, #3584FB, #6ea7fc, #A8CAFD)`
- **카드**: `rgba(255,255,255,0.95)`, `border-radius: 16px`, `backdrop-filter: blur(10px)`
- **아이콘**: 80px 원형 체크마크 (blue circle + white check SVG)
- **버튼**: "상태 조회하기" (solid) + "내 지원서 보기" (outline)
- **접근 제어**: `submitStatus !== SUBMIT` → `/apply` 리다이렉트, `?mock=true` 바이패스

### 4.3 지원 현황 (`/apply/status`)

- **배경**: `#F4F8FE` + 하단 40% 그라데이션 오버레이
- **상태 분기** (5종):

| Status | 아이콘 | 제목 | 추가 UI |
|--------|--------|------|---------|
| `PENDING` | 시계 (파랑) | 서류 심사 중 | - |
| `PASS_PAPER` | 체크 (초록) | 서류 합격 | 면접 일시/장소 + 참석/불참 버튼 |
| `FAIL_PAPER` | X (빨강) | 서류 탈락 | - |
| `PASS` | 체크 (초록) | 최종 합격 | - |
| `FAIL` | X (빨강) | 최종 탈락 | - |

- **면접 응답**: 참석 확인 후 Badge (`CHECK` → 초록, `UNCHECK` → 빨강)
- **Mock**: `?mock=true&status=PASS_PAPER` 형태로 특정 상태 렌더링 가능

### 4.4 지원서 조회 (`/apply/view`)

- Apply 폼과 동일한 디자인 시스템 (`FormCard`, `FieldLabel`, `FieldValue`)
- 포지션별 입력/자소서 레이아웃 동적 분기
- 자소서: `TextareaValue` (읽기 전용, `#F4F8FE` 배경, `8px` radius)
- 포지션 Badge: pill 형태 (`#CEE1FE` 배경, `#1F4F96` 텍스트)
- Mock: `MOCK_APPLICATION` 상수로 개발 미리보기

### 4.5 관리 포털 레이아웃 (`/manage/layout.tsx`)

```
<PageContainer>                    bg: #F4F8FE, min-height: 100vh
  <HeaderTemplate variant="black"/>  로고(검정) + "프로젝트" + "ㅇㅇㅇ님" 메뉴
  <ContentArea>                    max-width: 960px, padding-bottom: 120px (PC) / 80px (mobile)
    {children}
  </ContentArea>
  <CopyrightFooter/>
</PageContainer>
```

- **인증 체크**: `useSession()` → `unauthenticated` 시 홈으로 리다이렉트

### 4.6 관리 포털 홈 (`/manage`)

- **인사말**: "[이름]님 안녕하세요!" (48px/700, 이름만 `#3584FB`)
- **CTA 버튼 3개** (380px, 모바일 320px):
  - "프로필 관리하기" (solid blue)
  - "프로젝트 관리하기" (solid blue, 팀장 확인 confirm)
  - "참여한 프로젝트 보기" (ghost/outline)

### 4.7 프로필 관리 (`/manage/profile`)

- **카드**: max-width 540px, padding 50px (PC) / 28px 24px (mobile)
- **필드 구성**:
  - 프로필 사진: 144x144 placeholder, `border-radius: 16px`, 클릭 업로드
  - 이름: text input (48px PC / 40px mobile)
  - 파트: 세그먼트 컨트롤 4칸 (FE / BE / D / PM)
  - 링크: URL input + 도움말 텍스트
- **저장 버튼**: 300x66, 28px/600 (PC) / full-width x 48, 20px/600 (mobile)
- **Presigned URL**: S3 업로드 → `getPresignedUrl()` API 활용

### 4.8 프로젝트 등록 (`/manage/project`)

- **카드**: max-width 800px, padding 50px (PC) / 16px (mobile)
- **필드 구성**:

| 필드 | 타입 | 설명 |
|------|------|------|
| 구분 | Select x 2 | 기수 (1~6기) + 규모 (최종/토이) |
| 진행 기간 | text | "ex) 2025.03 ~ 2025.06" |
| 프로젝트 이름 | text | 필수 |
| 프로젝트 슬로건 | text | 한 줄 소개 |
| 프로젝트 링크 | url | https:// |
| 프로젝트 설명 | textarea | 500자 제한 + 카운터 표시 |
| 프로젝트 썸네일 | file upload | 309x174 (16:9), `.png 형식` 안내문 |
| 프로젝트 팀원 | input + chip | 이름 입력 → "+" 버튼 → chip-tag로 표시 |

- **등록 버튼**: 300x66, 28px/600 (PC) / full-width x 48, 20px/600 (mobile)
- **Select 커스텀**: `appearance: none` + SVG chevron background-image

### 4.9 참여 프로젝트 (`/manage/portfolio`)

- **그리드**: 3열 (PC, max-width 960px) / 1열 (mobile)
- **카드**: 16:9 aspect-ratio, `border-radius: 12px`, hover 블러+오버레이
- **모바일**: 뒤로가기 화살표 + 제목 (24px/700)
- **API**: `getProjectList({ generation: 0 })` → 모든 기수 프로젝트

---

## 5. Design Tokens (Figma 기준)

### 5.1 공통 스펙

| 토큰 | PC | Mobile |
|------|-----|--------|
| Page background | `#F4F8FE` | `#F4F8FE` |
| Title | 48px/700, `#3584FB` | 24px/700, `#3584FB` |
| Card background | `#FFFFFF` | `#FFFFFF` |
| Card radius | 16px | 16px |
| Card shadow | `0 4px 8px rgba(53,132,251,0.4)` | same |
| Card padding | 50px | 16~28px |
| Card gap | 36px | 24~30px |
| Input height | 48px | 40px |
| Input border | `1px solid #1F4F96` | same |
| Input radius | 8px | same |
| Label | 16px/600, `#153464` | 14px/600 |
| Help text | 12px/500, `rgba(21,52,100,0.4)` | 11px/500 |
| Error text | 12px/500, `#F05151` | 11px/500 |
| Submit button | 300x66, `r=99px`, 28px/600 | full-width x 48, 20px/600 |
| Section padding | 60px 32px | 30px 20px |

### 5.2 포지션별 컬러 테마

| Position | Gradient | Hover Shadow | Mobile Chip |
|----------|----------|--------------|-------------|
| Frontend | `#054FFF → #3584FB` | `rgba(31,79,150,0.4)` | `#3584FB` 계열 |
| Backend | `#00E192 → #10D9B2` | `rgba(0,178,138,0.4)` | `#00B28A` 계열 |
| Designer | `#FF2BE8 → #FD8AF1` | `rgba(245,74,239,0.4)` | `#F54AEF` 계열 |
| PM | `#5C16F4 → #8658EA` | `rgba(92,22,244,0.4)` | `#9747FF` 계열 |

### 5.3 Apply 버튼 상태

| State | Background | Text |
|-------|-----------|------|
| Active | `#3584FB` | `#FFFFFF` |
| Disabled | `#DAE4F3` | `#ABBAD2` |
| Outline (이전) | transparent, `1.4px solid #3584FB` | `#3584FB` |

---

## 6. Data Flow

### 6.1 지원서 플로우

```
/position → sessionStorage.setItem('selectedApplyPosition', position)
    ↓
/apply → sessionStorage.getItem() → position 초기값 설정
    ↓ (Step 1~2 임시저장)
postApplication / patchApplication → session.update({ submitStatus: 'SAVE' })
    ↓ (Step 3 최종 제출)
postApplication / patchApplication → session.update({ submitStatus: 'SUBMIT' })
    ↓
/apply/complete → router.push(USER.APPLY_COMPLETE)
    ↓
/apply/status → getUserApplication() → applicationStatus 기반 UI 분기
    ↓ (서류 합격 시)
patchInterviewAttendance('CHECK' | 'UNCHECK') → 면접 응답
```

### 6.2 관리 포털 플로우

```
HeaderTemplate / Nav → "ㅇㅇㅇ님" 클릭 → /manage
    ↓
/manage → session.user.name 표시
    ├→ /manage/profile → saveProfile({ position, link, profileImage })
    ├→ /manage/project → saveProject({ category, title, summary, ... })
    └→ /manage/portfolio → getProjectList({ generation: 0 })
```

### 6.3 Middleware 흐름

```
Request → searchParams.mock === 'true' ? → PASS (바이패스)
    ↓ (No)
pathname.includes('admin') → 기존 admin 인증 로직
    ↓
Schedule.getCurrentPeriod() !== RECRUIT → '/' 리다이렉트
    ↓
pathname.includes('apply') → token 확인 → 있으면 PASS, 없으면 /login
```

---

## 7. Responsive Breakpoint Summary

| Breakpoint | 적용 |
|-----------|------|
| ≤ 820px | Mobile — 1열 그리드, 축소 타이포, full-width 버튼, 세그먼트 프로그레스 바 |
| > 820px | PC — 2열 그리드 (position), 멀티열 레이아웃, dot 스테퍼, 고정폭 버튼 |

---

## 8. API Dependencies

| API | Method | 사용 페이지 |
|-----|--------|------------|
| `postApplication` | POST `/application` | /apply (신규 지원) |
| `patchApplication` | PATCH `/application` | /apply (수정) |
| `getUserApplication` | GET `/application/me` | /apply/status, /apply/view |
| `patchInterviewAttendance` | PATCH `/application/interview` | /apply/status |
| `saveProfile` | (프로필 저장) | /manage/profile |
| `saveProject` | (프로젝트 저장) | /manage/project |
| `getProjectList` | GET (프로젝트 목록) | /manage/portfolio |
| `getPresignedUrl` | (S3 업로드 URL) | /manage/profile, /manage/project |

---

## 9. Testing & Validation

### 9.1 빌드 검증

```bash
npx tsc --noEmit    # ✅ 통과 (2026-02-21)
npx next build      # ✅ 통과 (2026-02-21)
```

### 9.2 Mock 데이터 테스트 경로

| 페이지 | URL |
|--------|-----|
| 지원서 작성 | `localhost:3000/apply?mock=true` |
| 제출 완료 | `localhost:3000/apply/complete?mock=true` |
| 지원 현황 (기본) | `localhost:3000/apply/status?mock=true` |
| 지원 현황 (서류합격) | `localhost:3000/apply/status?mock=true&status=PASS_PAPER` |
| 지원 현황 (최종합격) | `localhost:3000/apply/status?mock=true&status=PASS` |
| 지원서 조회 | `localhost:3000/apply/view?mock=true` |

### 9.3 수동 테스트 체크리스트

- [ ] Position 카드 4종 호버 + 모바일 뷰 확인
- [ ] Apply Step 1 → 2 → 3 스텝 전환 + 스테퍼 클릭 복귀
- [ ] Apply 임시저장 + 복원
- [ ] Apply 제출 → complete 페이지 도달
- [ ] Status 5가지 상태 확인 (mock query)
- [ ] Status 면접 참석/불참석 버튼 동작
- [ ] View 페이지 포지션별 필드 분기 확인
- [ ] Manage 홈 → 프로필/프로젝트/포트폴리오 네비게이션
- [ ] Profile 프로필 사진 업로드 + 파트 선택 + 저장
- [ ] Project 기수/규모 선택 + 썸네일 업로드 + 팀원 추가/삭제 + 등록
- [ ] Portfolio 프로젝트 그리드 렌더링 + 호버 오버레이
- [ ] 헤더: 로그인 시 "ㅇㅇㅇ님" 표시, 클릭 시 /manage 이동
- [ ] 헤더: 미로그인 시 Google 로그인 버튼 표시
- [ ] 모든 페이지 820px 브레이크포인트 반응형 확인

---

## 10. Known Limitations

- **프로젝트 관리**: 현재 등록만 가능하고 수정/삭제 기능은 미구현 (API 의존)
- **포트폴리오**: `generation: 0`으로 전체 조회만 지원, 기수별 필터링 미구현
- **프로필 파트**: 현재 4종 (FE/BE/D/PM), BX/BI 별도 분리 미반영
- **Mock 바이패스**: 프로덕션 배포 시 비활성화 필요 (환경 변수 분기 권장)
- **지원 분야 페이지**: PositionGrid 데이터가 하드코딩, 추후 CMS/API 연동 검토

---

## 11. Future Work (Phase 3+)

- [ ] Project 갤러리 페이지 (`/project`) 리브랜딩
- [ ] Admin 페이지 리브랜딩
- [ ] 프로젝트 수정/삭제 기능
- [ ] 기수별 포트폴리오 필터링
- [ ] Mock 바이패스 환경 변수 분기 (`process.env.NODE_ENV`)
- [ ] 프로필 파트에 BX/BI 추가
- [ ] 성능 최적화 (Next.js Image 컴포넌트 통일)
