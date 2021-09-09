import { useEffect, useState } from "react";

import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getTopRatedSerials } from "../../../../../store/data/dataOfSerial";

import Item from "../../../../basic/movieCard/Item";

import style from "./TopRatedSerials.module.css";

function TopRatedSerials(props) {
  const [topRated, setTopRated] = useState([]);
  const [topRatedImage, setTopRatedImage] = useState([]);
  useEffect(() => {
    getTopRatedSerials().then((res) => setTopRated(res));
    getConfiguration().then((res) => setTopRatedImage(res));
  }, []);
  return (
    <div className={style.movies}>
      <Item item={topRated} image={topRatedImage} />
    </div>
  );
}
export default TopRatedSerials;
