import { useEffect, useState } from "react";

import Item from "../../../Item/Item";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getTopRatedMovies } from "./../../../../../store/data/dataOfMovie";

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
