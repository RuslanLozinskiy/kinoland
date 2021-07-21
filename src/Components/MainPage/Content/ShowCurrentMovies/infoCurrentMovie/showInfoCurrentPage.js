import { useEffect, useState } from "react";

import { getCurrentMovie } from "../../../../../store/data/dataOfMovie";
import { getCurrentSerial } from "../../../../../store/data/dataOfSerial";
import { useParams } from "react-router-dom";

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
      <div className="showItem-info">
        <p>
          <b>Статус: </b>
          {data.status}
        </p>
        <p>
          <b>Дата выхода: </b>{" "}
          {data.hasOwnProperty("release_date")
            ? data.release_date
            : data.first_air_date}
        </p>
        <p>
          <b>Продолжительность: </b>
          {data.hasOwnProperty("episode_run_time")
            ? data.episode_run_time
            : data.runtime}{" "}
          минут
        </p>
        {data.production_countries.length !== 0 ? (
          <p>
            <b>Страна: </b>
            {data.production_countries[0].name}
          </p>
        ) : null}

        {data.hasOwnProperty("budget") ? (
          <p>
            <b>Бюджет: </b> {data.budget} $
          </p>
        ) : (
          ""
        )}
        {data.genres.length !== 0 ? (
          <p>
            <b>Жанры: </b>
            {data.genres.map((a) => `${a.name.toLowerCase()}; `)}
          </p>
        ) : null}

        <p>
          <b>Язык оригинала:</b> {data.original_language}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
export default ShowdataCurrentPage;
