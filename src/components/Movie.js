import React from "react";
import { useParams } from "react-router";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";

// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";

// Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie, loading, error);

  return (
    <>
      <div>Movie</div>
    </>
  );
};

export default Movie;
