import { useEffect, useState } from "react";

import Item from "../../../../basic/movieCard/Item";

import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getNowPlayingMovies } from "../../../../../store/data/dataOfMovie";

import style from "./NowPlaying.module.css";
import { LoaderSpinner } from "../../../../basic/Loader/LoaderSpinner";

function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [nowPlayingImage, setNowPlayingImage] = useState([]);
  useEffect(() => {
    getNowPlayingMovies().then((res) => setNowPlaying(res));
    getConfiguration().then((res) => setNowPlayingImage(res));
  }, []);
  return nowPlaying.length !== 0 && nowPlayingImage.length !== 0 ? (
    <div className={style.movies}>
      <Item item={nowPlaying} image={nowPlayingImage} />
    </div>
  ) : (
    <LoaderSpinner />
  );
}
export default NowPlaying;
