import facepaint from 'facepaint';

const breakpoints = [360, 375, 390, 412];
export default facepaint(breakpoints.map(breakpoint => `@media(min-width: ${breakpoint}px)`));
