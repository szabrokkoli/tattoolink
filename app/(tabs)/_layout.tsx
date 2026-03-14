import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: { 
          height: 70, 
          alignItems: 'center', 
          justifyContent: 'center',
          flexDirection: 'row',
          display: 'flex'
        }
      }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, 
            title: 'Kezdőlap',
          }}
        />
        <Tabs.Screen
          name="booking"
          options={{
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar.badge.plus" color={color} />, 
            title: 'Időpontfoglalás',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.crop.circle" color={color} />, 
            title: 'Profil',
          }}
        />
    </Tabs>
  );
}
