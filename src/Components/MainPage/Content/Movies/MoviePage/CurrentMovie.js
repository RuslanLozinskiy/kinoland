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

function CurrentMovie() {
  let params = useParams();
  let [dataMovie, setDataMovie] = useState([]);
  let [dataImage, setDataImage] = useState([]);
  let [dataVideo, setDataVideo] = useState([]);
  let [linkMovie, setLinkMovie] = useState([]);
  let [similarMovie, setSimilarMovie] = useState([]);
  useEffect(() => {
    getCurrentMovie(params).then((res) => setDataMovie(res));
    getVideosMovie(params).then((res) => setDataVideo(res));
    getLinkMovie(params).then((res) => setLinkMovie(res));
    getConfiguration().then((res) => setDataImage(res));
    getSimilarMovie(params).then((res) => setSimilarMovie(res));
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <div className="itemInfo">
      <ShowCurrentMovie
        similarItem={similarMovie}
        data={dataMovie}
        image={dataImage}
        video={dataVideo}
        link={linkMovie}
      />
    </div>
  );
}
export default CurrentMovie;
