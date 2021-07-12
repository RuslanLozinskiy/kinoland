import {
  getCurrentMovie,
  getLinkMovie,
  getSimilarMovie,
  getVideosMovie,
} from "./../../../../../store/data/dataOfMovie";
import { useEffect, useState } from "react";

import ShowCurrentMovie from "../../ShowCurrentMovies/ShowCurrentMovie";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { useParams } from "react-router-dom";

function CurrentMovie(props) {
  let params = useParams();
  let [dataMovie, setDataMovie] = useState([]);
  let [dataImage, setDataImage] = useState([]);
  let [similarMovie, setSimilarMovie] = useState([]);
  useEffect(() => {
    getCurrentMovie(params).then((res) => setDataMovie(res));
    getConfiguration().then((res) => setDataImage(res));
    getSimilarMovie(params).then((res) => setSimilarMovie(res));
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <>
      <ShowCurrentMovie
        similarItem={similarMovie}
        data={dataMovie}
        image={dataImage}
      />
      {props.children}
    </>
  );
}
export default CurrentMovie;
