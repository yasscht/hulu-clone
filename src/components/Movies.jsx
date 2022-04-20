import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./kit/MovieCard";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";
import {
  fetchApi,
  trendingMoviesEndpoint,
  topRatedMoviesEndpoint,
} from "../api/fetchApi";
import "./Movies.css";
const API_KEY = process.env.REACT_APP_API_KEY;
const Movies = () => {
  const { movies, url, setMovies, setUrl } = useContext(MovieContext);
  useEffect(() => {
    fetchApi(url).then((response) => setMovies(response.results));
  }, [url]);
  console.log(movies);
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movies;
