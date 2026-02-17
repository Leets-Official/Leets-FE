export interface PositionColorTheme {
  gradient: string;
  hoverShadow: string;
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
  url: string;
  colorTheme: PositionColorTheme;
}
