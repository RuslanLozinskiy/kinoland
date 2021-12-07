import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getVideosMovie } from "../../../../services/Api/MoviesApi";
import { getVideosSerial } from "../../../../services/Api/SerialsApi";

import style from "./showTrailer.module.css";

function ShowTrailer(props) {
  const [video, setVideo] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (params.hasOwnProperty("movieId")) {
      getVideosMovie(params).then((res) => setVideo(res));
    } else {
      getVideosSerial(params).then((res) => setVideo(res));
    }
  }, [params]);
  if (video.length !== 0) {
    return (
      <div id={style.showItemTrailer}>
        <iframe
          title="trailer"
          src={`https://www.youtube.com/embed/${video[0].key}`}
          loading="lazy"
          allowFullScreen
        />
      </div>
    );
  } else {
    return <h2>Sorry, but at the moment we dont have the trailer</h2>;
  }
}
export default ShowTrailer;
