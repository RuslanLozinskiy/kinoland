import {
  getCurrentSerial,
  getLinkSerial,
  getSimilarSerial,
  getVideosSerial,
} from "../../../../../store/data/dataOfSerial";
import { useEffect, useState } from "react";

import ShowCurrentMovie from "../../ShowCurrentMovies/ShowCurrentMovie";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { useParams } from "react-router-dom";

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
