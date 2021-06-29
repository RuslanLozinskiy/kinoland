import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getConfiguration,
  getCurrentSerial,
  getVideosSerial,
  getLinkSerial,
  getSimilarSerial,
} from "../../../../../Services/data/Data";
import ShowCurrentMovie from "../../ShowCurrentMovies/ShowCurrentMovie";

function CurrentSerial() {
  let params = useParams();

  let [dataSerial, setDataSerial] = useState([]);
  let [dataImage, setDataImage] = useState([]);
  let [dataVideo, setDataVideo] = useState([]);
  let [linkSerial, setLinkSerial] = useState([]);
  let [similarSerial, setSimilarSerial] = useState([]);
  useEffect(() => {
    if (params) {
      getVideosSerial(params).then((res) => setDataVideo(res));
      getCurrentSerial(params).then((res) => setDataSerial(res));
      getLinkSerial(params).then((res) => setLinkSerial(res));
      getConfiguration().then((res) => setDataImage(res));
      getSimilarSerial(params).then((res) => setSimilarSerial(res));
    } else {
      console.error("something wrong");
    }
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <div className="itemInfo">
      <ShowCurrentMovie
        similarItem={similarSerial}
        data={dataSerial}
        image={dataImage}
        video={dataVideo}
        link={linkSerial}
      />
    </div>
  );
}
export default CurrentSerial;
