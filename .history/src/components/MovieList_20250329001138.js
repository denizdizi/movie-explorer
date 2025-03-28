import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies || !movies.movies || movies.movies.length === 0) {
    return <p>Film bulunamadı.</p>;
  }

  return (
    <div className="movie-list container mt-4">
    <Row className="g-3 justify-content-center">
      {movies.movies.slice(0, 5).map((movie) => (
        <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
    <Row className="g-3 justify-content-center">
      {movies.movies.slice(5, 10).map((movie) => (
        <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  </div>
    // <div className="movie-list">
    //   <div className="row movie-line">
    //     {movies.movies.slice(0, 5).map((movie) => (
    //       <MovieCard key={movie.imdbID} movie={movie} />
    //     ))}
    //   </div>
    //   <div className="row movie-line">
    //     {movies.movies.slice(5, 10).map((movie) => (
    //       <MovieCard key={movie.imdbID} movie={movie} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default MovieList;
