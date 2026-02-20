# Tech Spec: Leets 리브랜딩 Phase 1 — 랜딩 페이지

> **Status**: In Progress (Phase 1 구현 완료, 레거시 정리 진행 중)
> **Author**: Claude Code
> **Created**: 2026-02-17
> **Branch**: `feat/#143/리브랜딩-랜딩`

---

## 1. Overview

### 1.1 목적

Leets 동아리 웹사이트의 리브랜딩 작업. 기존 다크 모드 레거시 디자인에서 **화이트 모드 기반 새 디자인 시스템**으로 전환한다. Phase 1에서는 디자인 토큰, 공통 컴포넌트, 랜딩 페이지를 구현한다.

### 1.2 범위

| 포함 | 제외 |
|------|------|
| 디자인 토큰 시스템 (`styles/theme.ts`) | Admin 페이지 (`/admin/*`) |
| 글로벌 스타일 업데이트 | 지원서 폼 (`/apply`) |
| 공통 컴포넌트 5종 | Position 선택 페이지 (`/position`) |
| 랜딩 페이지 4개 섹션 | Project 갤러리 (`/project`) |
| 레거시 컴포넌트 정리 | Login 페이지 (`/login`) |

### 1.3 기술 스택

| 항목 | 기술 | 버전 |
|------|------|------|
| Framework | Next.js (App Router) | 14.2.x |
| Language | TypeScript | 5.1.6 |
| Styling | styled-components | 6.0.7 |
| Animation | framer-motion | 10.16.0 |
| Responsive | facepaint | 1.2.1 |
| UI Kit | antd (admin only) | 5.8.2 |

---

## 2. Design System

### 2.1 컬러 팔레트

Figma 디자인 시스템에서 추출한 11단계 Blue 스케일 + 보조 색상.

```
Primary Blue Scale (50 ~ 950):
#F4F8FE → #CEE1FE → #A8CAFD → #81B2FC → #5B9BFB
→ #3584FB (Primary) → #2A69C8 → #1F4F96 → #153464 → #0A1A32 → #020812
```

| 토큰 | 값 | 용도 |
|------|----|------|
| `blue[50]` / `neutral.lightBg` | `#F4F8FE` | 페이지 배경 |
| `blue[500]` | `#3584FB` | Primary 액센트, 버튼, 링크 |
| `blue[800]` | `#153464` | 제목/강조 텍스트 |
| `blue[900]` | `#0A1A32` | 본문 텍스트 |
| `neutral.cardBg` | `#EEF4FD` | 카드 배경 |
| `neutral.disabledBg` | `#DAE4F3` | 비활성 상태 |

**핵심 변경**: 레거시 `#3685FC` → 새 `#3584FB`, 배경 `black` → `#F4F8FE`

### 2.2 타이포그래피

- **폰트**: Pretendard Variable (기존 DM Sans + Pretendard → Pretendard만 사용)
- **letter-spacing**: `-0.02em` (전역)
- **타입 스케일**: Display(80px) ~ CaptionS(10px), 12단계

### 2.3 반응형 브레이크포인트

기존 facepaint 기반 MQ 시스템 유지:

| 이름 | 너비 | 용도 |
|------|------|------|
| Mobile S | 360px | 최소 모바일 |
| Mobile L | 414px | 큰 모바일 |
| Tablet | 820px | 태블릿/레이아웃 전환 |
| Desktop S | 1180px | 중간 데스크톱 |
| Desktop L | 1440px | 최대 너비 |

---

## 3. Architecture

### 3.1 디렉토리 구조

```
styles/
  theme.ts                    # [NEW] 디자인 토큰 (colors, typography, spacing, radius, shadows, gradients)
  global-style.ts             # [MODIFIED] 배경/폰트/텍스트 색상 변경

components/
  Common/
    Button/                   # [NEW] 범용 버튼 컴포넌트
      index.tsx
      Button.styled.ts
    HeaderTemplate/           # [NEW] 헤더 (white/black variant)
      index.tsx
      HeaderTemplate.styled.ts
    FooterTemplate/           # [NEW] Contact + Copyright 통합 푸터
      index.tsx
      FooterTemplate.styled.ts
    BorderDivider/            # [NEW] 그라데이션 구분선
      index.tsx
    CardInfo/                 # [NEW] 정보 카드 (icon/number variant)
      index.tsx
      CardInfo.styled.ts
  Landing/
    index.tsx                 # [NEW] Barrel export
    HeroSection/              # [NEW] 히어로 영역
      index.tsx
      HeroSection.styled.ts
    CTASection/               # [NEW] CTA + 카운트다운
      index.tsx
      CTASection.styled.ts
    ActivitySection/          # [NEW] 활동 소개 (Project/Study/Entertainment)
      index.tsx
      ActivitySection.styled.ts
    TimelineSection/          # [NEW] 모집 타임라인
      index.tsx
      TimelineSection.styled.ts

app/
  (user)/
    page.tsx                  # [MODIFIED] 새 컴포넌트 조합
    layout.tsx                # [MODIFIED] DM Sans 제거
  lib/
    Fonts/index.ts            # [MODIFIED] DM Sans 제거 (하위 호환 유지)
```

### 3.2 컴포넌트 매핑 (레거시 → 신규)

| 레거시 컴포넌트 | 신규 컴포넌트 | 비고 |
|----------------|-------------|------|
| `Header` | `HeaderTemplate` | white/black variant 지원 |
| `BackgroundImage` | `HeroSection` (gradient) | SVG 배경 → CSS gradient |
| `SchedulesBanner` | `HeroSection` + `CTASection` | 분리 구현 |
| `ApplyButton` | `Button` (in CTASection/TimelineSection) | 범용 버튼으로 대체 |
| `Promotions` (Project/Study/Entertainment) | `ActivitySections` | 단일 컴포넌트로 통합 |
| `Timeline` + `TimelineImage` | `TimelineSection` | 통합 |
| `Contact` + `Footer` | `FooterTemplate` | 통합 |
| `Pointer` | (삭제) | 커스텀 커서 제거 |

---

## 4. Component Specifications

### 4.1 Button

**파일**: `components/Common/Button/`

```typescript
interface ButtonProps {
  variant?: 'solid' | 'ghost' | 'outline';  // 스타일 변형
  colorScheme?: 'blue' | 'white';           // 색상 테마
  size?: 'large' | 'medium' | 'small';      // 크기
  children: ReactNode;
}
```

| Variant + Color | Background | Text | Border |
|----------------|------------|------|--------|
| solid + blue | `#3584FB` | white | none |
| solid + white | `#F4F8FE` | `#3584FB` | none |
| ghost + blue | transparent | `#3584FB` | `1.4px solid #3584FB` |
| ghost + white | transparent | white | `1.4px solid white` |
| disabled | `#DAE4F3` | `#ABBAD1` | none |

### 4.2 HeaderTemplate

**파일**: `components/Common/HeaderTemplate/`

- **Props**: `variant: 'white' | 'black'`
- **로고**: variant에 따라 `Logo_white.svg` / `Logo_black.svg`
- **메뉴**: "Project" (→ `/project`), "Join Us!" (→ `/position`, 모집 기간 체크)
- **크기**: 높이 64px, 최대 너비 1024px
- **인증 로직**: `Schedule.getCurrentPeriod()` 기반 지원 가능 여부 확인
- **GA 추적**: `clickApply` 이벤트

### 4.3 FooterTemplate

**파일**: `components/Common/FooterTemplate/`

- `CONTACT_LAYOUT` 상수 기반 Contact 그리드
- PC: 2열 그리드 (gap 168px), Mobile: 1열
- 구분선: `1px solid #A8CAFD` (blue[200])
- Copyright: "Copyright 2023-2026. Leets All rights reserved."

### 4.4 HeroSection

**파일**: `components/Landing/HeroSection/`

- **배경**: `radial-gradient(ellipse at 50% 0%, #3584FB 0%, transparent 100%)`
- **헤더**: HeaderTemplate (white variant) 오버레이
- **히어로 이미지**: PC `Landing_pc.png` / Mobile `Landing_mobile.png` (820px 분기)
- **배너**: 모집 phase별 텍스트 표시 (`getCurrentPhase()`)
- **애니메이션**: framer-motion fade-in + slide-up

### 4.5 CTASection

**파일**: `components/Landing/CTASection/`

3가지 상태:
| Phase ID | 상태 | UI |
|----------|------|-----|
| 1 | 모집 전 | 빈 화면 (null) |
| 2 | 카운트다운 | CountdownTimer (일/시간/분/초) |
| 3 | 모집 중 | "지원하러 가기" 버튼 (solid blue large) |
| 4 | 모집 종료 | 빈 화면 (null) |

- **CountdownTimer**: 1초 간격 실시간 업데이트
- **GA 추적**: `click_apply_button_banner` 이벤트

### 4.6 ActivitySections

**파일**: `components/Landing/ActivitySection/`

- `PROMOTION_LAYOUT` 배열 순회하며 3개 섹션 렌더링
- 각 섹션: 제목 + 일러스트 SVG + CardInfo 그리드
- Project 섹션: "프로젝트 보러가기" 링크 추가
- **애니메이션**: stagger children (0.1s 간격), scroll-triggered

### 4.7 TimelineSection

**파일**: `components/Landing/TimelineSection/`

- `TIMELINE` 상수 기반 타임라인 엔트리 렌더링
- PC: 좌측 그래픽 마커/라인 + 우측 엔트리 목록
- Mobile: 그래픽 숨김, 엔트리만 표시
- 마커: 35x35px (PC) / 21x21px (Mobile)
- 조건부 "지원하러 가기" 버튼 (phase 3)

---

## 5. Page Composition

### 5.1 랜딩 페이지 (`/`)

```
app/(user)/page.tsx

<main>
  <HeroSection />          ← 블루 그라데이션 배경 + 흰색 텍스트
  <CTASection />           ← 화이트 배경 + 다크 텍스트
  <BorderDivider />        ← 블루 그라데이션 구분선 (5px)
  <ActivitySections />     ← 화이트 배경 + 카드 그리드 x3
  <TimelineSection />      ← 화이트 배경 + 타임라인
  <FooterTemplate />       ← 화이트 배경 + Contact + Copyright
</main>
```

### 5.2 색상 모드 정리

| 영역 | 배경 | 텍스트 | 비고 |
|------|------|--------|------|
| HeroSection | 블루 그라데이션 | 흰색 | 유일한 다크 배경 영역 |
| CTASection | `#F4F8FE` | `#153464` / `#1F4F96` | |
| ActivitySections | `#F4F8FE` | `#153464` | 카드: `#EEF4FD` |
| TimelineSection | `#F4F8FE` | `#153464` / `#0A1A32` | |
| FooterTemplate | `#F4F8FE` | `#153464` / `#0A1A32` | |

---

## 6. Assets

### 6.1 이미지 파일

모든 이미지는 `public/assets/image/`에 저장되어 있으며, 기존 커밋에서 추가됨.

| 파일 | 위치 | 사용처 |
|------|------|--------|
| `Landing_pc.png` | `Logo/` | HeroSection (desktop) |
| `Landing_mobile.png` | `Logo/` | HeroSection (mobile) |
| `Logo_white.svg` | `Logo/` | HeaderTemplate (white) |
| `Logo_black.svg` | `Logo/` | HeaderTemplate (black) |
| `Blue.svg` | `Logo/` | ActivitySection (프로젝트 링크) |
| `Project.svg` | `Main/` | ActivitySection 일러스트 |
| `Study & Networking.svg` | `Main/` | ActivitySection 일러스트 |
| `Entertainment.svg` | `Main/` | ActivitySection 일러스트 |
| `Arrow.svg` | `Project/` | ActivitySection (프로젝트 링크 화살표) |

### 6.2 아직 미적용 에셋 (Figma에 존재)

> Figma 디자인에 3D 아이콘, 추가 일러스트 등이 있을 수 있음.
> Figma REST API (`GET /v1/images/:file_key`) 또는 수동 Export로 추가 필요.

---

## 7. Data Flow

### 7.1 상수 의존성

```
constants/schedule.ts
  ├── TIMELINE        → TimelineSection
  ├── APPLY_PERIOD    → HeaderTemplate, middleware.ts
  └── APPLY_DATE      → utils/Schedule/index.ts → getCurrentPhase()

constants/layout.ts
  ├── CONTACT_LAYOUT  → FooterTemplate
  ├── PROMOTION_LAYOUT → ActivitySections
  └── SHORT/LONG/SELF_INTRO_LAYOUT → (apply 폼, 변경 없음)

utils/ScheduleBanner/index.ts
  └── getCurrentPhase() → HeroSection, CTASection, TimelineSection
```

### 7.2 GA 이벤트 추적

| 이벤트 | 위치 | 트리거 |
|--------|------|--------|
| `clickApply` | HeaderTemplate | "Join Us!" 클릭 |
| `click_apply_button_banner` | CTASection | CTA 버튼 클릭 |
| `click_apply_button_timeline` | TimelineSection | 타임라인 Apply 버튼 클릭 |

---

## 8. Migration Notes

### 8.1 하위 호환성

- `app/lib/Fonts/index.ts`: `DM_SANS`를 빈 className으로 export하여 admin layout 깨짐 방지
- `components/Footer/`: position 페이지에서 사용 중이므로 유지
- `constants/color.ts`: admin 상태 컬러, 변경 없음

### 8.2 삭제 대상 레거시 컴포넌트

| 컴포넌트 | 이유 | Import 확인 |
|----------|------|-------------|
| `components/Header/` | HeroSection으로 대체 | 참조 없음 |
| `components/BackgroundImage/` | HeroSection gradient로 대체 | 참조 없음 |
| `components/SchedulesBanner/` | HeroSection + CTASection으로 대체 | 참조 없음 |
| `components/ApplyButton/` | Button 컴포넌트로 대체 | 참조 없음 |
| `components/Contact/` | FooterTemplate로 대체 | 참조 없음 |
| `components/Common/Pointer/` | 커스텀 커서 제거 | 참조 없음 |

### 8.3 삭제된 상수

- `MOBILE_PROMOTION_LAYOUT` (layout.ts) — 미사용, 삭제 완료

### 8.4 유지 필요 상수 (admin 의존)

- `DEFAULT_TIME` (schedule.ts) — `Admin/Application/ApplicationStatus`에서 사용

---

## 9. Testing & Validation

### 9.1 빌드 검증

```bash
npm run build  # ✅ 통과 (2026-02-17 확인)
```

### 9.2 수동 테스트 체크리스트

- [ ] 랜딩 페이지 (`/`) — 5개 브레이크포인트 확인 (360, 414, 820, 1180, 1440px)
- [ ] 히어로 섹션 — 블루 그라데이션 배경 + 흰색 텍스트
- [ ] CTA — phase별 상태 전환 (카운트다운 / 버튼 / 빈 화면)
- [ ] Activity 섹션 — 3개 섹션 카드 렌더링 + 스크롤 애니메이션
- [ ] 타임라인 — 마커/라인 + 엔트리 표시
- [ ] Footer — Contact 정보 + Copyright
- [ ] "Join Us!" 버튼 — 모집 기간 체크 + 리다이렉트
- [ ] 기존 페이지 (`/position`, `/project`, `/admin`) — 정상 동작 확인

---

## 10. Future Work (Phase 2+)

- [ ] Position 선택 페이지 리브랜딩
- [ ] Project 갤러리 페이지 리브랜딩
- [ ] Apply 지원서 폼 리브랜딩
- [ ] Admin 페이지 리브랜딩
- [ ] Figma 추가 에셋 Export (3D 아이콘 등)
- [ ] 성능 최적화 (Next.js Image 컴포넌트 통일, lazy loading)
- [ ] ThemeProvider 도입 검토 (전체 페이지 리브랜딩 완료 시)
