import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // e.preventDefault();
    // if (query.trim() !== "") {
    //   dispatch(fetchMovies(query, 1));
    // }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <div className="input-wrapper">
        <div className="col-lg-6 align-left">
        <input
          type="text"
          placeholder="Film ara..."
          className="search-input"
        />
        </div>
        <div className="col-lg-3 align-left">
        <input
          type="text"
          placeholder="Type"
          className="search-input"
        />
        </div>
        <div className="col-lg-3 align-left">
        <input
          type="year"
          placeholder="Year"
          className="search-input"
        />
        </div>

      </div>
      <button type="submit" className="search-btn">
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
