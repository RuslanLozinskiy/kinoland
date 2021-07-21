import { useEffect, useState } from "react";

import { getVideosMovie } from "../../../../../store/data/dataOfMovie";
import { useParams } from "react-router-dom";

function ShowTrailer(props) {
  const [video, setVideo] = useState([]);
  const params = useParams();
  useEffect(() => {
    getVideosMovie(params).then((res) => setVideo(res));
  }, [params]);
  if (video.length !== 0) {
    return (
      <div id="showItem-trailer">
        <iframe
          title="trailer"
          src={`https://www.youtube.com/embed/${video[0].key}`}
          loading="lazy"
          allowFullScreen
        />
      </div>
    );
  } else {
    return null;
  }
}
export default ShowTrailer;
