import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { KeyboardAvoidingView, Modal, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/theme';
import { filtersModalStyles } from '../../styles/home/filters-modal.styles';
import { Button } from '../common/Button';
import { IconSymbol } from '../ui/icon-symbol';

interface FiltersModalProps {
  visible: boolean;
  onClose: () => void;
  filters: any;
  setFilters: (filters: any) => void;
  stylesList: any[];
  selectedStyles: string[];
  setSelectedStyles: (styles: string[]) => void;
  backgroundColor: string;
  salons: any[];
}

const FiltersModal: React.FC<FiltersModalProps> = ({
  visible,
  onClose,
  filters,
  setFilters,
  stylesList,
  selectedStyles,
  setSelectedStyles,
  backgroundColor,
  salons,
}) => {
  const colorScheme: 'light' | 'dark' = require('react-native').useColorScheme?.() === 'dark' ? 'dark' : 'light';

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}
      >
        <View style={[filtersModalStyles.modalContainer, { backgroundColor }]}> 
          <ScrollView style={{ width: '100%' }} contentContainerStyle={filtersModalStyles.scrollContent}>
            <TouchableOpacity
              onPress={onClose}
              style={filtersModalStyles.closeButton}
            >
              <IconSymbol name="xmark" size={32} color={Colors[colorScheme].text} />
            </TouchableOpacity>
            <Text style={[filtersModalStyles.title, { color: Colors[colorScheme].primary }]}>Szűrők</Text>

            <Text style={[filtersModalStyles.filterLabel, { color: Colors[colorScheme].text }]}>Stílusok:</Text>
            <View style={filtersModalStyles.styleTagsContainer}>
              {stylesList.map(style => (
                <TouchableOpacity
                  key={style.id}
                  onPress={() => {
                    setSelectedStyles(selectedStyles.includes(style.id)
                      ? selectedStyles.filter(id => id !== style.id)
                      : [...selectedStyles, style.id]);
                  }}
                  style={[filtersModalStyles.styleTag, {
                    borderColor: selectedStyles.includes(style.id) ? Colors[colorScheme].primary : '#bbb',
                    backgroundColor: selectedStyles.includes(style.id) ? Colors[colorScheme].primary : Colors[colorScheme].background,
                  }]}
                >
                  <View style={[filtersModalStyles.styleTagCheckbox, { borderColor: Colors[colorScheme].primary }]}> 
                    {selectedStyles.includes(style.id) && (
                      <MaterialIcons name="check" size={12} color={Colors[colorScheme].surface} />
                    )}
                  </View>
                  <Text style={[filtersModalStyles.styleTagText, { color: selectedStyles.includes(style.id) ? Colors[colorScheme].background : Colors[colorScheme].primary }]}>{style.name}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={[filtersModalStyles.filterLabel, { color: Colors[colorScheme].text }]}>Város:</Text>
            <TextInput
              value={filters.city}
              onChangeText={text => setFilters({ ...filters, city: text })}
              placeholder="Város..."
              placeholderTextColor={Colors[colorScheme].primary}
              style={[filtersModalStyles.cityInput, {
                borderColor: Colors[colorScheme].primary,
                color: Colors[colorScheme].primary,
                backgroundColor: Colors[colorScheme].terciary,
              }]}
            />
            {filters.city.length > 0 && (
              <View style={[filtersModalStyles.citySuggestionsContainer, {
                backgroundColor: Colors[colorScheme].background,
                borderColor: Colors[colorScheme].primary,
              }]}> 
                {Array.from(new Set(salons.map(s => s.city).filter(Boolean)))
                  .filter(city => city.toLowerCase().includes(filters.city.toLowerCase()) && city.toLowerCase() !== filters.city.toLowerCase())
                  .slice(0, 6)
                  .map(city => (
                    <TouchableOpacity
                      key={city}
                      onPress={() => setFilters({ ...filters, city })}
                      style={[filtersModalStyles.citySuggestion, { borderBottomColor: '#eee' }]}
                    >
                      <Text style={[filtersModalStyles.citySuggestionText, { color: Colors[colorScheme].primary }]}>{city}</Text>
                    </TouchableOpacity>
                  ))}
              </View>
            )}

            <View style={filtersModalStyles.actionsRow}>
              <TouchableOpacity
                onPress={() => {
                  setFilters({ style: [], city: '', rating: 0, priceMin: 0, priceMax: 100000, name: '' });
                  setSelectedStyles([]);
                }}
              >
                <IconSymbol name="trash" size={32} color={Colors[colorScheme].text} />
              </TouchableOpacity>
              <Button
                title="Szűrés"
                onPress={() => {
                  const selectedStyleNames = stylesList
                    .filter(style => selectedStyles.includes(style.id))
                    .map(style => style.name);
                  setFilters({
                    ...filters,
                    style: selectedStyleNames,
                  });
                  onClose();
                }}
                variant="primary"
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default FiltersModal;
