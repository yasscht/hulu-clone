import axios from "./axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const endpoints = {
  trendingMoviesEndpoint: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  topRatedMoviesEndpoint: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  actionMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  mystryMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  sciFiMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  westernMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
  animationMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  tvMoviesEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=1770`,
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
