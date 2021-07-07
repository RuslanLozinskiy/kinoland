import { useEffect, useState } from "react";

import Item from "../../Item/Item";
import { getAiringToday } from "./../../../../store/data/dataOfSerial";
import { getConfiguration } from "../../../../store/data/dataConfg";
import { getUpComingMovies } from "./../../../../store/data/dataOfMovie";

function Home() {
  const [upComing, setUpComing] = useState([]);
  const [upComingSerials, setUpComingSerials] = useState([]);
  const [upComingImage, setUpComingImage] = useState([]);

  useEffect(() => {
    getUpComingMovies().then((res) => setUpComing(res));
    getAiringToday().then((res) => setUpComingSerials(res));
    getConfiguration().then((res) => setUpComingImage(res));
  }, []);

  return (
    <div className="movies">
      <Item item={upComingSerials} image={upComingImage} />
      <Item item={upComing} image={upComingImage} />
    </div>
  );
}
export default Home;
