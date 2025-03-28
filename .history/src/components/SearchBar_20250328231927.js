import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";

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

  const [year, setYear] = useState("");
  const [yearError, setYearError] = useState("");
  const [formData, setFormData] = useState({
    query: "",
    type: "",
    year: "",
    page: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error || formData.query.trim() !== "") {
      dispatch(fetchMovies(formData.query, formData.page, formData.type, formData.year));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "year") {
      setYear(value);
      if (value < 1900 || value > 2025) {
        setYearError("Lütfen 1900 ile 2025 arasında bir yıl giriniz.");
      } else {
        setYearError("");
      }
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-6">
            <input type="text" className="form-control" placeholder="Search" onChange={handleChange} name="query" />
          </div>
          <div className="col">
            <select className="form-control" style={{ appearance: "auto" }} onChange={handleChange} name="type">
              <option value="">Seçiniz</option>
              {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>         </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Yıl"
              min="1900"
              max="2025"
              value={year}
              onChange={handleChange}
              name="year"
            />
            {yearError && <small className="text-danger">{yearError}</small>}
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Gönder</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
