import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../styles/movie.scss";

const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Year}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
