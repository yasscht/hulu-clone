import { createContext, useState } from "react";
import { endpoints } from "../api/fetchApi";
import { MovieContext } from "./MovieContext";

const MoviesContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(endpoints.trendingMoviesEndpoint);
  return (
    <MovieContext.Provider
      value={{
        movies,
        url,

        setMovies,
        setUrl,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MoviesContext;
