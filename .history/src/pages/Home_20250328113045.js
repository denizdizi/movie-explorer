import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovies("pokemon")); // Varsayılan olarak bir film listesi getir
  }, [dispatch]);

  return (
    <div>
      <h1 className="page-title">Movie Explorer</h1>
      <SearchBar />
      {loading && <p>Yükleniyor...</p>}
      {error && <p>Hata: {error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
