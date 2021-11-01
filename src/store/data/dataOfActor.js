import axios from "axios";

export const getActor = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/person/${params.personId}?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getActorImg = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/person/${params.personId}/images?api_key=d55796f2ca4ecdb97ce23a56b9712c7f`
    );
    return data.data;
  } catch (err) {
    console.error("something wrong");
  }
};
export const getActorCredits = async (params) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/person/${params.personId}/combined_credits?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU`
    );
    return data.data.cast;
  } catch (err) {
    console.error("something wrong");
  }
};
