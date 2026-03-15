import { ThemedText } from '../../components/themed-view/themed-text';
import { ThemedView } from '../../components/themed-view/themed-view';
import { Colors } from '../../constants/theme';
import { useMessagesStyles } from '../../styles/messages.styles';

export default function MessagesScreen() {
	const messagesStyles = useMessagesStyles();
	return (
		<ThemedView style={messagesStyles.container} lightColor={Colors.light.background} darkColor={Colors.dark.background}>
			<ThemedText style={messagesStyles.title}>Üzenetek</ThemedText>
			<ThemedText style={messagesStyles.subtitle}>Hamarosan...</ThemedText>
		</ThemedView>
	);
}