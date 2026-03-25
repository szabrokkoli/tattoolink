import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useComponentBackground } from '@/hooks/use-component-background';
import { salonCardStyles } from '@/styles/home/salon-card.styles';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface SalonCardProps {
  name: string;
  description?: string;
  address?: string;
  rating?: number;
  image_url?: string;
  tags?: string[]; // stílusok/tag-ek
}

const randomDistance = () => {
  const options = [
    'Tőled 1 km-re',
    'Tőled 500 méterre',
    'Tőled 2.3 km-re',
    'Tőled 800 méterre',
    'Tőled 3 km-re',
    'Tőled 250 méterre',
  ];
  return options[Math.floor(Math.random() * options.length)];
};

const SalonCard: React.FC<SalonCardProps> = ({ name, description, address, rating, image_url, tags }) => {
  const cardBg = useComponentBackground();
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = Colors[colorScheme];
  return (
    <View style={[salonCardStyles.card, { backgroundColor: cardBg }]}> 
      <View style={{ flex: 1 }}>
        <Text style={[salonCardStyles.title, { color: themeColors.primary }]}>{name}</Text>
        <View style={[salonCardStyles.distanceBadge, { backgroundColor: themeColors.surface }]}> 
          <Text style={{ color: themeColors.secondary, fontSize: 13 }}>{randomDistance()}</Text>
        </View>
        {address ? <Text style={[salonCardStyles.address, { color: themeColors.secondary }]}>{address}</Text> : null}
        {/* Stílusok/tag-ek megjelenítése a csillagok felett */}
        {tags && tags.length > 0 && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 6, marginTop: 12 }}>
            {tags.map((tag, idx) => (
              <View key={idx} style={[salonCardStyles.tagBadge, { backgroundColor: themeColors.secondary + '22' }]}> 
                <Text style={[salonCardStyles.tagText, { color: themeColors.primary }]}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
        {rating !== undefined ? (
          <View style={salonCardStyles.starsContainer}>
            {[...Array(5)].map((_, i) => {
              const filled = i < Math.round(rating);
              return (
                <View key={i} style={salonCardStyles.starWrapper}>
                  <Text
                    style={{ color: themeColors.text, fontSize: 18, opacity: filled ? 1 : 0.2 }}
                  >{filled ? '★' : '☆'}</Text>
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
      {image_url ? (
        <Image source={{ uri: image_url }} style={salonCardStyles.sideImage} resizeMode="cover" />
      ) : null}
    </View>
  );
};

// ...existing code...

export default SalonCard;
