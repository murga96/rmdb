import { useEffect, useState } from "react";
import API from "../API";
import { getSessionStorageItem } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      console.log(movies);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      const sessionState = getSessionStorageItem('home-state')
      console.log("Grabbing from session storage")
      if(sessionState) {
        setState(sessionState)
        return
      }
    }
    console.log("Grabbing from API")
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!loadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setLoadingMore(false);
  }, [loadingMore, searchTerm, state.page]);

  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("home-state", JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setLoadingMore };
};
