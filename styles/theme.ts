export const colors = {
  blue: {
    50: '#F4F8FE',
    100: '#CEE1FE',
    200: '#A8CAFD',
    300: '#81B2FC',
    400: '#5B9BFB',
    500: '#3584FB',
    600: '#2A69C8',
    700: '#1F4F96',
    800: '#153464',
    900: '#0A1A32',
    950: '#020812',
  },
  secondary: {
    green: '#10DAB2',
    pink: '#FD8AF1',
    purple: '#8658EA',
  },
  state: {
    error: '#CF1111',
    errorText: '#F05151',
    success: '#27BE22',
    caution: '#E29300',
  },
  part: {
    frontend: '#3584FB',
    backend: '#10D9B2',
    backendStroke: '#00B28A',
    design: '#FD8AF1',
    designStroke: '#F54AEF',
    pm: '#9747FF',
  },
  neutral: {
    white: '#FFFFFF',
    lightBg: '#F4F8FE',
    cardBg: '#EEF4FD',
    disabledBg: '#DAE4F3',
    disabledText: '#ABBAD1',
  },
} as const;

export const typography = {
  fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
  letterSpacing: '-0.02em',
  scale: {
    display: { size: '80px', weight: 700, lineHeight: '96px' },
    heading1: { size: '70px', weight: 700, lineHeight: '84px' },
    heading2: { size: '48px', weight: 700, lineHeight: '57.6px' },
    heading3: { size: '36px', weight: 700, lineHeight: '43.2px' },
    heading4: { size: '30px', weight: 600, lineHeight: '36px' },
    buttonLarge: { size: '28px', weight: 600, lineHeight: '33.6px' },
    subtitle: { size: '24px', weight: 600, lineHeight: '28.8px' },
    bodyL: { size: '20px', weight: 600, lineHeight: '24px' },
    bodyM: { size: '16px', weight: 500, lineHeight: '19.2px' },
    bodyS: { size: '14px', weight: 500, lineHeight: '16.8px' },
    captionL: { size: '12px', weight: 500, lineHeight: '14.4px' },
    captionS: { size: '10px', weight: 500, lineHeight: '12px' },
  },
} as const;

export const spacing = {
  page: {
    maxWidth: '1440px',
    contentWidth: '1024px',
    innerWidth: '960px',
    sidePadding: '208px',
    mobilePadding: '20px',
    mobileWidth: '360px',
    mobileInnerWidth: '320px',
  },
  section: {
    large: '120px',
    medium: '60px',
    small: '30px',
  },
  gap: {
    cardGrid: '24px',
    formField: '36px',
    menuItem: '8px',
  },
} as const;

export const radius = {
  pill: '999px',
  button: '99px',
  chip: '80px',
  swatch: '60px',
  specimen: '20px',
  formCard: '16px',
  card: '12px',
  input: '8px',
  segment: '6px',
} as const;

export const shadows = {
  card: '0 4px 8px rgba(53, 132, 251, 0.2)',
  cardStrong: '0 4px 8px rgba(53, 132, 251, 0.4)',
  cardFlipped: '0 4px 6px rgba(31, 79, 150, 0.4)',
  icon: '2px 2px 3px rgba(0, 0, 0, 0.15)',
  fab: '0 4px 8px rgba(53, 132, 251, 0.4)',
} as const;

export const gradients = {
  heroBackground: `radial-gradient(ellipse at 50% 0%, ${colors.blue[500]} 0%, rgba(53, 132, 251, 0) 100%)`,
  borderDivider: `radial-gradient(circle, ${colors.blue[500]} 0%, rgba(91, 155, 251, 0.7) 50%, rgba(129, 178, 252, 0) 100%)`,
  submitComplete: `linear-gradient(180deg, ${colors.blue[500]} 22%, #6EA7FC 67%, ${colors.blue[200]} 100%)`,
  statusCheck: `linear-gradient(180deg, rgba(53, 132, 251, 0) 0%, ${colors.blue[500]} 100%)`,
  timelineLine: `linear-gradient(180deg, ${colors.blue[500]} 0%, rgba(53, 132, 251, 0) 100%)`,
} as const;
