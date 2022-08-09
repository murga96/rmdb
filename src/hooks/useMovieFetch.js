import React, { useState, useEffect } from "react";
import API from "../API";
import { getSessionStorageItem } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //Fetching individual movie
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        console.log(movie);
        console.log(credits);

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    const movieState = getSessionStorageItem(movieId);
    if (movieState) {
      setState(movieState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  //Wrtiting to session storage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
