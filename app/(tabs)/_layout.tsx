
// Defines the bottom tab navigation used to switch between the main sections of the app

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, TAB_BAR } from '../../constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Active and inactive colors for tab icons and labels
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondaryText,
        tabBarStyle: TAB_BAR,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Quiz',

          // Home tab where users start the movie quiz
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="help-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',

          // Browse and search movies from the catalog
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="search-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',

          // User profile screen
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  );
}