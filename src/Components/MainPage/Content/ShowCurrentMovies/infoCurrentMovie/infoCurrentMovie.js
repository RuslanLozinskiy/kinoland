import { useEffect, useState } from "react";

import ShowInfoCurrentPage from "./showInfoCurrentPage/showInfoCurrentPage";
import { getCurrentMovie } from "../../../../../store/data/dataOfMovie";
import { useParams } from "react-router-dom";

function InfoCurrentMovie(props) {
  const params = useParams();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getCurrentMovie(params).then((res) => setInfo(res));
  }, [params]);
  console.log(info);
  return <ShowInfoCurrentPage data={info} />;
}
export default InfoCurrentMovie;
