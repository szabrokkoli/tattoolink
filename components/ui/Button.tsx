import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Colors } from '../../constants/theme';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: ViewStyle;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary', style, disabled }) => {
  // Get current color scheme
  const colorScheme: 'light' | 'dark' = require('react-native').useColorScheme?.() === 'dark' ? 'dark' : 'light';

  const baseStyle = [
    styles.button,
    variant === 'primary'
      ? { backgroundColor: Colors[colorScheme].primary, borderColor: Colors[colorScheme].primary }
      : { backgroundColor: 'transparent', borderColor: Colors[colorScheme].primary },
    style,
    disabled && { opacity: 0.5 },
  ];

  const textStyle = [
    styles.text,
    variant === 'primary'
      ? { color: Colors[colorScheme].background }
      : { color: Colors[colorScheme].primary },
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={baseStyle}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
