import axios from "axios";

export const fetchPopularMovie = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmJmYTU2MTcxYzg5Y2E5MDVjOTExNDgyODE1MzVjYiIsIm5iZiI6MTcyNjY1Mjk5OS4zNTYzMjEsInN1YiI6IjY2ZWFhMTA4NTE2OGE4OTZlMTFmNGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dbonm7nyfn3XR6syfj_5VjdoilyHR6tz2jkv21_fwl8",
      },
    }
  );

  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const details = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmJmYTU2MTcxYzg5Y2E5MDVjOTExNDgyODE1MzVjYiIsIm5iZiI6MTcyNjY1Mjk5OS4zNTYzMjEsInN1YiI6IjY2ZWFhMTA4NTE2OGE4OTZlMTFmNGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dbonm7nyfn3XR6syfj_5VjdoilyHR6tz2jkv21_fwl8",
    },
  });
  return details.data;
};

export const fetchMovieActors = async (id) => {
  const actors = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmJmYTU2MTcxYzg5Y2E5MDVjOTExNDgyODE1MzVjYiIsIm5iZiI6MTcyNjY1Mjk5OS4zNTYzMjEsInN1YiI6IjY2ZWFhMTA4NTE2OGE4OTZlMTFmNGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dbonm7nyfn3XR6syfj_5VjdoilyHR6tz2jkv21_fwl8",
      },
    }
  );
  return actors.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const reviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmJmYTU2MTcxYzg5Y2E5MDVjOTExNDgyODE1MzVjYiIsIm5iZiI6MTcyNjY1Mjk5OS4zNTYzMjEsInN1YiI6IjY2ZWFhMTA4NTE2OGE4OTZlMTFmNGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dbonm7nyfn3XR6syfj_5VjdoilyHR6tz2jkv21_fwl8",
      },
    }
  );
  return reviews.data.results;
};
