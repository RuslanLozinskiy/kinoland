import { useEffect, useState } from "react";

import Item from "../../../Item/Item";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getNowPlayingMovies } from "../../../../../store/data/dataOfMovie";

function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [nowPlayingImage, setNowPlayingImage] = useState([]);
  useEffect(() => {
    getNowPlayingMovies().then((res) => setNowPlaying(res));
    getConfiguration().then((res) => setNowPlayingImage(res));
  }, []);
  return (
    <div className="movies">
      <Item item={nowPlaying} image={nowPlayingImage} />
    </div>
  );
}
export default NowPlaying;
