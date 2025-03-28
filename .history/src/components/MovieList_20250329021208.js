import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies || !movies.movies || movies.movies.length === 0) {
    return (
      <div className="movie-list container mt-4">
        <Row className="g-3 justify-content-center">
          <Col xs={12} className="text-center">
            <h3>No Movies Found ...</h3>
          </Col>
        </Row>
      </div>  
    );
  }

  return (
    <div className="movie-list container mt-4">
    <Row className="g-3 justify-content-center">
      {movies.movies.map((movie) => (
        <Col key={movie.imdbID} xs={12} sm={12} md={12} lg={2}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
    {/* <Row className="g-3 justify-content-center mt-3">
      {movies.movies.slice(5, 10).map((movie) => (
        <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row> */}
  </div>
  );
};

export default MovieList;
