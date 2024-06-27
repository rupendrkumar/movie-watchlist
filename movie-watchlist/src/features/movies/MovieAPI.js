const API_URL = "http://localhost:5000/movies";

export const fetchMovies = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
};

export const addMovieAPI = async (movie) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  if (!response.ok) {
    throw new Error("Failed to add movie");
  }
  return response.json();
};

export const updateMovieAPI = async (movie) => {
  const response = await fetch(`${API_URL}/${movie.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  if (!response.ok) {
    throw new Error("Failed to update movie");
  }
  return response.json();
};

export const deleteMovieAPI = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete movie");
  }
  return response.json();
};
