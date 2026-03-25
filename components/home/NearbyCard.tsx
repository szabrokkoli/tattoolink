import { Colors } from '@/constants/theme';
import { nearbyCardStyles } from '@/styles/home/nearby-card.styles';
import { useHomeStyles } from '@/styles/index.styles';
import React from 'react';
import { Text, useColorScheme, View } from 'react-native';
import MapModule from './MapModule';

const NearbyCard = () => {
  const homeStyles = useHomeStyles();
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <View style={[nearbyCardStyles.card]}> 
      <View style={{ width: '100%', marginBottom: 8 }}>
        <Text style={[homeStyles.title, { color: Colors[colorScheme].primary }]}>A KÖZELEDBEN</Text>
      </View>
      <View style={nearbyCardStyles.mapContainer}>
        <MapModule />
      </View>
    </View>
  );
};

export default NearbyCard;
