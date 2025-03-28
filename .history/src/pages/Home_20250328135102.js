import React, { useEffect } from "react";
import { useDispatch, useSelector, useState } from "react-redux";
import { fetchMovies } from "../store/actions";
import { setPage } from "../store/actions";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { TailSpin } from 'react-loader-spinner';

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState("pokemon");

  useEffect(() => {
    console.log("Current page changed:", movies.currentPage);
    dispatch(fetchMovies(searchQuery, movies.currentPage));
  }, [dispatch, movies.currentPage, searchQuery]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    dispatch(setPage(1));
  };

  return (
    <div>
      <h1 className="page-title">Movie Explorer</h1>
      <SearchBar  onSearch={handleSearch}/>
      {movies.loading && (
        <div className="loading-overlay">
          {/* TailSpin spinner'ını burada gösteriyoruz */}
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
