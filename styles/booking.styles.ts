import { TextStyle, ViewStyle } from 'react-native';
import { Colors, Fonts, Spacing } from '../constants/theme';

type BookingStyles = {
	container: ViewStyle;
	title: TextStyle;
};

export const bookingStyles: BookingStyles = {
	container: {
		flex: 1,
		padding: Spacing.md,
		backgroundColor: Colors.light.background,
	},
	title: {
		fontSize: Fonts.sizeLg,
		fontWeight: 'bold',
		color: Colors.light.primary,
	},
};