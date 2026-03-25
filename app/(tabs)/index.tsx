import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FiltersModal from '../../components/home/FiltersModal';
import NearbyCard from '../../components/home/NearbyCard';
import { SalonFilters } from '../../components/home/SalonFilterBar';
import SalonList from '../../components/home/SalonList';
import SearchBar from '../../components/home/SearchBar';
import { ThemedView } from '../../components/themed-view/themed-view';
import { IconSymbol } from '../../components/ui/icon-symbol';
import { Colors } from '../../constants/theme';
import { useSalonFilters } from '../../hooks/useSalonFilters';
import { useSalonsData } from '../../hooks/useSalonsData';
import { useHomeStyles } from '../../styles/index.styles';


export default function HomeScreen() {
	const homeStyles = useHomeStyles();
	const { salons, styles, errorMsg } = useSalonsData();
	const colorScheme: 'light' | 'dark' = require('react-native').useColorScheme?.() === 'dark' ? 'dark' : 'light';
	const PRICE_MAX = 100000;
	const [filters, setFilters] = useState<SalonFilters>({ style: [], city: '', rating: 0, priceMin: 0, priceMax: PRICE_MAX, name: '' });
	const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
	const [modalVisible, setModalVisible] = useState(false);
	const backgroundColor = Colors[colorScheme].modalBackground;

	const filteredSalons = useSalonFilters(salons, filters);

	 return (
		 <ThemedView style={homeStyles.container} lightColor={Colors.light.background} darkColor={Colors.dark.background}>
			 <ScrollView contentContainerStyle={{ paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
				 <NearbyCard />
				 <View style={homeStyles.divider} />
				 {errorMsg && <Text style={homeStyles.errorMsg}>{errorMsg}</Text>}
				 {salons.length === 0 && !errorMsg && (
					 <Text style={homeStyles.noDataMsg}>Nincs szalon adat!</Text>
				 )}
				 {salons.length > 0 && (
					 <View style={homeStyles.salonsWrapper}>
						 <View style={homeStyles.salonsHeader}>
							 <Text style={homeStyles.title}>SZALONOK</Text>
							 <TouchableOpacity onPress={() => setModalVisible(true)} style={homeStyles.filterButton}>
								 <IconSymbol name="slider.horizontal.3" size={28} color={Colors[colorScheme].primary} />
							 </TouchableOpacity>
						 </View>
						 <SearchBar
							 value={filters.name}
							 onChange={text => setFilters({ ...filters, name: text })}
							 colorScheme={colorScheme}
						 />
						 <FiltersModal
							 visible={modalVisible}
							 onClose={() => setModalVisible(false)}
							 filters={filters}
							 setFilters={setFilters}
							 stylesList={styles}
							 selectedStyles={selectedStyles}
							 setSelectedStyles={setSelectedStyles}
							 backgroundColor={backgroundColor}
							 salons={salons}
						 />
						 <SalonList salons={filteredSalons} />
					 </View>
				 )}
			 </ScrollView>
		 </ThemedView>
	 );
}
