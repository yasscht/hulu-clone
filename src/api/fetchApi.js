import axios from "./axios";

const API_KEY = process.env.REACT_APP_API_KEY;
export const trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
export const topRatedMoviesEndpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
