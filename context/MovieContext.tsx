// context/MovieContext.tsx
// Global app state for profile data and saved movies with AsyncStorage

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { MOVIES } from '@/constants/movies';
import { Movie } from '@/types/movie';

type MovieContextType = {
  username: string;
  profileImage: string | null;
  savedMovies: Movie[];

  saveMovie: (movie: Movie) => void;
  removeMovie: (movieId: string) => void;
  updateUsername: (newUsername: string) => void;
  updateProfileImage: (imageUri: string | null) => void;
};

const USERNAME_KEY = 'moviepicker_username';
const PROFILE_IMAGE_KEY = 'moviepicker_profile_image';
const SAVED_MOVIE_IDS_KEY = 'moviepicker_saved_movie_ids';

const MovieContext = createContext<MovieContextType | undefined>(undefined);

type MovieProviderProps = {
  children: ReactNode;
};

export function MovieProvider({ children }: MovieProviderProps) {
  const [username, setUsername] = useState('DemoUser');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [savedMovieIds, setSavedMovieIds] = useState<string[]>([]);

  // Rebuild saved movie objects from stored IDs
  // This avoids saving local images directly into AsyncStorage
  const savedMovies = MOVIES.filter((movie) => savedMovieIds.includes(movie.id));

  useEffect(() => {
    loadStoredData();
  }, []);

  async function loadStoredData() {
    try {
      const storedUsername = await AsyncStorage.getItem(USERNAME_KEY);
      const storedProfileImage = await AsyncStorage.getItem(PROFILE_IMAGE_KEY);
      const storedMovieIds = await AsyncStorage.getItem(SAVED_MOVIE_IDS_KEY);

      if (storedUsername) {
        setUsername(storedUsername);
      }

      if (storedProfileImage) {
        setProfileImage(storedProfileImage);
      }

      if (storedMovieIds) {
        setSavedMovieIds(JSON.parse(storedMovieIds));
      }
    } catch (error) {
      console.log('Failed to load stored app data:', error);
    }
  }

  async function saveMovie(movie: Movie) {
    setSavedMovieIds((currentIds) => {
      const isAlreadySaved = currentIds.includes(movie.id);

      // Prevents the same movie from being saved multiple times
      if (isAlreadySaved) {
        return currentIds;
      }

      const updatedIds = [...currentIds, movie.id];

      AsyncStorage.setItem(SAVED_MOVIE_IDS_KEY, JSON.stringify(updatedIds));

      return updatedIds;
    });
  }

  async function removeMovie(movieId: string) {
    setSavedMovieIds((currentIds) => {
      const updatedIds = currentIds.filter((id) => id !== movieId);

      AsyncStorage.setItem(SAVED_MOVIE_IDS_KEY, JSON.stringify(updatedIds));

      return updatedIds;
    });
  }

  async function updateUsername(newUsername: string) {
    setUsername(newUsername);
    await AsyncStorage.setItem(USERNAME_KEY, newUsername);
  }

  async function updateProfileImage(imageUri: string | null) {
    setProfileImage(imageUri);

    if (imageUri) {
      await AsyncStorage.setItem(PROFILE_IMAGE_KEY, imageUri);
    } else {
      await AsyncStorage.removeItem(PROFILE_IMAGE_KEY);
    }
  }

  return (
    <MovieContext.Provider
      value={{
        username,
        profileImage,
        savedMovies,
        saveMovie,
        removeMovie,
        updateUsername,
        updateProfileImage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('useMovieContext must be used inside MovieProvider');
  }

  return context;
}