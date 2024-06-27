import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../features/movies/movieSlice";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [genre, setGenre] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMovie({
        id: Date.now(),
        title,
        description,
        releaseYear,
        genre,
        watched: false,
        rating: 0,
        review: "",
      })
    );
    setTitle("");
    setDescription("");
    setReleaseYear("");
    setGenre("");
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
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
