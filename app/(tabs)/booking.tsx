import { Text, View } from 'react-native';
import { bookingStyles } from '../../styles/booking.styles';

export default function BookingScreen() {
  return (
    <View style={bookingStyles.container}>
      <Text style={bookingStyles.title}>Időpontfoglalás</Text>
    </View>
  );
}