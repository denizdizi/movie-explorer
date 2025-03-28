import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions";
import { setPage } from "../store/actions";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, currentPage, totalResults, loading, error, query } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovies("pokemon", currentPage));
  }, [dispatch, currentPage, query]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div>
      <h1 className="page-title">Movie Explorer</h1>
      <SearchBar />
      {loading && <p>Yükleniyor...</p>}
      {error && <p>Hata: {error}</p>}
      <MovieList movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalResults={totalResults}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
