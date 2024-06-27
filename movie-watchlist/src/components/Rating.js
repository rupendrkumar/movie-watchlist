import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { rateMovie, reviewMovie } from "../features/movies/movieSlice";

const Rating = ({ movie }) => {
  const [rating, setRating] = useState(movie.rating);
  const [review, setReview] = useState(movie.review);
  const dispatch = useDispatch();

  const handleRatingChange = (e) => {
    const newRating = Number(e.target.value);
    setRating(newRating);
    dispatch(rateMovie({ id: movie.id, rating: newRating }));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewMovie({ id: movie.id, review }));
  };

  return (
    <div>
      <h3>Rate this movie</h3>
      <select value={rating} onChange={handleRatingChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <h3>Write a review</h3>
      <form onSubmit={handleReviewSubmit}>
        <textarea value={review} onChange={handleReviewChange}></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Rating;
