import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
