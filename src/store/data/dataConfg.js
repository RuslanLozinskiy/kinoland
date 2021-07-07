import axios from "axios";

export const getConfiguration = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/configuration?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=ru-RU"
    );
    return data.data.images;
  } catch (err) {
    console.error("something wrong");
  }
};
