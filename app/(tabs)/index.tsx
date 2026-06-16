// app/(tabs)/index.tsx
// Home screen where users start recommendation quiz.

import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MoviePicker</Text>

      <Text style={styles.title}>
        What do you feel like watching tonight?
      </Text>

      <Text style={styles.subtitle}>
        Answer a short quiz and get movie suggestions based on your preferences.
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => router.push('/quiz/mood')}
      >
        <Text style={styles.buttonText}>Play Quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },

  logo: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 100,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.secondaryText,
    marginBottom: 32,
    textAlign: 'center',
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonPressed: {
    opacity: 0.7,
  },

  buttonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
  },
});