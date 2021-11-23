import { useEffect, useState } from "react";
import { getConfiguration } from "../../../store/data/dataConfg";
import { LoaderSpinner } from "../../basic/Loader/LoaderSpinner";

import { getAiringToday } from "../../../store/data/dataOfSerial";
import { getUpComingMovies } from "../../../store/data/dataOfMovie";
import style from "./Home.module.css";
import BigSliders from "../../basic/bigSlider/BigSliders";

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
      <BigSliders data={upComing} image={upComingImage} />
    </div>
  ) : (
    <LoaderSpinner />
  );
}
export default Home;
