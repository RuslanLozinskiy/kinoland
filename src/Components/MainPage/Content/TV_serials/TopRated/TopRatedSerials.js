import { useEffect, useState } from "react";

import Item from "../../../Item/Item";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getTopRatedSerials } from "../../../../../store/data/dataOfSerial";

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
