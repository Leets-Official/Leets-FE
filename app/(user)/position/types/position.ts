export interface PositionColorTheme {
  mobileChipBg: string;
  mobileChipBorder: string;
  mobileChipText: string;
}

export interface PositionData {
  id: string;
  title: string;
  description: string;
  hoverDescription: string;
  iconSrc: string;
  skills: string[];
  applyPosition: string;
  colorTheme: PositionColorTheme;
}
