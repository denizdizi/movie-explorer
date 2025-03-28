import React, {useState} from "react";
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
            />
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
