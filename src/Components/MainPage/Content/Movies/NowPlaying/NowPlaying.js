import { useEffect, useState } from "react";
import {
  getConfiguration,
  getNowPlayingMovies,
} from "../../../../../Services/data/Data";
import Item from "../../../Item/Item";

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
