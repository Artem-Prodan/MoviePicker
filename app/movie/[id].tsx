
// Detailed movie screen shown after a user taps on a movie card

import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { MOVIES } from '../../constants/movies';
import { COLORS, SPACING } from '../../constants/theme';

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams();

  // Find selected movie based on the dynamic route parameter
  const movie = MOVIES.find((item) => item.id === id);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={movie.image} style={styles.image} />

      <Text style={styles.title}>{movie.title}</Text>

      <Text style={styles.meta}>
        {movie.year} • {movie.director}
      </Text>

      <Text style={styles.sectionTitle}>Genres</Text>
      <Text style={styles.text}>{movie.genres.join(', ')}</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.text}>{movie.description}</Text>

      <Text style={styles.sectionTitle}>Recommended moods</Text>
      <Text style={styles.text}>{movie.moods.join(', ')}</Text>

      <Text style={styles.sectionTitle}>Best context</Text>
      <Text style={styles.text}>{movie.contexts.join(', ')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: SPACING.lg,
  },

  image: {
    width: '100%',
    height: 420,
    borderRadius: 18,
    marginBottom: SPACING.lg,
    backgroundColor: '#333',
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },

  meta: {
    fontSize: 15,
    color: COLORS.secondaryText,
    marginBottom: SPACING.lg,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 20,
    marginBottom: SPACING.sm,
  },

  text: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.secondaryText,
  },
});