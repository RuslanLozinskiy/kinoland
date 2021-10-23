import { useEffect, useState } from "react";

import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getTopRatedSerials } from "../../../../../store/data/dataOfSerial";
import { LoaderSpinner } from "../../../../basic/Loader/LoaderSpinner";

import Item from "../../../../basic/movieCard/Item";

import style from "./TopRatedSerials.module.css";

function TopRatedSerials(props) {
  const [topRated, setTopRated] = useState([]);
  const [topRatedImage, setTopRatedImage] = useState([]);
  useEffect(() => {
    getTopRatedSerials().then((res) => setTopRated(res));
    getConfiguration().then((res) => setTopRatedImage(res));
  }, []);
  return topRated.length !== 0 && topRatedImage.length !== 0 ? (
    <div className={style.movies}>
      <Item item={topRated} image={topRatedImage} />
    </div>
  ) : (
    <LoaderSpinner />
  );
}
export default TopRatedSerials;
