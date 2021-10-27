import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getConfiguration } from "../../../../store/data/dataConfg";
import { getActorsMovie } from "../../../../store/data/dataOfMovie";
import { getActorsSerial } from "../../../../store/data/dataOfSerial";

import ItemActors from "./itemActors/ItemsActors";

import style from "./Actors.module.css";

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
  ActorsMovie.length = 20;
  return ActorsMovie.length !== 0 && Confg.length !== 0 ? (
    <div className={style.ActorsBox}>
      <ItemActors confg={Confg} data={ActorsMovie} />
    </div>
  ) : null;
}
export default Actors;
