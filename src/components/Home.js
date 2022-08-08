import React from "react";
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//Components
import { HeroImage } from "./HeroImage";


//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";
//Image
import NoImage from "../images/no_image.jpg";
import { Grid } from "./Grid";
import { Thumb } from "./Thumb";
import { Spinner } from "./Spinner/Spinner.styles";
import { SearchBar } from "./SearchBar";

export const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();
  console.log(state);

  return (
    <>
      {!searchTerm  && state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Results:" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.movieId}
          >
            {" "}
            {movie.title}{" "}
          </Thumb>
        ))}
      </Grid>
      <Spinner />
    </>
  );
};
