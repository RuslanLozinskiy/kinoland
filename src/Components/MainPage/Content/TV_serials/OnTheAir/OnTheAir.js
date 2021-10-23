import { useEffect, useState } from "react";

import Item from "../../../../basic/movieCard/Item";

import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getOnTheAirSerials } from "../../../../../store/data/dataOfSerial";

import style from "./OnTheAir.module.css";
import { LoaderSpinner } from "../../../../basic/Loader/LoaderSpinner";

function OnTheAir() {
  const [onTheAir, setOnTheAir] = useState([]);
  const [onTheAirImage, setOnTheAirImage] = useState([]);
  useEffect(() => {
    getOnTheAirSerials().then((res) => setOnTheAir(res));
    getConfiguration().then((res) => setOnTheAirImage(res));
  }, []);
  return onTheAirImage.length !== 0 && onTheAir.length !== 0 ? (
    <div className={style.movies}>
      <Item item={onTheAir} image={onTheAirImage} />
    </div>
  ) : (
    <LoaderSpinner />
  );
}
export default OnTheAir;
