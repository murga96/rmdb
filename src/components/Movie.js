import React from "react";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//Components
import { Grid } from "./Grid";
import { SpinnerComponent } from "./Spinner";
//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg";

import { useParams } from "react-router-dom";
import { BreadCrumb } from "./BreadCrumb";
import { MovieInfo } from "./MovieInfo";
import { MovieInfoBar } from "./MovieInfoBar";
import { Actor } from "./Actor";

export const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <SpinnerComponent />;
  if (error) return <div>Something went wrong</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      {Object.keys(movie).length > 0 && <MovieInfo movie={movie} />}
      {Object.keys(movie).length > 0 && (
        <MovieInfoBar
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
      )}
      <Grid header='Actors' >
          {movie.actors.map(actor => (
            <Actor
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
              }
             />
          ))}
        </Grid>
    </>
  );
};
