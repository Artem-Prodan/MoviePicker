// utils/movieUtils.ts
// Helper functions for filtering and recommending movies.

import { MOVIES } from '@/constants/movies';
import { Movie } from '@/types/movie';

type ScoredMovie = Movie & {
  score: number;
};

export function searchMoviesByTitle(query: string): Movie[] {
  return MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
}

export function getRecommendedMovies(
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

export function isMovieAlreadySaved(savedMovies: Movie[], movieId: string) {
  return savedMovies.some((movie) => movie.id === movieId);
}