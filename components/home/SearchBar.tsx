import React from 'react';
import { TextInput, View } from 'react-native';
import { Colors } from '../../constants/theme';
import { searchBarStyles } from '../../styles/home/search-bar.styles';
import { IconSymbol } from '../ui/icon-symbol';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  colorScheme: 'light' | 'dark';
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, colorScheme }) => {
  return (
    <View style={searchBarStyles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Keress a szalon nevére..."
        placeholderTextColor={Colors[colorScheme].primary}
        style={[searchBarStyles.input, {
          backgroundColor: Colors[colorScheme].terciary,
          color: Colors[colorScheme].primary,
        }]}
      />
      <IconSymbol name="magnifyingglass" size={24} color={Colors[colorScheme].primary} style={searchBarStyles.icon} />
    </View>
  );
};

export default SearchBar;
