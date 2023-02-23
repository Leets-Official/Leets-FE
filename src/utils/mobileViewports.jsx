import facepaint from 'facepaint';

const breakpoints = [375, 414];
const mq = facepaint(breakpoints.map(breakpoint => `@media(min-width: ${breakpoint}px)`));
export default mq;
