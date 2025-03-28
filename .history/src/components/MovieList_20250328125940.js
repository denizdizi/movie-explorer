import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ result }) => {
  if (!result.movies || result.movies.length === 0) {
    return <p>Film bulunamadı.</p>;
  }

  return (
    <div className="movie-list">
      <div className="row movie-line">
        {result.movies.slice(0, 5).map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div className="row movie-line">
        {result.movies.slice(5, 10).map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
