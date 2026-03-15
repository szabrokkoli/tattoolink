import { TextStyle, ViewStyle } from 'react-native';
import { Colors, Fonts, Spacing } from '../constants/theme';

type ProfileStyles = {
	container: ViewStyle;
	username: TextStyle;
};

export const profileStyles: ProfileStyles = {
	container: {
		flex: 1,
		padding: Spacing.md,
		backgroundColor: Colors.light.background,
	},
	username: {
		fontSize: Fonts.sizeLg,
		fontWeight: 'bold',
		color: Colors.light.primary,
	},
};