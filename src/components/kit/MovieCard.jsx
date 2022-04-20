import React from "react";
import "./MovieCard.css";
const MovieCard = ({
  movie: { title, overview, popularity, backdrop_path },
}) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="movie-card">
      <img src={`${base_url}${backdrop_path}`} alt="" />{" "}
      <p>
        {overview.length > 60
          ? overview.substring(0, 60).concat("...")
          : overview}
      </p>
      <h2>{title ? title : "No result found"}</h2>
      <p>{Math.round(popularity)}</p>
    </div>
  );
};

export default MovieCard;
