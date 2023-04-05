import facepaint from 'facepaint';

const breakpoints = [820, 1180, 1440];
export default facepaint(breakpoints.map(breakpoint => `@media(min-width: ${breakpoint}px)`));
