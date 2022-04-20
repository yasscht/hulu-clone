import React from "react";
import "./MovieCard.css";
const MovieCard = ({
  movie: { title, overview, popularity, backdrop_path },
}) => {
  return (
    <div className="movie-card">
      <img
        src="https://fr.web.img6.acsta.net/r_654_368/newsv7/21/02/26/18/51/4272278.jpg"
        alt=""
      />{" "}
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
