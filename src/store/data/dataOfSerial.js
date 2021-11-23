import axios from "axios";

export const getOnTheAirSerials = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getTopRatedSerials = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getSerials = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getAiringToday = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};

export const getVideosSerial = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.serialId}/videos?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getLinkSerial = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.serialId}/watch/providers?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getSerialsAll = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=${params.pageId}&primary_release_year=&sort_by=popularity.desc`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getSimilarSerial = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.serialId}/similar?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getCurrentSerial = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.serialId}?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};

export const foundSerials = async (title) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU&page=1&include_adult=false&query=${title}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getActorsSerial = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.serialId}/credits?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&`
    );
    return data.data.cast;
  } catch (err) {
    console.error("something wrong");
  }
};
