import React from "react";
import MovieCard from "./kit/MovieCard";
import "./Movies.css";
const Movies = () => {
  return (
    <div className="movies">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default Movies;
