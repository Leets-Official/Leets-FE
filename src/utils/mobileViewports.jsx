import facepaint from 'facepaint';

const breakpoints = [360, 375, 390, 412];
const mq = facepaint(breakpoints.map(breakpoint => `@media(min-width: ${breakpoint}px)`));
export default mq;
