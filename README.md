# MoviePicker

MoviePicker is a React Native application built with Expo that helps users discover movies through a short recommendation quiz.

Users can answer a series of questions about their mood, preferred genre, and viewing context. Based on these selections, the application recommends movies from existing catalog using a score-based recommendation system.

The application also allows users to browse all movies, save to a watchlist, customize their profile, and persist their data between sessions.

---

## Features

### Quiz-Based Recommendations

Users answer three questions:

- Current mood
- Preferred genre
- Viewing context

The recommendation algorithm assigns points to movies that match the selected criteria and returns the three highest-ranked results.

### Movie Catalog

Browse a catalog of 20 movies across multiple genres including:

- Action
- Sci-Fi
- Horror
- Drama
- Comedy
- Fantasy
- Romance
- Thriller

### Search Functionality

The Explore screen includes a search bar that allows users to search movies by title.

### Movie Details

Each movie contains:

- Poster
- Title
- Release year
- Director
- Description
- Genres
- Matching moods
- Viewing contexts

### Watchlist

Users can:

- Save movies from the Explore screen
- Remove movies from the Profile screen
- View saved movies in a dedicated Watchlist section

### Profile Customization

Users can:

- Change their username
- Upload a profile picture
- Remove profile pictures

### Async Storage

User data is stored using AsyncStorage and remains available after restarting the application.

Saved data includes:

- Username
- Profile picture URI
- Watchlist

---

## Native Features

### 1. Image Picker

Implemented using:

```bash
expo-image-picker
```

Allows users to:

- Select a profile picture from the device gallery
- Crop images before saving

### 2. AsyncStorage

Implemented using:

```bash
@react-native-async-storage/async-storage
```

Stores:

- Username
- Profile picture
- Saved movie watchlist

Data persists between app launches.

---

## Recommendation Algorithm

Each movie starts with a score of 0.

The algorithm awards:

- +1 point if mood matches
- +1 point if genre matches
- +1 point if context matches

Movies are sorted by score and the top three results are displayed.

Example:

Selected:

- Mood: Inspired
- Genre: Sci-Fi
- Context: Alone

Movies matching all three criteria receive the highest ranking.

---

## Technologies Used

- React Native
- Expo
- Expo Router
- TypeScript
- React Context API
- Expo Image Picker
- AsyncStorage
- Jest

---

## Project Structure

```
app/
--(tabs)/
---- index.tsx
---- explore.tsx
---- profile.tsx
---- _layout.tsx

--movie/
---- [id].tsx

--quiz/
---- mood.tsx
---- genre.tsx
---- context.tsx
---- results.tsx

-- profile-modal.tsx
-- _layout.tsx

components/
-- MovieCard.tsx

context/
-- MovieContext.tsx

constants/
-- movies.ts
-- theme.ts

utils/
-- movieUtils.ts
-- movieUtils.test.ts

types/
-- movie.ts

assets/
-- images/
```

---

## Testing

The project contains 8 unit tests using Jest.

Test coverage includes:

### Search Functionality

- Search by exact title
- Case-insensitive search
- Empty results handling

### Recommendation Algorithm

- Returns exactly 3 recommendations
- Correct ranking of results
- Handles unusual quiz combinations

### Watchlist Helpers

- Detects saved movies
- Detects unsaved movies

Run tests using:

```bash
npm test
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Artem-Prodan/MoviePicker.git
```

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npx expo start
```

---

## Screenshots

### Home Screen
<img width="414" height="896" alt="IMG_0403" src="https://github.com/user-attachments/assets/c78cf214-1993-4e2e-b437-18e4bbd862a3" />

### Quiz Flow
<img width="414" height="896" alt="IMG_0407" src="https://github.com/user-attachments/assets/c59714fe-b10d-4883-826d-f16aabf8f655" />
<img width="414" height="896" alt="IMG_0408" src="https://github.com/user-attachments/assets/ef7ccc0b-65a0-420f-b010-5abd37f8399f" />
<img width="414" height="896" alt="IMG_0409" src="https://github.com/user-attachments/assets/151bd2eb-4d81-412f-8921-8a5caab397b2" />
<img width="414" height="896" alt="IMG_0410" src="https://github.com/user-attachments/assets/a36746ac-b011-4727-ad73-e37cf242d348" />

### Explore Screen
<img width="414" height="896" alt="IMG_0404" src="https://github.com/user-attachments/assets/c7498d14-1315-48d6-a7f5-b3b214900aae" />

### Movie Details
<img width="414" height="896" alt="IMG_0411" src="https://github.com/user-attachments/assets/8a9f4901-0f8f-47ef-8514-8d4af70b0360" />

### Profile Screen
<img width="414" height="896" alt="IMG_0405" src="https://github.com/user-attachments/assets/08d547b2-52f0-402c-a792-4e117a567202" />

### Edit Profile Modal
<img width="414" height="896" alt="IMG_0406" src="https://github.com/user-attachments/assets/1d72b29e-af64-4ed6-a1db-22558ea5c0da" />

---

## Author
Prodan Artem

Web and Mobile application development

VIZJA University in Warsaw

---
## Build

The project was configured and built using EAS Build.

Preview Android build command:

```bash
eas build --platform android --profile preview
```

---
---

# Expo app config

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

Project can be modified by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

