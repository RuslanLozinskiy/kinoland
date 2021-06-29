import { useEffect, useState } from "react";
import {
  getConfiguration,
  getTopRatedMovies,
} from "../../../../../Services/data/Data";
import Item from "../../../Item/Item";

function TopRated() {
  const [topRated, setTopRated] = useState([]);
  const [topRatedImage, setTopRatedImage] = useState([]);
  useEffect(() => {
    getTopRatedMovies().then((res) => setTopRated(res));
    getConfiguration().then((res) => setTopRatedImage(res));
  }, []);
  return (
    <div className="movies">
      <Item item={topRated} image={topRatedImage} />
    </div>
  );
}
export default TopRated;
