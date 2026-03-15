import { TextStyle, ViewStyle } from 'react-native';

type HomeStyles = {
	container: ViewStyle;
	title: TextStyle;
	subtitle: TextStyle;
};

import { Colors, Fonts, Spacing } from '../constants/theme';

export const homeStyles: HomeStyles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: Spacing.md,
	},
	title: {
		fontSize: Fonts.sizeLg,
		fontWeight: 'bold',
		marginBottom: Spacing.sm,
		color: Colors.light.primary,
	},
	subtitle: {
		fontSize: Fonts.sizeMd,
		color: Colors.light.text,
	},
};