import instance from "./Axios";
import { API_KEY, API_VERSION, API_LANGUAGE } from "./constant";

export const getConfiguration = async () => {
  try {
    const data = await instance.get(
      `${API_VERSION}configuration?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.images;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getListGenres = async () => {
  try {
    const data = await instance.get(
      `${API_VERSION}genre/movie/list?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.genres;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getListGenresSerials = async () => {
  try {
    const data = await instance.get(
      `${API_VERSION}genre/tv/list?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.genres;
  } catch (err) {
    console.error("something wrong");
  }
};
