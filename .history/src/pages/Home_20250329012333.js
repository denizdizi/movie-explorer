import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions";
import { setPage } from "../store/actions";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { TailSpin } from 'react-loader-spinner';

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovies(movies.formData.query, movies.currentPage, movies.formData.type, movies.formData.year));
  }, [dispatch, movies.currentPage]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div>
      <h1 className="page-title">Movie Explorer</h1>
      <SearchBar/>
      {movies.loading && (
        <div className="loading-overlay">
          <TailSpin 
            height="100" 
            width="100" 
            color="#00BFFF" 
            ariaLabel='loading' 
          />
        </div>
      )}
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
