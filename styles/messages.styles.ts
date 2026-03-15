import { TextStyle, ViewStyle } from 'react-native';
import { Colors, Fonts, Spacing } from '../constants/theme';

type MessagesStyles = {
	container: ViewStyle;
	message: TextStyle;
};

export const messagesStyles: MessagesStyles = {
	container: {
		flex: 1,
		padding: Spacing.md,
		backgroundColor: Colors.light.background,
	},
	message: {
		fontSize: Fonts.sizeMd,
		color: Colors.light.text,
	},
};