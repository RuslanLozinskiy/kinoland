import { useEffect, useState } from "react";

import ShowTrailer from "./showTrailer";
import { getVideosMovie } from "../../../../../store/data/dataOfMovie";
import { useParams } from "react-router-dom";

function Trailer(props) {
  const [video, setVideo] = useState([]);
  const params = useParams();
  useEffect(() => {
    getVideosMovie(params).then((res) => setVideo(res));
  }, [params]);
  return <ShowTrailer video={video} />;
}
export default Trailer;
