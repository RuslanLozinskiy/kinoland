import instance from "./Axios";
import { API_KEY, API_VERSION, DISCOVER_PATH, API_LANGUAGE } from "./constant";

export const getSerialsWithGenres = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}${DISCOVER_PATH}tv?api_key=${API_KEY}&${API_LANGUAGE}&page=${params.pageId}&first_air_date_year=${params.yearId}&sort_by=${params.sortId}&with_genres=${params.genreId}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
    );
    //   const data = await axios.get(
    //     `https://api.themoviedb.org/3/discover/movie?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=${params.pageId}&primary_release_year=${params.yearId}&sort_by=popularity.desc&with_genres=${params.genreId}`
    //   );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
// https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate
// https://api.themoviedb.org/3/discover/tv?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&sort_by=popularity.desc&first_air_date_year=2000&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate
export const getOnTheAirSerials = async () => {
  try {
    const data = await instance.get(
      `${API_VERSION}tv/on_the_air?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getAiringToday = async () => {
  try {
    const data = await instance.get(
      `${API_VERSION}tv/airing_today?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getCurrentSerial = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}tv/${params.serialId}?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const foundSerials = async (title) => {
  try {
    const data = await instance.get(
      `${API_VERSION}search/tv?api_key=${API_KEY}&${API_LANGUAGE}&page=1&include_adult=false&query=${title}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getSimilarSerial = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}tv/${params.serialId}/similar?api_key=${API_KEY}&${API_LANGUAGE}&page=1`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getVideosSerial = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}tv/${params.serialId}/videos?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
