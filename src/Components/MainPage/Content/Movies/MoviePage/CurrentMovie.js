import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getCurrentMovie,
  getSimilarMovie,
} from "../../../../../store/data/dataOfMovie";
import { getConfiguration } from "../../../../../store/data/dataConfg";

import HeaderOfCurrentPage from "../../../../basic/currentMovie/headerCurrentPage/headerOfCurrentPage";
import BtnCurrentPage from "../../../../basic/currentMovie/btnCurrentPage/btnCurrentPage";
import SimilarItems from "../../../../basic/currentMovie/similarItems/similarItems";

import style from "./CurrentMovie.module.css";
import { LoaderSpinner } from "../../../../basic/Loader/LoaderSpinner";

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

  return data.length !== 0 && image.length !== 0 ? (
    <div className={style.currentPage}>
      <HeaderOfCurrentPage data={data} image={image} />
      <div className={style.containerInfoCurrentPage}>
        <BtnCurrentPage details={data} />
        {props.children}
      </div>
      <SimilarItems similarItems={similarItem} image={image} />
    </div>
  ) : (
    <LoaderSpinner />
  );
}

export default CurrentMovie;
