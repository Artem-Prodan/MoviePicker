// app/_layout.tsx
// Root navigation configuration for the app using Expo Router.

import { Stack } from 'expo-router';
import { COLORS } from '../constants/theme';
import { MovieProvider } from '@/context/MovieContext';

const screenOptions = {
  headerStyle: {
    backgroundColor: COLORS.background,
  },
  headerTintColor: COLORS.primary,
};

export default function RootLayout() {
  return (
    <MovieProvider>
      <Stack>
        {/* Main tab navigation: Quiz, Explore, Profile */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        {/* Quiz flow screens */}
        <Stack.Screen
          name="quiz/mood"
          options={{
            title: 'Mood',
            ...screenOptions,
            headerBackButtonDisplayMode: 'minimal' as const,
          }}
        />

        <Stack.Screen
          name="quiz/genre"
          options={{
            title: 'Genre',
            ...screenOptions,
          }}
        />

        <Stack.Screen
          name="quiz/context"
          options={{
            title: 'Context',
            ...screenOptions,
          }}
        />

        <Stack.Screen
          name="quiz/results"
          options={{
            title: 'Results',
            ...screenOptions,
          }}
        />

        {/* Detailed movie screen */}
        <Stack.Screen
          name="movie/[id]"
          options={{
            title: 'Movie Details',
            ...screenOptions,
            headerTintColor: '#fff',
            headerBackButtonDisplayMode: 'minimal' as const,
          }}
        />

          <Stack.Screen
          name="profile-modal"
          options={{
            title: 'Edit Profile',
            presentation: 'modal',
            ...screenOptions,
          }}
        />
      </Stack>
    </MovieProvider>
  );
}