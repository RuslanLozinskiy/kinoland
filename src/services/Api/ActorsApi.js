import instance from "./Axios";
import { API_KEY, API_VERSION, API_LANGUAGE } from "./constant";

export const getActorsSerial = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}tv/${params.serialId}/credits?api_key=${API_KEY}&`
    );
    return data.data.cast;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getActorsMovie = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}movie/${params.movieId}/credits?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.cast;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getActor = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}person/${params.personId}?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};

export const getActorCredits = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}person/${params.personId}/combined_credits?api_key=${API_KEY}&${API_LANGUAGE}`
    );
    return data.data.cast;
  } catch (err) {
    console.error("something wrong");
  }
};
