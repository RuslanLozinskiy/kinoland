import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HeaderOfCurrentPage from "../../CurrentPages/CurrentMovie/headerCurrentPage/headerOfCurrentPage";
import BtnCurrentPage from "../../CurrentPages/CurrentMovie/btnCurrentPage/btnCurrentPage";
import { LoaderSpinner } from "../../basic/Loader/LoaderSpinner";

import style from "./CurrentSerial.module.css";
import SmallSlider from "../../basic/smallSlider/SmallSlider";
import {
  getCurrentSerial,
  getSimilarSerial,
} from "../../../services/Api/SerialsApi";
import { getConfiguration } from "../../../services/Api/ConfigurationApi";

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
export default CurrentSerial;
