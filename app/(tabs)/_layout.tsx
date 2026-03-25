import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useComponentBackground } from '@/hooks/use-component-background';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navBg = useComponentBackground();
  return (
    <>
      <View style={{
        backgroundColor: Colors[colorScheme ?? 'light'].background,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: -1,
      }} />
      {/* Brand header */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48,
        marginBottom: 16,
      }}>
        <View style={{ marginRight: 12 }}>
          <Image
            source={colorScheme === 'dark' ? require('@/assets/images/logo_dark.png') : require('@/assets/images/logo.png')}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
            accessibilityLabel="Logo"
          />
        </View>
        <Image
          source={colorScheme === 'dark' ? require('@/assets/images/brand_name_dark.png') : require('@/assets/images/brand_name.png')}
          style={{ width: 120, height: 32 }}
          resizeMode="contain"
          accessibilityLabel="Brand Name"
        />
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
          headerShown: false,
          tabBarStyle: {
            height: 90,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            paddingTop: 16,
            paddingBottom: 16,
            display: 'flex',
            marginHorizontal: 12,
            marginBottom: 12,
            backgroundColor: navBg,
          },
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
          name="messages"
          options={{
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="bubble.left.and.bubble.right.fill" color={color} />, 
            title: 'Üzenetek',
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
    </>
  );
}
