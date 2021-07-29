import {
  getCurrentMovie,
  getSimilarMovie,
} from "../../../../../store/data/dataOfMovie";
import { useEffect, useState } from "react";

import BtnCurrentPage from "../../ShowCurrentMovies/btnCurrentPage/btnCurrentPage";
import HeaderOfCurrentPage from "../../ShowCurrentMovies/headerCurrentPage/headerOfCurrentPage";
import SimilarItems from "../../ShowCurrentMovies/similarItems/similarItems";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { useParams } from "react-router-dom";

function CurrentMovie(props) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [similarItem, setSimilarItem] = useState([]);
  const params = useParams();
  useEffect(() => {
    getCurrentMovie(params).then((res) => setData(res));
    getConfiguration().then((res) => setImage(res));
    getSimilarMovie(params).then((res) => setSimilarItem(res));
  }, [params]);
  return (
    <div className="currentPage">
      <HeaderOfCurrentPage data={data} image={image} />
      <div className="container-Info-CurrentPage">
        <BtnCurrentPage details={data} />
        {props.children}
      </div>

      {similarItem.length !== 0 ? (
        <SimilarItems similarItems={similarItem} image={image} />
      ) : (
        ""
      )}
    </div>
  );
}
export default CurrentMovie;
