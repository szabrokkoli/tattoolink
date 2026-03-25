import { ThemedText } from '../../components/themed-view/themed-text';
import { ThemedView } from '../../components/themed-view/themed-view';
import { Colors } from '../../constants/theme';
import { useBookingStyles } from '../../styles/booking.styles';

export default function BookingScreen() {
	const bookingStyles = useBookingStyles();
	return (
		<ThemedView style={bookingStyles.container} lightColor={Colors.light.background} darkColor={Colors.dark.background}>
			<ThemedText style={bookingStyles.title} accessibilityRole="header">Időpontfoglalás</ThemedText>
			<ThemedText style={bookingStyles.subtitle}>Hamarosan...</ThemedText>
		</ThemedView>
	);
}
