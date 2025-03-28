import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../styles/movie.scss";
import { fetchMoviesById } from "../store/actions";


const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.selectedMovie);
    const { movies } = useSelector((state) => state);
  

  useEffect(() => {
    dispatch(fetchMoviesById(id));
  }, [dispatch, id]);

  return (
    <div className="movie-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        Geri Dön
      </button>
      {selectedMovie && (
        <div className="movie-details">
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="movie-poster" />
          <div className="movie-info">
            <h2>{selectedMovie.Title}</h2>
            <p><strong>Süre:</strong> {selectedMovie.Runtime}</p>
            <p><strong>Tür:</strong> {selectedMovie.Genre}</p>
            <p><strong>Yönetmen:</strong> {selectedMovie.Director}</p>
            <p><strong>Oyuncular:</strong> {selectedMovie.Actors}</p>
            <p><strong>IMDb Puanı:</strong> {selectedMovie.imdbRating}</p>
            <p><strong>Özet:</strong> {selectedMovie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
