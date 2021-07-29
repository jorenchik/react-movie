import { prevElementSibling } from "domutils";
import React, { useState, useEffect } from "react";

// Config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import noImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header="Popular movies">
        {state.results.map((movie) => (
          <div key={movie.id}>
            {/* {movie.title} */}
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : noImage
              }
              movieId={movie.id}
            />
          </div>
        ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
