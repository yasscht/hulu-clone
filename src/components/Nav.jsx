import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import "./Nav.css";
const navItems = [
  { name: "Trending" },
  { name: "Top Rated" },
  { name: "Action" },
  { name: "Comedy" },
  { name: "Horror" },
  { name: "Romance" },
  { name: "Sci-fi" },
  { name: "Western" },
  { name: "Animation" },
  { name: "Movie" },
];
const Nav = () => {
  return (
    <div className="nav">
      {navItems.map((item, index) => (
        <h2 key={index}>{item.name}</h2>
      ))}
    </div>
  );
};

export default Nav;
