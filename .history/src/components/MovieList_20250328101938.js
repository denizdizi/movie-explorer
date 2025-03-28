import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>Film bulunamadı.</p>;
  }

  return (
    <div className="movie-list">
      <div className="row movie-line">
        {movies.slice(0, 5).map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div className="row movie-line">
        {movies.slice(5, 10).map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
