import axios from "axios";

export const getUpComingMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getNowPlayingMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getTopRatedMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getCurrentMovie = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getVideosMovie = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getLinkMovie = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.movieId}/watch/providers?api_key=d55796f2ca4ecdb97ce23a56b9712c7f`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getSimilarMovie = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.movieId}/similar?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const foundMovie = async (title) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1&include_adult=false&query=${title}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
