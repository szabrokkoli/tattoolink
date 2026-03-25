import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/theme';

// Példa stílusok, később API-ból is jöhetnek
const stylesList = [
  'Realistic',
  'Traditional',
  'Minimal',
  'Watercolor',
  'Geometric',
];

interface SalonFilterBarProps {
  onFilterChange: (filters: SalonFilters) => void;
}

export interface SalonFilters {
  style: string[];
  city: string;
  rating: number;
  priceMin: number;
  priceMax: number;
  name: string;
}

const SalonFilterBar: React.FC<SalonFilterBarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<SalonFilters>({
    style: [],
    city: '',
    rating: 0,
    priceMin: 0,
    priceMax: 100000,
    name: '',
  });
  const colorScheme = require('react-native').useColorScheme?.() === 'dark' ? 'dark' : 'light';

  const handleChange = (key: keyof SalonFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <View style={{ padding: 16, borderRadius: 8, marginBottom: 16 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 8, color: Colors[colorScheme].primary, width: '100%', textAlign: 'left' }}>Szűrés és keresés</Text>
      {/* Stílus választó (checkboxos tömbös UI) */}
      <Text style={{ color: Colors[colorScheme].text, width: '100%', textAlign: 'left' }}>Stílus:</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 }}>
        {stylesList.map(style => (
          <TouchableOpacity
            key={style}
            onPress={() => {
              const newStyles = filters.style.includes(style)
                ? filters.style.filter(s => s !== style)
                : [...filters.style, style];
              handleChange('style', newStyles);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: filters.style.includes(style) ? Colors[colorScheme].primary : '#bbb',
              backgroundColor: filters.style.includes(style) ? Colors[colorScheme].primary : Colors[colorScheme].background,
              borderRadius: 12,
              paddingVertical: 4,
              paddingHorizontal: 10,
              marginBottom: 8,
              marginRight: 8,
              minWidth: 60,
              minHeight: 28,
            }}
          >
            <View style={{
              width: 16,
              height: 16,
              borderWidth: 2,
              borderColor: Colors[colorScheme].primary,
              backgroundColor: '#fff',
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {filters.style.includes(style) && (
                <MaterialIcons name="check" size={12} color={Colors[colorScheme].surface} />
              )}
            </View>
            <Text style={{ marginLeft: 6, color: filters.style.includes(style) ? Colors[colorScheme].background : Colors[colorScheme].primary, fontWeight: 'bold', fontSize: 13 }}>{style}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Város input */}
      <Text style={{ color: Colors[colorScheme].text, width: '100%', textAlign: 'left' }}>Város:</Text>
      <TextInput
        value={filters.city}
        onChangeText={text => handleChange('city', text)}
        placeholder="Város..."
        placeholderTextColor={Colors[colorScheme].text}
        style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 8, padding: 4, color: Colors[colorScheme].text, width: '100%' }}
      />
      {/* Rating slider */}
      <Text style={{ color: Colors[colorScheme].text, width: '100%', textAlign: 'left' }}>Minimum értékelés: {filters.rating} ⭐</Text>
      <Slider
        minimumValue={0}
        maximumValue={5}
        step={1}
        value={filters.rating}
        onValueChange={(value: number) => handleChange('rating', value)}
        style={{ marginBottom: 8, width: '100%' }}
      />
      {/* Ár slider */}
      <Text style={{ color: Colors[colorScheme].text, width: '100%', textAlign: 'left' }}>Ár: {filters.priceMin} Ft - {filters.priceMax} Ft</Text>
      <Slider
        minimumValue={0}
        maximumValue={100000}
        step={1000}
        value={filters.priceMin}
        onValueChange={(value: number) => handleChange('priceMin', value)}
        style={{ marginBottom: 8, width: '100%' }}
      />
      <Slider
        minimumValue={filters.priceMin}
        maximumValue={100000}
        step={1000}
        value={filters.priceMax}
        onValueChange={(value: number) => handleChange('priceMax', value)}
        style={{ marginBottom: 8, width: '100%' }}
      />
      {/* Név keresés */}
      {/* Reset gomb */}
      <TouchableOpacity
        onPress={() => {
          setFilters({ style: [], city: '', rating: 0, priceMin: 0, priceMax: 100000, name: '' });
          onFilterChange({ style: [], city: '', rating: 0, priceMin: 0, priceMax: 100000, name: '' });
        }}
        style={{ alignSelf: 'flex-end', marginTop: 8, paddingVertical: 6, paddingHorizontal: 18, borderRadius: 8, backgroundColor: Colors[colorScheme].primary, width: '100%' }}
      >
        <Text style={{ color: Colors[colorScheme].background, fontWeight: 'bold', fontSize: 16, width: '100%', textAlign: 'center' }}>Szűrők törlése</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SalonFilterBar;
