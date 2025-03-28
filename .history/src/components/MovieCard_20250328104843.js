import React from "react";
import { Link } from "react-router-dom";
import "../styles/movie.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="img-container">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        <h3>{movie.Title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
