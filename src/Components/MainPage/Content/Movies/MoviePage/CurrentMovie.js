import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getConfiguration,
  getCurrentMovie,
  getLinkMovie,
  getSimilarMovie,
  getVideosMovie,
} from "../../../../../Services/data/Data";
import ShowCurrentMovie from "../../ShowCurrentMovies/ShowCurrentMovie";

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
