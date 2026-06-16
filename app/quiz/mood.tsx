// app/quiz/mood.tsx
// 1 quiz step where user chooses their current mood

import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MOODS } from '../../constants/movies';
import { COLORS, SPACING } from '../../constants/theme';

export default function MoodScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling?</Text>

      <View style={styles.options}>
        {MOODS.map((mood) => (
          <Pressable
            key={mood}
            style={({ pressed }) => [
              styles.option,
              pressed && styles.optionPressed,
            ]}
            onPress={() =>
              router.push({
                pathname: '/quiz/genre',
                params: { mood },
              })
            }
          >
            <Text style={styles.optionText}>{mood}</Text>
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

  // visual feedback when button pressed
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