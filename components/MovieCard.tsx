// components/MovieCard.tsx
// Reusable movie preview card used in lists and quiz results

import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../constants/theme';
import { Movie } from '../types/movie';

type MovieCardProps = {
  movie: Movie;
  onPress: () => void;
  onSave?: () => void;

  // Allows different button labels depending on screen context
  buttonLabel?: string;
};

export default function MovieCard({
  movie,
  onPress,
  onSave,
  buttonLabel = 'Save',
}: MovieCardProps) {
  function handleSavePress() {
    if (!onSave) {
      return;
    }

    onSave();

    // Shows simple feedback after saving or removing a movie.
    if (buttonLabel === 'Remove') {
      Alert.alert('Removed', `${movie.title} removed from Watchlist`);
    } else {
      Alert.alert('Saved', `${movie.title} saved to Watchlist`);
    }
  }

  return (
    <Pressable
    style={({pressed})=>[
      styles.card,
      pressed && styles.cardPressed,
    ]}
    onPress={onPress}>
      <Image source={movie.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.genres}>{movie.genres.join(', ')}</Text>
      </View>

      {/* Action button, used as Save in Explore and Remove in Profile */}
      {onSave && (
        <Pressable
          style={({ pressed }) => [
            styles.saveButton,
            pressed && styles.saveButtonPressed,
          ]}
          onPress={handleSavePress}
        >
          <Text style={styles.saveText}>{buttonLabel}</Text>
        </Pressable>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
   cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  image: {
    width: 64,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#333',
  },

  info: {
    flex: 1,
    marginLeft: SPACING.md,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },

  genres: {
    fontSize: 13,
    color: COLORS.secondaryText,
  },

  saveButton: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
  },

  saveButtonPressed: {
    opacity: 0.6,
  },

  saveText: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 12,
  },
});