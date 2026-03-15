import { Text, View } from 'react-native';
import { profileStyles } from '../../styles/profile.styles';

export default function ProfileScreen() {
  return (
    <View style={profileStyles.container}>
      <Text style={profileStyles.username}>Profil</Text>
    </View>
  );
}