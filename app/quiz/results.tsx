// app/quiz/results.tsx
// Displays movie recommendations based on the user's quiz answers
// Movies are ranked using a score-based matching system which shows top 3 results

import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import MovieCard from '../../components/MovieCard';
import { MOVIES } from '../../constants/movies';
import { COLORS, SPACING } from '../../constants/theme';
import { Movie } from '../../types/movie';

// Extends the Movie type, adding score used during recommendation calculation
type ScoredMovie = Movie & {
  score: number;
};

export default function ResultsScreen() {
  // Retrieve quiz answers passed from previous screens
  const { mood, genre, context } = useLocalSearchParams<{
    mood: string;
    genre: string;
    context: string;
  }>();

  // Stores the final movie selected after pressing the Eliminate button
  const [finalMovie, setFinalMovie] = useState<Movie | null>(null);

  // Calculate the three best recommendations
  const recommendedMovies = getRecommendedMovies(mood, genre, context);

  // Randomly selects one movie from the top recommendations
  function handleEliminate() {
    const randomIndex = Math.floor(Math.random() * recommendedMovies.length);
    setFinalMovie(recommendedMovies[randomIndex]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your movie matches</Text>

      <Text style={styles.subtitle}>Based on your picks:</Text>

      <View style={styles.selectionContainer}>
        <Text style={styles.selection}>• {mood}</Text>
        <Text style={styles.selection}>• {genre}</Text>
        <Text style={styles.selection}>• {context}</Text>
      </View>

      {/* If a final movie has been selected, show only that movie */}
      {finalMovie ? (
        <View>
          <Text style={styles.finalTitle}>Final pick:</Text>

          <MovieCard
            movie={finalMovie}
            onPress={() => router.push(`/movie/${finalMovie.id}`)}
          />
        </View>
      ) : (
        /* otherwise display three highest-ranked recommendations*/
        <FlatList
          data={recommendedMovies}
          keyExtractor={(movie) => movie.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onPress={() => router.push(`/movie/${item.id}`)}
            />
          )}
        />
      )}

      {!finalMovie && (
        <View style={styles.eliminateContainer}>
          <Text style={styles.eliminateTitle}>Can’t choose one?</Text>

          <Text style={styles.eliminateText}>
            Let MoviePicker decide for you.
          </Text>
        </View>
      )}

      {/* After elimination, show Back Home instead of Eliminate */}
      {!finalMovie ? (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleEliminate}
        >
          <Text style={styles.buttonText}>Eliminate</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.secondaryButtonText}>Back Home</Text>
        </Pressable>
      )}
    </View>
  );
}

/*
  Recommendation Algorithm

  Each movie starts with a score of 0.

  +1 point if the movie matches the selected mood.
  +1 point if the movie matches the selected genre.
  +1 point if the movie matches the selected context.

  Movies are sorted by score and the top 3 are displayed.
*/
function getRecommendedMovies(
  selectedMood: string,
  selectedGenre: string,
  selectedContext: string
): Movie[] {
  const scoredMovies: ScoredMovie[] = MOVIES.map((movie) => {
    let score = 0;

    if (movie.moods.includes(selectedMood)) {
      score += 1;
    }

    if (movie.genres.includes(selectedGenre)) {
      score += 1;
    }

    if (movie.contexts.includes(selectedContext)) {
      score += 1;
    }

    return {
      ...movie,
      score,
    };
  });

  return scoredMovies
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },

  subtitle: {
    fontSize: 15,
    color: COLORS.secondaryText,
    marginBottom: SPACING.sm,
  },

  selectionContainer: {
    marginBottom: SPACING.lg,
  },

  selection: {
    color: COLORS.secondaryText,
    fontSize: 15,
    marginTop: SPACING.xs,
  },

  finalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },

  secondaryButton: {
    paddingVertical: SPACING.md,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 16,
  },

  secondaryButtonText: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 16,
  },

  eliminateContainer: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.sm,
  },

  eliminateTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },

  eliminateText: {
    color: COLORS.secondaryText,
    fontSize: 14,
    textAlign: 'center',
  },
});