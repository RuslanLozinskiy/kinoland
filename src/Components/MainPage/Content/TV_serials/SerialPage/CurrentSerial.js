import {
  getCurrentSerial,
  getSimilarSerial,
  getVideosSerial,
} from "../../../../../store/data/dataOfSerial";
import { useEffect, useState } from "react";

import HeaderOfCurrentPage from "../../ShowCurrentMovies/headerCurrentPage/headerOfCurrentPage";
import ShowInfoCurrentPage from "../../ShowCurrentMovies/infoCurrentMovie/showInfoCurrentPage";
import ShowTrailer from "../../ShowCurrentMovies/trailer/showTrailer";
import SimilarItems from "../../ShowCurrentMovies/similarItems/similarItems";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { useParams } from "react-router-dom";

function CurrentSerial(props) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [similarItem, setSimilarItem] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const params = useParams();
  useEffect(() => {
    getCurrentSerial(params).then((res) => setData(res));
    getConfiguration().then((res) => setImage(res));
    getSimilarSerial(params).then((res) => setSimilarItem(res));
    getVideosSerial(params).then((res) => setTrailer(res));
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <>
      <HeaderOfCurrentPage data={data} image={image} />
      <ShowInfoCurrentPage data={data} />
      <ShowTrailer video={trailer} />
      {similarItem.length !== 0 ? (
        <SimilarItems similarItems={similarItem} image={image} />
      ) : (
        ""
      )}
    </>
  );
}
export default CurrentSerial;
