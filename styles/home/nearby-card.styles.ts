import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const nearbyCardStyles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.lg,
    paddingBottom: Spacing.md,
    paddingHorizontal: Spacing.lg,
    marginHorizontal: Spacing.sm,
    marginBottom: Spacing.sm,
    width: '100%',
    shadowColor: Colors.light.black,
    shadowRadius: BorderRadius.md,
    alignSelf: 'center',
  },
  mapContainer: {
    height: 180,
    backgroundColor: 'transparent',
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
