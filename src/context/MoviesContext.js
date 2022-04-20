import { Children, createContext, useState } from "react";
import { trendingMoviesEndpoint, topRatedEndpoint } from "../api/fetchApi";

const MoviesContext = ({ children }) => {
  const MovieContext = createContext();
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(trendingMoviesEndpoint);
  return (
    <MovieContext.Provider value={{ movies, url, setMovies, setUrl }}>
      {children}
    </MovieContext.Provider>
  );
};
export default MoviesContext;
