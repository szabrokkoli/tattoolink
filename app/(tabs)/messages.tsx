import { Text, View } from 'react-native';
import { messagesStyles } from '../../styles/messages.styles';

export default function MessagesScreen() {
	return (
		<View style={messagesStyles.container}>
			<Text style={messagesStyles.message}>Üzenetek</Text>
		</View>
	);
}
