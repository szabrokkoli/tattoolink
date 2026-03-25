import { useColorScheme } from './use-color-scheme';

export function useComponentBackground() {
  const colorScheme = useColorScheme();
  // Nav bar background logic
  return colorScheme === 'dark'
    ? 'rgba(30,30,30,0.6)'
    : 'rgba(255,255,255,0.6)';
}
