import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    editMovie: (state, action) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    toggleWatched: (state, action) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload
      );
      if (index !== -1) {
        state.movies[index].watched = !state.movies[index].watched;
      }
    },
    rateMovie: (state, action) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index !== -1) {
        state.movies[index].rating = action.payload.rating;
      }
    },
    reviewMovie: (state, action) => {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index !== -1) {
        state.movies[index].review = action.payload.review;
      }
    },
  },
});

export const {
  addMovie,
  editMovie,
  deleteMovie,
  toggleWatched,
  rateMovie,
  reviewMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
