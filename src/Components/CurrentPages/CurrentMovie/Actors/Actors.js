import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemActors from "./itemActors/ItemsActors";

import style from "./Actors.module.css";
import {
  getActorsMovie,
  getActorsSerial,
} from "../../../../services/Api/ActorsApi";
import { getConfiguration } from "../../../../services/Api/ConfigurationApi";

function Actors(props) {
  const params = useParams();
  const [ActorsMovie, setActorsMovie] = useState([]);
  const [Confg, setConfg] = useState([]);
  useEffect(() => {
    if (params.hasOwnProperty("movieId")) {
      getActorsMovie(params).then((res) => setActorsMovie(res));
    } else {
      getActorsSerial(params).then((res) => setActorsMovie(res));
    }
    getConfiguration().then((res) => setConfg(res));
  }, [params]);

  return ActorsMovie.length !== 0 && Confg.length !== 0 ? (
    <div className={style.ActorsBox}>
      <ItemActors confg={Confg} data={ActorsMovie} />
    </div>
  ) : null;
}
export default Actors;
