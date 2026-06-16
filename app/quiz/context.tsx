// app/quiz/context.tsx
// 3 quiz step where user chooses who they are watching with

import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CONTEXTS } from '../../constants/movies';
import { COLORS, SPACING } from '../../constants/theme';

export default function ContextScreen() {
  const { mood, genre } = useLocalSearchParams<{
    mood: string;
    genre: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you watching with?</Text>

      <View style={styles.options}>
        {CONTEXTS.map((context) => (
          <Pressable
            key={context}
            style={({ pressed }) => [
              styles.option,
              pressed && styles.optionPressed,
            ]}
            onPress={() =>
              router.push({
                pathname: '/quiz/results',
                params: { mood, genre, context },
              })
            }
          >
            <Text style={styles.optionText}>{context}</Text>
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