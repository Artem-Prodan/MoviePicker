
// displaying user information and saved movies

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import MovieCard from '@/components/MovieCard';
import { COLORS, SPACING } from '@/constants/theme';
import { useMovieContext } from '@/context/MovieContext';

export default function ProfileScreen() {
  const { username, profileImage, savedMovies, removeMovie } = useMovieContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.usernameRow}>
        <Text style={styles.username}>{username}</Text>

        <Pressable onPress={()=> router.push('/profile-modal')}>
          <Ionicons
            name="create-outline"
            size={22}
            color={COLORS.primary}
          />
        </Pressable>
      </View>

      <View style={styles.profileInfo}>
         <View style={styles.avatar}>
          {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.avatarImage} />
            ) : (
              <Ionicons
                name="person-outline"
                size={44}
                color={COLORS.secondaryText}
              />
            )}
          </View>

        <View style={styles.savedInfo}>
          <Text style={styles.savedNumber}>{savedMovies.length}</Text>
          <Text style={styles.savedLabel}>saved movies</Text>
        </View>
      </View>

      <View style={styles.watchlistHeader}>
          <Text style={styles.watchlistTitle}>
             Watchlist
          </Text>

          <Ionicons
            name="folder-outline"
            size={22}
            color={COLORS.primary}
          />
      </View>

      <FlatList
        data={savedMovies}
        keyExtractor={(movie) => movie.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => router.push(`/movie/${item.id}`)}
            onSave={() => removeMovie(item.id)}
            buttonLabel="Remove"
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No saved movies yet.
          </Text>
        }
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
    marginBottom: 50,
  },

  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
  },

  username: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },

  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: SPACING.lg,
    marginBottom: 32,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B1A60',
    overflow: 'hidden',
  },

  avatarImage: {
  width: '100%',
  height: '100%',
},

  savedInfo: {
    alignItems: 'center',
    flex: 1,
  },

  savedNumber: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.primary,
  },

  savedLabel: {
    fontSize: 15,
    color: COLORS.secondaryText,
    marginTop: SPACING.xs,
  },

  watchlistHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },

  watchlistTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },

  emptyText: {
    color: COLORS.secondaryText,
    fontSize: 15,
    marginTop: SPACING.sm,
  },
});