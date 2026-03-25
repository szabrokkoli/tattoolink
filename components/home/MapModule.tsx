import React from 'react';
import { Image, View } from 'react-native';

import { useColorScheme } from 'react-native';

const MapModule = () => {
  const colorScheme = useColorScheme?.() === 'dark' ? 'dark' : 'light';
  const mapSource = colorScheme === 'light'
    ? require('../../assets/images/map_placeholder_light.png')
    : require('../../assets/images/map_placeholder.png');
  return (
    <View style={{ height: 180, borderRadius: 12, overflow: 'hidden', backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', width: '90%', alignSelf: 'center' }}>
      <Image
        source={mapSource}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
  );
};

export default MapModule;
