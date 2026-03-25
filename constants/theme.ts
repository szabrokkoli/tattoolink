import { Platform } from 'react-native';

export const Colors = {
  light: {
    primary: '#532b88',
    secondary: '#9b72cf',
    accent: '#2f184b',
    background: '#f4effa',
    terciary: '#e2d6f3', // background-nál kicsit sötétebb, nem élénk
    surface: '#c8b1e4',
    black: '#000000',
    text: '#2f184b',
    modalBackground: 'rgba(255,255,255,1)', // egyezik a komponens/nav bar színével
  },
  dark: {
    primary: '#c8b1e4',
    secondary: '#9b72cf',
    accent: '#f4effa',
    background: '#1a102b',
    terciary: '#2a2040', // background-nál kicsit világosabb, nem élénk
    surface: '#2f184b',
    black: '#000000',
    text: '#f4effa',
    modalBackground: 'rgba(30,30,30,1)', // egyezik a komponens/nav bar színével
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
};

export const BorderRadius = {
  sm: 8,
  md: 16,
  lg: 32,
};

export const Fonts = Platform.select({
  default: {
    family: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    weightNormal: '400',
    weightBold: '700',
    sizeXs: 12,
    sizeSm: 14,
    sizeMd: 18,
    sizeLg: 24,
    sizeXl: 32,
  },
  web: {
    family: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    weightNormal: '400',
    weightBold: '700',
    sizeXs: 12,
    sizeSm: 14,
    sizeMd: 18,
    sizeLg: 24,
    sizeXl: 32,
  },
});
