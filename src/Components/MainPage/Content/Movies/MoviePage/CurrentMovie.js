import {
  getCurrentMovie,
  getSimilarMovie,
  getVideosMovie,
} from "../../../../../store/data/dataOfMovie";
import { useEffect, useState } from "react";

import HeaderOfCurrentPage from "../../ShowCurrentMovies/headerCurrentPage/headerOfCurrentPage";
import InfoCurrentMovie from './../../ShowCurrentMovies/infoCurrentMovie/infoCurrentMovie';
import ShowTrailer from "../../ShowCurrentMovies/trailer/showTrailer";
import SimilarItems from "../../ShowCurrentMovies/similarItems/similarItems";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { useParams } from "react-router-dom";

function CurrentMovie(props) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [similarItem, setSimilarItem] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const params = useParams();
  useEffect(() => {
    getCurrentMovie(params).then((res) => setData(res));
    getConfiguration().then((res) => setImage(res));
    getSimilarMovie(params).then((res) => setSimilarItem(res));
    getVideosMovie(params).then((res) => setTrailer(res))
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <>
      <HeaderOfCurrentPage data={data} image={image} />
      <InfoCurrentMovie data={data}/>
      <ShowTrailer video={trailer}/>
      {similarItem.length !== 0 ? (
          <SimilarItems similarItems={similarItem} image={image} />
        ) : (
          ""
        )}
    </>
  );
}
export default CurrentMovie;
