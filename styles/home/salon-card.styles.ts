import { StyleSheet } from 'react-native';

export const salonCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: '4%',
    width: '92%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  address: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
  },
  rating: {
    fontSize: 13,
    color: '#e6b800',
    fontWeight: '600',
  },
  distanceBadge: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 6,
    marginTop: 2,
    backgroundColor: '#f5f5f5',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 2,
  },
  starWrapper: {
    marginHorizontal: 2,
  },
  sideImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginLeft: 16,
    backgroundColor: '#eee',
    alignSelf: 'flex-start',
  },
  tagBadge: {
    backgroundColor: '#e6b80022',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    color: '#e6b800',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
