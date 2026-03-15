import { TextStyle } from 'react-native';
import { Colors, Fonts, Spacing } from '../constants/theme';
import { useColorScheme } from '../hooks/use-color-scheme';

export function useMessagesStyles() {
	const colorScheme = useColorScheme() ?? 'light';
	return {
		container: {
			flex: 1,
			alignItems: 'center' as const,
			justifyContent: 'center' as const,
			padding: Spacing.md,
		},
		title: {
			fontSize: Fonts.sizeLg,
			fontWeight: 'bold' as TextStyle['fontWeight'],
			marginBottom: Spacing.sm,
			color: Colors[colorScheme].primary,
            lineHeight: Fonts.sizeLg * 1.2,
		},
		subtitle: {
			fontSize: Fonts.sizeMd,
			color: Colors[colorScheme].text,
		},
	};
}