import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovie, toggleWatched } from "../features/movies/movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>My Movie Watchlist</h1>
      <Link to="/add">Add Movie</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            <button onClick={() => dispatch(toggleWatched(movie.id))}>
              {movie.watched ? "Unwatch" : "Watch"}
            </button>
            <Link to={`/edit/${movie.id}`}>Edit</Link>
            <button onClick={() => dispatch(deleteMovie(movie.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
