

import { TextStyle } from 'react-native';
import { Colors, Fonts, Spacing } from '../constants/theme';
import { useColorScheme } from '../hooks/use-color-scheme';

export function useHomeStyles() {
	const colorScheme = useColorScheme() ?? 'light';
	 return {
		 container: {
			 flex: 1,
			 alignItems: 'center' as const,
			 justifyContent: 'center' as const,
			 padding: Spacing.sm,
		 },
		 title: {
			 fontSize: Fonts.sizeLg,
			 fontWeight: 'bold' as TextStyle['fontWeight'],
			 marginBottom: Spacing.sm,
			 color: Colors[colorScheme].primary,
			 lineHeight: Fonts.sizeLg * 1.2,
			 letterSpacing: 2,
			 textTransform: 'uppercase' as const,
			 marginVertical: 16,
		 },
		 divider: {
			 width: '90%' as const,
			 alignSelf: 'center' as const,
			 height: 2,
			 backgroundColor: Colors[colorScheme].primary,
			 opacity: 0.15,
			 borderRadius: 2,
			 marginBottom: 16,
			 marginTop: 8,
		 },
		 errorMsg: {
			 color: 'red',
			 marginTop: 12,
		 },
		 noDataMsg: {
			 color: '#888',
			 marginTop: 12,
		 },
		 salonsWrapper: {
			 width: '100%' as const,
		 },
		 salonsHeader: {
			 width: '100%' as const,
			 marginBottom: 8,
			 flexDirection: 'row' as const,
			 alignItems: 'center' as const,
			 paddingHorizontal: 16,
			 justifyContent: 'space-between' as const,
		 },
		 filterButton: {
			 marginLeft: 12,
		 },
	 };
}
