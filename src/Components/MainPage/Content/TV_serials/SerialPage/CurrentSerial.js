import {
  getCurrentSerial,
  getSimilarSerial,
} from "../../../../../store/data/dataOfSerial";
import { useEffect, useState } from "react";

import { getConfiguration } from "../../../../../store/data/dataConfg";
import { useParams } from "react-router-dom";

function CurrentSerial(props) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [similarItem, setSimilarItem] = useState([]);
  const params = useParams();
  useEffect(() => {
    getCurrentSerial(params).then((res) => setData(res));
    getConfiguration().then((res) => setImage(res));
    getSimilarSerial(params).then((res) => setSimilarItem(res));
    window.scrollTo(0, 0);
  }, [params]);
  return (
    <>
      {props.children}
    </>
  );
}
export default CurrentSerial;
