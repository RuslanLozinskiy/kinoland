import { useEffect, useState } from "react";
import { LoaderSpinner } from "../../basic/Loader/LoaderSpinner";

import style from "./Home.module.css";
import BigSliders from "../../basic/bigSlider/BigSliders";
import SmallSlider from "../../basic/smallSlider/SmallSlider";
import {
  getNowPlayingMovies,
  getUpComingMovies,
} from "../../../services/Api/MoviesApi";
import {
  getAiringToday,
  getOnTheAirSerials,
} from "../../../services/Api/SerialsApi";
import { getConfiguration } from "../../../services/Api/ConfigurationApi";

function Home() {
  const [upComing, setUpComing] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    getUpComingMovies().then((res) => setUpComing(res));
    getOnTheAirSerials().then((res) => setOnTheAir(res));
    getAiringToday().then((res) => setAiringToday(res));
    getNowPlayingMovies().then((res) => setNowPlayingMovies(res));
    getConfiguration().then((res) => setImage(res));
  }, []);

  return image.length !== 0 && upComing.length !== 0 ? (
    <div className={style.movies}>
      <BigSliders data={upComing} image={image} />
      <span className={style.titles}>Now Playing Movies</span>

      <SmallSlider data={nowPlayingMovies} image={image} />
      <span className={style.titles}>On The Air TV</span>
      <SmallSlider data={onTheAir} image={image} />
      <span className={style.titles}>Airing Today TV</span>
      <SmallSlider data={airingToday} image={image} />
    </div>
  ) : (
    <LoaderSpinner />
  );
}
export default Home;
