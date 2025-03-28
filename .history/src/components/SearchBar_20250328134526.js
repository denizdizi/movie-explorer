import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";

const SearchBar = () => {
  const [query, setQuery] = useState("pokemon");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(fetchMovies(query, 1));
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Film ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <button type="submit" className="search-btn">
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
