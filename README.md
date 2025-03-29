# Movie Explorer

## Project Overview
Movie Explorer is a single-page application (SPA) that allows users to search for and view details of movies using the OMDb API. Users can browse movies, filter by year and type, and view detailed information about selected movies.

## Features
- List movies in a grid format with images and titles.
- Pagination to display 10 movies per page.
- Search functionality to filter movies by name (default search: "Pokemon").
- Filter movies by release year and type (movie, series, episode).
- Click on a movie to view details including poster, title, duration, genre, director, cast, IMDb rating, and plot.
- Navigation between the home page and movie details page.

## Technologies Used
- **Frontend Framework:** React
- **State Management:** Redux
- **API:** OMDb API
- **Styling:** CSS / SCSS (Material UI / Bootstrap optional)
- **Version Control:** Git

## File Structure
```
MovieExplorer/
│── public/
│   ├── index.html
│   ├── favicon.ico
│── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── SearchBar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── MovieDetails.js
│   ├── store/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   ├── store.js
│   ├── styles/
│   │   ├── global.scss
│   │   ├── movie.scss
│   ├── utils/
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md
│── .gitignore
```

## API Usage
The application fetches movie data from the OMDb API.
```
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=pokemon
```
Parameters:
- `s`: Search by movie name
- `y`: Filter by release year
- `type`: Filter by type (movie, series, episode)
- `i`: Fetch movie details by IMDb ID

## Installation and Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/MovieExplorer.git
   cd MovieExplorer
   ```
2. Install dependencies:
   ```sh
   npm install --legacy-peer-deps
   ```
3. Build the application:
   ```sh
   npm run build
   ```
4. Start the application:
   ```sh
   npm run start
   ```

## License
This project is open-source and available under the MIT License.

