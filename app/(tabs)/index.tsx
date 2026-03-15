import { ThemedText } from '../../components/themed-view/themed-text';
import { ThemedView } from '../../components/themed-view/themed-view';

import { Colors } from '../../constants/theme';
import { homeStyles } from '../../styles/index.styles';

export default function HomeScreen() {
	return (
		<ThemedView style={homeStyles.container} lightColor={Colors.light.background} darkColor={Colors.dark.background}>
			<ThemedText style={homeStyles.title}>Kezdőlap</ThemedText>
			<ThemedText style={homeStyles.subtitle}>Üdvözlünk a tetoválószalon alkalmazásban!</ThemedText>
		</ThemedView>
	);
}
