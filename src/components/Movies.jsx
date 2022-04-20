import React, { useState, useEffect } from "react";
import MovieCard from "./kit/MovieCard";
import axios from "axios";

import {
  fetchApi,
  trendingMoviesEndpoint,
  topRatedMoviesEndpoint,
} from "../api/fetchApi";
import "./Movies.css";
const API_KEY = process.env.REACT_APP_API_KEY;
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(trendingMoviesEndpoint);
  useEffect(() => {
    fetchApi(url).then((response) => setMovies(response.results));
  }, []);
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
