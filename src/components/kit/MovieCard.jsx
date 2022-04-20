import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import "./MovieCard.css";
const MovieCard = ({
  movie: { title, overview, popularity, backdrop_path, first_air_date },
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
      <div className="movie-card__likes">
        <span>{Math.round(popularity)}</span>
        <ThumbUpIcon />
      </div>
      <div>{first_air_date}</div>
    </div>
  );
};

export default MovieCard;
