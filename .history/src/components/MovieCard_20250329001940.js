import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../styles/movie.scss";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} style={{ height: "250px", objectFit: "cover" }}/>
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>({movie.imdbID})</Card.Text>
          <Card.Text>{movie.Year}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
