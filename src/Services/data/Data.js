import axios from "axios";
export const getConfiguration = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/configuration?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US"
    );
    return data.data.images;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getUpComingMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getNowPlayingMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getTopRatedMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getMovies = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getOnTheAirSerials = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getTopRatedSerials = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getSerials = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1"
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getAiringToday = async () => {
    try {
        const data = await axios.get(
            "https://api.themoviedb.org/3/tv/airing_today?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1"
        );
        return data.data.results;
    } catch (err) {
        console.error("something wrong");
    }
};
export const getCurrentMovie = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=d55796f2ca4ecdb97ce23a56b9712c7f`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getVideosMovie = async (params) => {
    try {
        const data = await axios.get(
            `https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US`
        );
        return data.data.results;
    } catch (err) {
        console.error("something wrong");
    }
};
export const getVideosSerial = async (params) => {
    try {
        const data = await axios.get(
            `https://api.themoviedb.org/3/tv/${params.movieId}/videos?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US`
        );
        return data.data.results;
    } catch (err) {
        console.error("something wrong");
    }
};
export const getLinkSerial = async (params) => {
    try {
        const data = await axios.get(
            `https://api.themoviedb.org/3/tv/${params.movieId}/watch/providers?api_key=d55796f2ca4ecdb97ce23a56b9712c7f`
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
            `https://api.themoviedb.org/3/movie/${params.movieId}/similar?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1`
        );
        return data.data.results;
    } catch (err) {
        console.error("something wrong");
    }
};
export const getSimilarSerial = async (params) => {
    try {
        const data = await axios.get(
            `https://api.themoviedb.org/3/tv/${params.movieId}/similar?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1`
        );
        return data.data.results;
    } catch (err) {
        console.error("something wrong");
    }
};
export const getCurrentSerial = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.movieId}?api_key=d55796f2ca4ecdb97ce23a56b9712c7f`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const foundMovie = async (title) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1&include_adult=false&query=${title}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
export const foundSerials = async (title) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US&page=1&include_adult=false&query=${title}`
    );
    return data.data.results;
  } catch (err) {
    console.error("something wrong");
  }
};
