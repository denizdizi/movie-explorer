import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../styles/movie.scss";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
      <Card className="h-100 shadow-sm">
      <Card.Img 
          variant="top" 
          src={movie.Poster} 
          alt={movie.Title} 
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div 
          className="imdb-rating position-absolute top-0 end-0 m-2" 
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", 
            color: "white", 
            padding: "5px 10px", 
            borderRadius: "5px", 
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          IMDb: {movie.imdbRating}
        </div>        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>ID: {movie.imdbID}</Card.Text>
          <Card.Text>{movie.Year}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
