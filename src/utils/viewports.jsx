const breakpoints = [768, 840, 1180];

const [tablet, middle, desktop] = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const mobile = '@media (max-width: 420px)';

export { tablet, middle, desktop, mobile };
