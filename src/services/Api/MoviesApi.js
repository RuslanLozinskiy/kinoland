import instance from "./Axios";
import { API_KEY, API_VERSION, DISCOVER_PATH } from "./constant";

export const getMoviesWithGenres = async (params) => {
  try {
    const data = await instance.get(
      `${API_VERSION}${DISCOVER_PATH}movie?api_key=${API_KEY}&language=ru-RU`,
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
