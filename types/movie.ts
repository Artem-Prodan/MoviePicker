
// Type definition
// describing the structure of a movie object

export type Movie = {
  id: string;
  title: string;
  image: any;

  genres: string[];
  moods: string[];
  contexts: string[];

  director: string;
  year: number;
  description: string;
};