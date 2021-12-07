import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getCurrentMovie } from "../../../../services/Api/MoviesApi";
import { getCurrentSerial } from "../../../../services/Api/SerialsApi";

import style from "./showInfoCurrentPage.module.css";

function ShowdataCurrentPage(props) {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.hasOwnProperty("movieId")) {
      getCurrentMovie(params).then((res) => setData(res));
    } else {
      getCurrentSerial(params).then((res) => setData(res));
    }
  }, [params]);

  if (data.length !== 0) {
    return (
      <div className={style.showItemInfo}>
        <table>
          <tbody>
            <tr>
              <th>Статус:</th>
              <td>
                <p>{data.status}</p>
              </td>
            </tr>
            <tr>
              <th>Дата выхода:</th>
              <td>
                {data.hasOwnProperty("release_date") ? (
                  <p>{data.release_date}</p>
                ) : (
                  <p>{data.first_air_date}</p>
                )}
              </td>
            </tr>
            <tr>
              <th>Продолжительность:</th>
              <td>
                {data.hasOwnProperty("episode_run_time") ? (
                  <p>{data.episode_run_time} минут</p>
                ) : (
                  <p>{data.runtime} минут</p>
                )}
              </td>
            </tr>
            <tr>
              <th>Страна:</th>
              <td>
                {data.production_countries.length !== 0 ? (
                  <p>{data.production_countries[0].name}</p>
                ) : null}
              </td>
            </tr>
            {data.hasOwnProperty("budget") ? (
              <tr>
                <th>Бюджет:</th>
                <td>
                  <p>{data.budget} $</p>
                </td>
              </tr>
            ) : null}
            <tr>
              <th>Жанры:</th>
              <td>
                {data.genres.length !== 0 ? (
                  <p>{data.genres.map((a) => `${a.name.toLowerCase()}; `)}</p>
                ) : null}
              </td>
            </tr>
            <tr>
              <th>Язык оригинала:</th>
              <td>
                <p>{data.original_language}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
}
export default ShowdataCurrentPage;
