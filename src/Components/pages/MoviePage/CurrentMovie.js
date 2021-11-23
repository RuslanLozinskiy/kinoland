import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getConfiguration } from "../../../store/data/dataConfg";
import {
  getCurrentMovie,
  getSimilarMovie,
} from "../../../store/data/dataOfMovie";

import { LoaderSpinner } from "../../basic/Loader/LoaderSpinner";
import BtnCurrentPage from "../../CurrentPages/CurrentMovie/btnCurrentPage/btnCurrentPage";
import HeaderOfCurrentPage from "../../CurrentPages/CurrentMovie/headerCurrentPage/headerOfCurrentPage";
import SimilarItems from "../../CurrentPages/CurrentMovie/similarItems/similarItems";

import style from "./CurrentMovie.module.css";

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
