import { StyleSheet } from 'react-native';

export const searchBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 220,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    height: 40,
  },
  icon: {
    marginLeft: 8,
    opacity: 0.7,
  },
});
