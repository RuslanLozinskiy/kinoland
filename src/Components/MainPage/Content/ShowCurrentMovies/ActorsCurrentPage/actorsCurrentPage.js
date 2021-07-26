import { useEffect, useState } from "react";

import ShowActorsCurrentPage from "./showActorsCurrentPage/showActorsCurrentPage";
import { getActorsOfMovie } from "../../../../../store/data/dataOfMovie";
import { getActorsOfSerial } from "../../../../../store/data/dataOfSerial";
import { getConfiguration } from "./../../../../../store/data/dataConfg";
import { useParams } from "react-router-dom";

function ActorsCurrentPage() {
  const [actors, setActors] = useState([]);
  const [confg, setConfg] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (params.hasOwnProperty("movieId")) {
      getActorsOfMovie(params).then((res) => setActors(res));
    } else {
      getActorsOfSerial(params).then((res) => setActors(res));
    }
    getConfiguration().then((res) => setConfg(res));
  }, [params]);

  return <ShowActorsCurrentPage actors={actors} confg={confg} />;
}
export default ActorsCurrentPage;
