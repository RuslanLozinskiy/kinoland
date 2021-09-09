import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getCurrentSerial,
  getSimilarSerial,
} from "../../../../../store/data/dataOfSerial";
import { getConfiguration } from "../../../../../store/data/dataConfg";

import BtnCurrentPage from "../../../../basic/currentMovie/btnCurrentPage/btnCurrentPage";
import HeaderOfCurrentPage from "../../../../basic/currentMovie/headerCurrentPage/headerOfCurrentPage";
import SimilarItems from "../../../../basic/currentMovie/similarItems/similarItems";

import style from "./CurrentSerial.module.css";

function CurrentSerial(props) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [similarItem, setSimilarItem] = useState([]);
  const params = useParams();
  useEffect(() => {
    getCurrentSerial(params).then((res) => setData(res));
    getConfiguration().then((res) => setImage(res));
    getSimilarSerial(params).then((res) => setSimilarItem(res));
  }, [params]);
  return (
    <div className={style.currentPage}>
      <HeaderOfCurrentPage data={data} image={image} />
      <div className={style.containerInfoCurrentPage}>
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
export default CurrentSerial;
