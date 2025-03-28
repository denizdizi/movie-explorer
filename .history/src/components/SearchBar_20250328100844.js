import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(fetchMovies(query));
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Film ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchBar;
