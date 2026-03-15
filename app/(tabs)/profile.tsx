import { ThemedText } from '../../components/themed-view/themed-text';
import { ThemedView } from '../../components/themed-view/themed-view';
import { Colors } from '../../constants/theme';
import { useProfileStyles } from '../../styles/profile.styles';

export default function ProfileScreen() {
    const profileStyles = useProfileStyles();
    return (
        <ThemedView style={profileStyles.container} lightColor={Colors.light.background} darkColor={Colors.dark.background}>
            <ThemedText style={profileStyles.title}>Profil</ThemedText>
            <ThemedText style={profileStyles.subtitle}>Hamarosan...</ThemedText>
        </ThemedView>
    );
}
