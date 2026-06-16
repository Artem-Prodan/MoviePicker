// app/quiz/genre.tsx
// 2 quiz step where user chooses a preferred movie genre

import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GENRES } from '../../constants/movies';
import { COLORS, SPACING } from '../../constants/theme';

export default function GenreScreen() {
  const { mood } = useLocalSearchParams<{ mood: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What genre do you want?</Text>

      <View style={styles.options}>
        {GENRES.map((genre) => (
          <Pressable
            key={genre}
            style={({ pressed }) => [
              styles.option,
              pressed && styles.optionPressed,
            ]}
            onPress={() =>
              router.push({
                pathname: '/quiz/context',
                params: { mood, genre },
              })
            }
          >
            <Text style={styles.optionText}>{genre}</Text>
          </Pressable>
        ))}
      </View>
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
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: SPACING.lg,
  },

  options: {
    gap: SPACING.sm,
  },

  option: {
    padding: SPACING.md,
    borderRadius: 14,
    backgroundColor: COLORS.card,
  },

  optionPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  optionText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
});