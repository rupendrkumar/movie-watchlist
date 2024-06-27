import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "./Rating";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id === Number(id))
  );

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Status: {movie.watched ? "Watched" : "Unwatched"}</p>
      <Rating movie={movie} />
      <h3>Review</h3>
      <p>{movie.review}</p>
    </div>
  );
};

export default MovieDetails;
