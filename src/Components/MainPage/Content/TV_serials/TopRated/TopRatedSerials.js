import { useEffect, useState } from "react";
import {
  getConfiguration,
  getTopRatedSerials,
} from "../../../../../Services/data/Data";
import Item from "../../../Item/Item";

function TopRatedSerials(props) {
  const [topRated, setTopRated] = useState([]);
  const [topRatedImage, setTopRatedImage] = useState([]);
  useEffect(() => {
    getTopRatedSerials().then((res) => setTopRated(res));
    getConfiguration().then((res) => setTopRatedImage(res));
  }, []);
  return (
    <div className="movies">
      <Item item={topRated} image={topRatedImage} />
    </div>
  );
}
export default TopRatedSerials;
