import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import "./Nav.css";
import { endpoints } from "../api/fetchApi";

const Nav = () => {
  const { setUrl, url } = useContext(MovieContext);

  const navItems = [
    { name: "Trending", url: endpoints.trendingMoviesEndpoint },
    { name: "Top Rated", url: endpoints.topRatedMoviesEndpoint },
    { name: "Action", url: endpoints.actionMoviesEndpoint },
    { name: "Comedy", url: endpoints.comedyMoviesEndpoint },
    { name: "Horror", url: endpoints.horrorMoviesEndpoint },
    { name: "Romance", url: endpoints.romanceMoviesEndpoint },
    { name: "Sci-fi", url: endpoints.sciFiMoviesEndpoint },
    { name: "Western", url: endpoints.westernMoviesEndpoint },
    { name: "Animation", url: endpoints.animationMoviesEndpoint },
    { name: "Movie", url: endpoints.tvMoviesEndpoint },
  ];
  return (
    <div className="nav">
      {navItems.map((item, index) => (
        <h2
          key={index}
          onClick={() => {
            setUrl(item.url);
            console.log(url);
          }}
        >
          {item.name}
        </h2>
      ))}
    </div>
  );
};

export default Nav;
