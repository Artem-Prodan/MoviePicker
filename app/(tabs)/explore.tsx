// app/(tabs)/explore.tsx
// Explore screen (users can browse and search movies from the catalog)

import { router } from 'expo-router';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import MovieCard from '@/components/MovieCard';
import { MOVIES } from '@/constants/movies';
import { COLORS, SPACING } from '@/constants/theme';
import { useMovieContext } from '@/context/MovieContext';

export default function ExploreScreen() {

  const { saveMovie } = useMovieContext();
  // stores current text entered in the search field
  const [searchQuery, setSearchQuery] = useState('');

  // filters movies by title
  const filteredMovies = MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search movies..."
        placeholderTextColor={COLORS.secondaryText}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredMovies}
        keyExtractor={(movie) => movie.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => router.push(`/movie/${item.id}`)}
            onSave={() => saveMovie(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.text,
    textAlign: 'center',
    marginTop: 26,
    marginBottom: 24,
  },

  searchInput: {
  backgroundColor: COLORS.card,
  color: COLORS.text,
  borderRadius: 14,
  padding: SPACING.md,
  marginBottom: SPACING.lg,
  fontSize: 16,
  },
});