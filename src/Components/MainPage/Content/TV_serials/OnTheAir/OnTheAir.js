import { useEffect, useState } from "react";

import Item from "../../../../basic/movieCard/Item";

import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getOnTheAirSerials } from "../../../../../store/data/dataOfSerial";

import style from "./OnTheAir.module.css";

function OnTheAir() {
  const [onTheAir, setOnTheAir] = useState([]);
  const [onTheAirImage, setOnTheAirImage] = useState([]);
  useEffect(() => {
    getOnTheAirSerials().then((res) => setOnTheAir(res));
    getConfiguration().then((res) => setOnTheAirImage(res));
  }, []);
  return (
    <div className={style.movies}>
      <Item item={onTheAir} image={onTheAirImage} />
    </div>
  );
}
export default OnTheAir;
