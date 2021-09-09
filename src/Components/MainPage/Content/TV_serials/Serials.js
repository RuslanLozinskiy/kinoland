import { useEffect, useState } from "react";

import { getConfiguration } from "../../../../store/data/dataConfg";
import { getSerials } from "../../../../store/data/dataOfSerial";

import Item from "../../../basic/movieCard/Item";

import style from "./Serials.module.css";

function Serials() {
  const [serials, setSerials] = useState([]);
  const [imageSerials, setImageSerials] = useState([]);
  useEffect(() => {
    getSerials().then((res) => setSerials(res));
    getConfiguration().then((res) => setImageSerials(res));
  }, []);
  return (
    <div className={style.movies}>
      <Item item={serials} image={imageSerials} />
    </div>
  );
}
export default Serials;
