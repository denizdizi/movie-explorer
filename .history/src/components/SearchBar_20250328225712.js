import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/actions";

const SearchBar = () => {
  const options = ["Seçenek 1", "Seçenek 2", "Seçenek 3"];

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    // e.preventDefault();
    // if (query.trim() !== "") {
    //   dispatch(fetchMovies(query, 1));
    // }
  };

  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const handleYearChange = (e) => {
    const value = e.target.value;
    setYear(value);
    if (value < 1900 || value > 2025) {
      setError("Lütfen 1900 ile 2025 arasında bir değer giriniz.");
    } else {
      setError("");
    }
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="row g-2">
          <div className="col-6">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <div className="col">
          <select className="form-control">
              <option value="">Type...</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>          </div>
          <div className="col">
          <input 
              type="number" 
              className="form-control" 
              placeholder="Yıl" 
              min="1900" 
              max="2025" 
              value={year}
              onChange={handleYearChange}
            />
            {error && <small className="text-danger">{error}</small>}
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Gönder</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
