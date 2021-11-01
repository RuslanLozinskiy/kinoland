import { useEffect, useState } from "react";

import { getConfiguration } from "../../../../store/data/dataConfg";
import { getUpComingMovies } from "../../../../store/data/dataOfMovie";
import { getAiringToday } from "../../../../store/data/dataOfSerial";

import { LoaderSpinner } from "../../../basic/Loader/LoaderSpinner";
import Item from "../../../basic/movieCard/Item";

import style from "./Home.module.css";

function Home() {
  const [upComing, setUpComing] = useState([]);
  const [upComingSerials, setUpComingSerials] = useState([]);
  const [upComingImage, setUpComingImage] = useState([]);

  useEffect(() => {
    getUpComingMovies().then((res) => setUpComing(res));
    getAiringToday().then((res) => setUpComingSerials(res));
    getConfiguration().then((res) => setUpComingImage(res));
  }, []);

  return upComingImage.length !== 0 &&
    upComingSerials.length !== 0 &&
    upComing.length !== 0 ? (
    <div className={style.movies}>
      <Item item={upComingSerials} image={upComingImage} />
      <Item item={upComing} image={upComingImage} />
    </div>
  ) : (
    <LoaderSpinner />
  );
}
export default Home;
