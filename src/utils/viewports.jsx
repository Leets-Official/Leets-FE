import facepaint from 'facepaint';

const breakpoints = [820, 1180, 1440];
const mq = facepaint(breakpoints.map(breakpoint => `@media(min-width: ${breakpoint}px)`));
export default mq;

// const mq = facepaint(['@media(min-width: 820px)', '@media(min-width: 1180px)', '@media(min-width: 1440px)']);

// const [tablet, landscape, desktop] = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
// const mobile = '@media (max-width: 420px)';
// export { tablet, landscape, desktop, mobile, mq };
