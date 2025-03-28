import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesById } from "../store/actions";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../styles/movie.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);
  const { selectedMovie } = movies;

  useEffect(() => {
    dispatch(fetchMoviesById(id));
  }, [dispatch, id]);

  return (
    <div className="movie-details-page">
              <h1 className="page-title">Movie Explorer</h1>

    <Container className="mt-4">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        Geri Dön
      </Button>
      {selectedMovie && (
        <Row className="movie-details">
          <Col md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src={selectedMovie.Poster} 
                alt={selectedMovie.Title} 
                className="movie-poster"
              />
            </Card>
          </Col>
          <Col md={8}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{selectedMovie.Title}</Card.Title>
                <Card.Text>
                  <strong>Süre:</strong> {selectedMovie.Runtime}
                </Card.Text>
                <Card.Text>
                  <strong>Tür:</strong> {selectedMovie.Genre}
                </Card.Text>
                <Card.Text>
                  <strong>Yönetmen:</strong> {selectedMovie.Director}
                </Card.Text>
                <Card.Text>
                  <strong>Oyuncular:</strong> {selectedMovie.Actors}
                </Card.Text>
                <Card.Text>
                  <strong>IMDb Puanı:</strong> {selectedMovie.imdbRating}
                </Card.Text>
                <Card.Text>
                  <strong>Özet:</strong> {selectedMovie.Plot}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
    </div>

  );
};

export default MovieDetails;
