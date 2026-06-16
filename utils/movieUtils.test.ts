import {
  getRecommendedMovies,
  isMovieAlreadySaved,
  searchMoviesByTitle,
} from './movieUtils';

import { MOVIES } from '@/constants/movies';

// Tests for movie search, recommendation, and watchlist helper functions
describe('movieUtils', () => {

  // 1 - verifies that a movie can be found using its exact title
  test('searchMoviesByTitle finds a movie by full title', () => {
    const result = searchMoviesByTitle('Interstellar');

    expect(result[0].title).toBe('Interstellar');
  });

  // 2 - verifies that search is case-insensitive
  test('searchMoviesByTitle works with lowercase input', () => {
    const result = searchMoviesByTitle('matrix');

    expect(result[0].title).toBe('The Matrix');
  });

  // 3 - verifies that searching for a non-existent movie returns no results
  test('searchMoviesByTitle returns an empty array when nothing matches', () => {
    const result = searchMoviesByTitle('random unknown movie');

    expect(result).toHaveLength(0);
  });

  // 4 - verifies that the recommendation system always returns three movies
  test('getRecommendedMovies returns exactly 3 movies', () => {
    const result = getRecommendedMovies('Inspired', 'Sci-Fi', 'Alone');

    expect(result).toHaveLength(3);
  });

  // 5 - verifies that movies matching the most quiz criteria are ranked first
  test('getRecommendedMovies prioritizes movies matching all selected criteria', () => {
    const result = getRecommendedMovies('Inspired', 'Sci-Fi', 'Alone');

    expect(result[0].title).toBe('Interstellar');
  });

  // 6 - verifies that recommendations are still generated even for uncommon combinations
  test('getRecommendedMovies still returns results for unusual combinations', () => {
    const result = getRecommendedMovies('Romantic', 'Horror', 'Family');

    expect(result).toHaveLength(3);
  });

  // 7 - verifies that the helper correctly detects a movie already present in the watchlist
  test('isMovieAlreadySaved returns true when movie is saved', () => {
    const savedMovies = [MOVIES[0]];

    expect(isMovieAlreadySaved(savedMovies, MOVIES[0].id)).toBe(true);
  });

  // 8 - verifies that the helper correctly identifies a movie not present in the watchlist
  test('isMovieAlreadySaved returns false when movie is not saved', () => {
    const savedMovies = [MOVIES[0]];

    expect(isMovieAlreadySaved(savedMovies, MOVIES[1].id)).toBe(false);
  });
});