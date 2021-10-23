import { useEffect, useState } from "react";

import Item from "../../../../basic/movieCard/Item";

import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getTopRatedMovies } from "./../../../../../store/data/dataOfMovie";

import style from "./TopRated.module.css";
import { LoaderSpinner } from "../../../../basic/Loader/LoaderSpinner";

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [topRatedImage, setTopRatedImage] = useState([]);
  useEffect(() => {
    getTopRatedMovies().then((res) => setTopRated(res));
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
export default TopRated;
