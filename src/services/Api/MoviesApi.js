import instance from "./Axios";
import { API_KEY, API_VERSION, DISCOVER_PATH, API_LANGUAGE } from "./constant";

export const getMoviesWithGenres = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}${DISCOVER_PATH}movie?api_key=${API_KEY}&${API_LANGUAGE}`,
      {
        params: {
          primary_release_year: params.yearId,
          page: params.pageId,
          sort_by: params.sortId,
          with_genres: params.genreId,
        },
      }
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getUpComingMovies = async () => {
  try {
    const data = await instance.get(
      `${API_VERSION}movie/upcoming?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getNowPlayingMovies = async () => {
  try {
    const data = await instance.get(
      `${API_VERSION}movie/now_playing?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getCurrentMovie = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}movie/${params.movieId}?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const foundMovie = async (title) => {
  try {
    const data = await instance.get(
      `${API_VERSION}search/movie?api_key=${API_KEY}&${API_LANGUAGE}&page=1&include_adult=false&query=${title}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getSimilarMovie = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}movie/${params.movieId}/similar?api_key=${API_KEY}&${API_LANGUAGE}&page=1`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getVideosMovie = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}movie/${params.movieId}/videos?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
