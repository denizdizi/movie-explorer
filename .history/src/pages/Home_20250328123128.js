import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions";
import { setPage } from "../store/actions";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, currentPage, loading, error } = useSelector((state) => state);

  useEffect(() => {
    fetchMovies("pokemon", currentPage).then((data) => {
      dispatch({
        type: "SET_MOVIES",
        payload: { movies: data.Search, totalResults: data.totalResults },
      });
    });
  }, [dispatch, currentPage]);

  return (
    <div>
      <h1 className="page-title">Movie Explorer</h1>
      <SearchBar />
      {loading && <p>Yükleniyor...</p>}
      {error && <p>Hata: {error}</p>}
      <MovieList movies={movies} />
      <Pagination />
    </div>
  );
};

export default Home;
