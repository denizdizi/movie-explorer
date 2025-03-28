import React, { useState } from "react";
import { fetchMovies } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setPage } from "../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const options = [{
    value: "movie",
    label: "Movie",
  },
  {
    value: "series",
    label: "Series",
  },
  {
    value: "episode",
    label: "Episode",
  }];

  const dispatch = useDispatch();

  const [yearError, setYearError] = useState("");
  const { movies } = useSelector((state) => state);
  const { formData } = movies;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!yearError || formData.query.trim() !== "") {
      dispatch(setPage(1));
      dispatch(fetchMovies(formData.query, formData.page, formData.type, formData.year));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ [name]: value }));

    if (name === "year") {
      if (value < 1900 || value > 2025) {
        setYearError("Lütfen 1900 ile 2025 arasında bir yıl giriniz.");
      } else {
        setYearError("");
      }
    }
  };

  const isSubmitDisabled = yearError || formData.query.trim() === "";

  return (
    <div className="container mt-4" style={{ height: "90px" }}>
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-6">
            <input type="text" className="form-control" placeholder="Search" onChange={handleChange} name="query" value={formData.query} />
          </div>
          <div className="col">
            <select className="form-control" style={{ appearance: "auto" }} onChange={handleChange} name="type" value={formData.type}>
              <option value="">Chose type...</option>
              {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>         </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Year"
              min="1900"
              max="2025"
              onChange={handleChange}
              name="year"
              value={formData.year}
            />
            {yearError && <small className="text-danger">{yearError}</small>}
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-dark" disabled={isSubmitDisabled}>
              <FontAwesomeIcon icon={faSearch} className="me-2" />
              Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
