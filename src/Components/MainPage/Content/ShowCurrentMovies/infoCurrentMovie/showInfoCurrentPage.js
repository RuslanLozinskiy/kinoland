import { useEffect, useState } from "react";

import { getCurrentMovie } from "../../../../../store/data/dataOfMovie";
import {useParams} from "react-router-dom";

function ShowdataCurrentPage(props) {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    getCurrentMovie(params).then((res) => setData(res));
  }, [params]);
  if (data.length !== 0) {
    return (
      <div className="showItem-info">
        <p>
          <b>data of release:</b>{" "}
          {data.hasOwnProperty("release_date")
            ? data.release_date
            : data.first_air_date}
        </p>

        {data.production_countries.length !== 0 ? (
          <p>
            <b> страна:</b>
            {data.production_countries[0].name}
          </p>
        ) : null}

        {data.hasOwnProperty("budget") ? (
          <p>
            <b>budget:</b> {data.budget} $
          </p>
        ) : (
          ""
        )}
        {data.genres.length !== 0 ? (
          <p>
            <b>genre:</b> {data.genres[0].name}
          </p>
        ) : null}

        <p>
          <b>language:</b> {data.original_language}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
export default ShowdataCurrentPage;
