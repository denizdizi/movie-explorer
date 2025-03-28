import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions";
import { setPage } from "../store/actions";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    console.log("Current page changed:", movies.currentPage);
    dispatch(fetchMovies("pokemon", movies.currentPage));
  }, [dispatch, movies.currentPage]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div>
      <h1 className="page-title">Movie Explorer</h1>
      <SearchBar />
      {movies.loading && <p>Yükleniyor...</p>}
      {movies.error && <p>Hata: {movies.error}</p>}
      <MovieList movies={movies} />
      <Pagination
        currentPage={movies.currentPage}
        totalResults={movies.totalResults}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
