import React from "react";
import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src="https://fr.web.img6.acsta.net/r_654_368/newsv7/21/02/26/18/51/4272278.jpg"
        alt=""
      />{" "}
      <p>Movie description</p>
      <h2>movie title</h2>
      <p>number of likes</p>
    </div>
  );
};

export default MovieCard;
