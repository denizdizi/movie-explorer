import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "../styles/movie.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.selectedMovie);

  useEffect(() => {
    dispatch(fetchMoviesById(id));
  }, [dispatch, id]);

  return (
    <div className="movie-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        Geri Dön
      </button>
      {movie && (
        <div className="movie-details">
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
          <div className="movie-info">
            <h2>{movie.Title}</h2>
            <p><strong>Süre:</strong> {movie.Runtime}</p>
            <p><strong>Tür:</strong> {movie.Genre}</p>
            <p><strong>Yönetmen:</strong> {movie.Director}</p>
            <p><strong>Oyuncular:</strong> {movie.Actors}</p>
            <p><strong>IMDb Puanı:</strong> {movie.imdbRating}</p>
            <p><strong>Özet:</strong> {movie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
