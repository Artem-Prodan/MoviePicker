// constants/movies.ts
// Static movie catalog used by the quiz and explore screens
// constants/movies.ts
// Static movie catalog and filter options used by the quiz and explore screens.

import { Movie } from '../types/movie';

export const MOODS = [
  'Sad',
  'Tired',
  'Bored',
  'Happy',
  'Excited',
  'Inspired',
  'Romantic',
  'Stressed',
];

export const GENRES = [
  'Sci-Fi',
  'Action',
  'Horror',
  'Drama',
  'Thriller',
  'Fantasy',
  'Comedy',
  'Romance',
];

export const CONTEXTS = [
  'Alone',
  'Family',
  'Friends',
  'Partner',
];

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Interstellar',
    image: require('../assets/images/interstellar.jpg'),
    genres: ['Sci-Fi', 'Drama'],
    moods: ['Inspired', 'Bored'],
    contexts: ['Alone', 'Partner'],
    director: 'Christopher Nolan',
    year: 2014,
    description:
      'A team of explorers travel through a wormhole in search of a new home for humanity.',
  },

  {
    id: '2',
    title: 'The Dark Knight',
    image: require('../assets/images/dark-knight.jpg'),
    genres: ['Action', 'Thriller', 'Drama'],
    moods: ['Excited', 'Bored'],
    contexts: ['Alone', 'Friends'],
    director: 'Christopher Nolan',
    year: 2008,
    description:
      'Batman faces the Joker, a criminal mastermind who throws Gotham into chaos.',
  },

  {
    id: '3',
    title: 'La La Land',
    image: require('../assets/images/la-la-land.jpg'),
    genres: ['Romance', 'Drama'],
    moods: ['Romantic', 'Happy', 'Sad'],
    contexts: ['Partner'],
    director: 'Damien Chazelle',
    year: 2016,
    description:
      'A musician and an aspiring actress pursue their dreams while falling in love.',
  },

  {
    id: '4',
    title: 'Toy Story',
    image: require('../assets/images/toy-story.jpg'),
    genres: ['Comedy', 'Fantasy'],
    moods: ['Happy', 'Sad', 'Tired'],
    contexts: ['Family'],
    director: 'John Lasseter',
    year: 1995,
    description:
      'A group of toys secretly come to life when humans are not around.',
  },

  {
    id: '5',
    title: 'Saw',
    image: require('../assets/images/saw.jpg'),
    genres: ['Horror', 'Thriller'],
    moods: ['Excited', 'Bored'],
    contexts: ['Friends', 'Alone'],
    director: 'James Wan',
    year: 2004,
    description:
      'Two strangers wake up trapped in a deadly game designed by the mysterious Jigsaw Killer.',
  },

  {
    id: '6',
    title: 'Back to the Future',
    image: require('../assets/images/back-to-the-future.jpg'),
    genres: ['Sci-Fi', 'Comedy'],
    moods: ['Happy', 'Inspired', 'Tired'],
    contexts: ['Family', 'Friends'],
    director: 'Robert Zemeckis',
    year: 1985,
    description:
      'A teenager accidentally travels back in time and must ensure his parents fall in love.',
  },

  {
    id: '7',
    title: 'Shrek',
    image: require('../assets/images/shrek.jpg'),
    genres: ['Comedy', 'Fantasy'],
    moods: ['Happy', 'Sad', 'Tired'],
    contexts: ['Family', 'Friends', 'Partner'],
    director: 'Andrew Adamson',
    year: 2001,
    description:
      'An ogre sets out on a journey to rescue a princess and unexpectedly finds friendship and love.',
  },

  {
    id: '8',
    title: 'Inception',
    image: require('../assets/images/inception.jpg'),
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    moods: ['Inspired', 'Excited', 'Bored'],
    contexts: ['Alone', 'Friends'],
    director: 'Christopher Nolan',
    year: 2010,
    description:
      'A skilled thief enters people’s dreams to steal secrets and perform the impossible task of planting an idea.',
  },

  {
    id: '9',
    title: 'Titanic',
    image: require('../assets/images/titanic.jpg'),
    genres: ['Romance', 'Drama'],
    moods: ['Romantic', 'Sad'],
    contexts: ['Partner', 'Alone'],
    director: 'James Cameron',
    year: 1997,
    description:
      'A young couple from different social classes fall in love aboard the ill-fated RMS Titanic.',
  },

  {
    id: '10',
    title: 'The Matrix',
    image: require('../assets/images/matrix.jpg'),
    genres: ['Sci-Fi', 'Action'],
    moods: ['Inspired', 'Excited', 'Bored'],
    contexts: ['Alone', 'Friends'],
    director: 'The Wachowskis',
    year: 1999,
    description:
      'A hacker discovers the shocking truth about reality and his role in the war against intelligent machines.',
  },

  {
    id: '11',
    title: "Harry Potter and the Sorcerer’s Stone",
    image: require('../assets/images/harry-potter.jpg'),
    genres: ['Fantasy', 'Drama'],
    moods: ['Happy', 'Inspired', 'Tired'],
    contexts: ['Family', 'Friends'],
    director: 'Chris Columbus',
    year: 2001,
    description:
      'A young boy discovers he is a wizard and begins his first year at Hogwarts School of Witchcraft and Wizardry.',
  },
  {
  id: '12',
  title: 'A Nightmare on Elm Street',
  image: require('../assets/images/nightmare-on-the-elm-street.jpg'),
  genres: ['Horror', 'Thriller'],
  moods: ['Excited', 'Bored'],
  contexts: ['Friends', 'Alone'],
  director: 'Wes Craven',
  year: 1984,
  description:
    'Teenagers are hunted in their dreams by the terrifying Freddy Krueger.',
},

{
  id: '13',
  title: 'Scream',
  image: require('../assets/images/scream.jpg'),
  genres: ['Horror', 'Thriller'],
  moods: ['Excited', 'Bored'],
  contexts: ['Friends', 'Partner'],
  director: 'Wes Craven',
  year: 1996,
  description:
    'A masked killer targets a group of teenagers while mocking horror movie clichés.',
},

{
  id: '14',
  title: 'Zombieland',
  image: require('../assets/images/zombieland.jpg'),
  genres: ['Comedy', 'Action'],
  moods: ['Happy', 'Bored', 'Tired'],
  contexts: ['Friends', 'Alone'],
  director: 'Ruben Fleischer',
  year: 2009,
  description:
    'A group of survivors travel across a zombie-infested America while trying to enjoy life.',
},

{
  id: '15',
  title: 'Star Wars: Revenge of the Sith',
  image: require('../assets/images/star-wars-3.jpg'),
  genres: ['Sci-Fi', 'Action'],
  moods: ['Excited', 'Inspired'],
  contexts: ['Friends', 'Alone'],
  director: 'George Lucas',
  year: 2005,
  description:
    'Anakin Skywalker falls to the dark side as the Republic collapses and the Empire rises.',
},

{
  id: '16',
  title: 'Mission: Impossible - Fallout',
  image: require('../assets/images/mission-impossible-fallout.jpg'),
  genres: ['Action', 'Thriller'],
  moods: ['Excited', 'Bored'],
  contexts: ['Friends', 'Alone'],
  director: 'Christopher McQuarrie',
  year: 2018,
  description:
    'Ethan Hunt races against time to stop a global catastrophe after a mission goes wrong.',
},

{
  id: '17',
  title: 'A Complete Unknown',
  image: require('../assets/images/complete-unknown.jpg'),
  genres: ['Drama'],
  moods: ['Inspired', 'Tired'],
  contexts: ['Alone', 'Partner'],
  director: 'James Mangold',
  year: 2024,
  description:
    'The story of Bob Dylan’s rise from a young folk musician to a cultural icon.',
},

{
  id: '18',
  title: 'Barbie',
  image: require('../assets/images/barbie.jpg'),
  genres: ['Comedy', 'Fantasy'],
  moods: ['Happy', 'Inspired'],
  contexts: ['Friends', 'Partner'],
  director: 'Greta Gerwig',
  year: 2023,
  description:
    'Barbie leaves Barbieland and begins a journey of self-discovery in the real world.',
},

{
  id: '19',
  title: 'John Wick: Chapter 4',
  image: require('../assets/images/john-wick-4.jpg'),
  genres: ['Action', 'Thriller'],
  moods: ['Excited', 'Bored'],
  contexts: ['Friends', 'Alone'],
  director: 'Chad Stahelski',
  year: 2023,
  description:
    'John Wick faces the High Table in a final fight for freedom.',
},

{
  id: '20',
  title: "Pirates of the Caribbean: Dead Man's Chest",
  image: require('../assets/images/pirates-2.jpg'),
  genres: ['Fantasy', 'Action'],
  moods: ['Happy', 'Excited', 'Bored'],
  contexts: ['Family', 'Friends'],
  director: 'Gore Verbinski',
  year: 2006,
  description:
    'Captain Jack Sparrow must deal with a blood debt owed to the legendary Davy Jones.',
},

];