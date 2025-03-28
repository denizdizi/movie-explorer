import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesById } from "../store/actions";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../styles/movie.scss";
import { TailSpin } from 'react-loader-spinner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import { faArrowLeft, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state);
    const { selectedMovie, loading } = movies;

    useEffect(() => {
        dispatch(fetchMoviesById(id));
    }, [dispatch, id]);

    return (
        <div className="movie-details-page">
            <h1 className="page-title">Movie Explorer by Deniz</h1>
            <Container className="mt-4">
                <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> {/* Geri dönme ikonu */}

                    Back
                </Button>

                {loading ? (
                    <div className="loading-overlay">
                        <TailSpin
                            height="100"
                            width="100"
                            color="#00BFFF"
                            ariaLabel='loading'
                        />
                    </div>
                ) : (
                    selectedMovie && (
                        <Row className="movie-details">
                            <Col xs={6} sm={4} md={3} lg={3}>
                                {selectedMovie.Poster !== "N/A" && (
                                    <Card.Img
                                        variant="top"
                                        src={selectedMovie.Poster}
                                        alt={selectedMovie.Title}
                                        className="movie-poster"
                                    />
                                )}
                            </Col>
                            <Col xs={6} sm={8} md={9} lg={9}>
                                <Card className="h-100">
                                    <Card.Body>
                                        <Card.Title>{selectedMovie.Title || "-"}</Card.Title>
                                        <Card.Text>
                                            <strong>Runtime:</strong> {selectedMovie.Runtime || "-"}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Genre:</strong> {selectedMovie.Genre || "-"}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Director:</strong> {selectedMovie.Director || "-"}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Actors:</strong> {selectedMovie.Actors || "-"}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>IMDb Rating:</strong>
                                            <Rating
                                                initialRating={selectedMovie.imdbRating / 2} // IMDb puanını 10 üzerinden 5'e ölçekler
                                                readonly
                                                emptySymbol={<FontAwesomeIcon icon={regularStar} className="text-warning fa-2x" />} // Boş yıldız
                                                fullSymbol={<FontAwesomeIcon icon={solidStar} className="text-warning fa-2x" />} // Dolu yıldız
                                            />
                                            <span className="ms-2">
                                                {selectedMovie.imdbRating === "N/A" ? "0" : selectedMovie.imdbRating} / 10
                                            </span>                    </Card.Text>
                                        <Card.Text>
                                            <strong>Plot:</strong> {selectedMovie.Plot || "-"}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                )}
            </Container>
        </div>
    );

};

export default MovieDetails;
