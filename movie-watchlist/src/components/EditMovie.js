import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { editMovie } from "../features/movies/movieSlice";

const EditMovie = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id === Number(id))
  );

  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [releaseYear, setReleaseYear] = useState(movie.releaseYear);
  const [genre, setGenre] = useState(movie.genre);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editMovie({
        id: Number(id),
        title,
        description,
        releaseYear,
        genre,
        watched: movie.watched,
        rating: movie.rating,
        review: movie.review,
      })
    );
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        placeholder="Release Year"
      />
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditMovie;
