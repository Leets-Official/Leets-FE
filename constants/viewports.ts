import facepaint from 'facepaint';

const MOBILE_VIEWPORTS = [360, 414] as const;
export const mobileMQ = facepaint(MOBILE_VIEWPORTS.map((breakpoint) => `@media(min-width: ${breakpoint}px)`));

const VIEWPORTS = [820, 1180, 1440] as const;
export const MQ = facepaint(VIEWPORTS.map((breakpoint) => `@media(min-width: ${breakpoint}px)`));
