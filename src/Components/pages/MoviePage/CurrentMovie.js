import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getConfiguration } from "../../../services/Api/ConfigurationApi";
import {
  getCurrentMovie,
  getSimilarMovie,
} from "../../../services/Api/MoviesApi";

import { LoaderSpinner } from "../../basic/Loader/LoaderSpinner";
import SmallSlider from "../../basic/smallSlider/SmallSlider";
import BtnCurrentPage from "../../CurrentPages/CurrentMovie/btnCurrentPage/btnCurrentPage";
import HeaderOfCurrentPage from "../../CurrentPages/CurrentMovie/headerCurrentPage/headerOfCurrentPage";

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

      <div className={style.similarItems}>
        <p>Похожие</p>
        <SmallSlider data={similarItem} image={image} />
      </div>
    </div>
  ) : (
    <LoaderSpinner />
  );
}

export default CurrentMovie;
