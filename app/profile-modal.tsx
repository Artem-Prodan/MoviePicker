
// Modal screen where the user can edit their username and profile picture

import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS, SPACING } from '@/constants/theme';
import { useMovieContext } from '@/context/MovieContext';

export default function ProfileModalScreen() {
  const {
    username,
    profileImage,
    updateUsername,
    updateProfileImage,
  } = useMovieContext();

  const [newUsername, setNewUsername] = useState(username);

  async function handlePickImage() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    // app handle denied permissions instead of crashing
    if (!permissionResult.granted) {
      Alert.alert(
        'Permission needed',
        'Please allow photo access to choose a profile picture.'
      );

      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      updateProfileImage(result.assets[0].uri);
    }
  }

  function handleSaveChanges() {
    updateUsername(newUsername.trim() || 'DemoUser');
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.avatar}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.avatarImage} />
        ) : (
          <Text style={styles.avatarPlaceholder}>No Photo</Text>
        )}
      </View>

      <Pressable
      style={({ pressed }) => [
          styles.secondaryButton,
          pressed && styles.buttonPressed,
        ]}
      onPress={handlePickImage}>
        <Text style={styles.secondaryButtonText}>Choose Photo</Text>
      </Pressable>

      {profileImage && (
        <Pressable
          style={({ pressed }) => [
          styles.secondaryButton,
          pressed && styles.buttonPressed,
        ]}
          onPress={() => updateProfileImage(null)}
        >
          <Text style={styles.secondaryButtonText}>Remove Photo</Text>
        </Pressable>
      )}

      <Text style={styles.label}>Username</Text>

      <TextInput
        style={styles.input}
        value={newUsername}
        onChangeText={setNewUsername}
        placeholder="Enter username"
        placeholderTextColor={COLORS.secondaryText}
      />

      <Pressable
      style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
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
    marginTop: SPACING.md,
    marginBottom: 32,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.card,
    marginBottom: SPACING.md,
    overflow: 'hidden',
  },

  avatarImage: {
    width: '100%',
    height: '100%',
  },

  avatarPlaceholder: {
    color: COLORS.secondaryText,
    fontSize: 14,
  },

  label: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: SPACING.sm,
    marginTop: SPACING.md,
  },

  input: {
    backgroundColor: COLORS.card,
    color: COLORS.text,
    borderRadius: 14,
    padding: SPACING.md,
    fontSize: 16,
    marginBottom: SPACING.lg,
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: 14,
    alignItems: 'center',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: SPACING.sm,
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
    color: COLORS.primary,
    fontWeight: '700',
  },
});