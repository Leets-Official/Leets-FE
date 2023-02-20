const breakpoints = [768, 840, 1180, 1400];
const [tablet, middle, landscape, desktop] = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const mobile = '@media (max-width: 420px)';

export { tablet, middle, landscape, mobile, desktop };
