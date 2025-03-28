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
<div className="container input-wrapper">
    <div className="col-lg-6">
      <input type="text" className="form-control" placeholder="Film ara..." />
    </div>
    <div className="col-lg-3">
      <input type="text" className="form-control" placeholder="Type" />
    </div>
    <div className="col-lg-3">
      <input type="text" className="form-control" placeholder="Year" />
    </div>
    <div className="col-lg-3">
    <button type="submit" className="search-btn">
        Ara
      </button>    </div>
</div>
    </form>
  );
};

export default SearchBar;
