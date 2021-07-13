import {
  getCurrentMovie,
  getSimilarMovie,
} from "./../../../../store/data/dataOfMovie";
import { useEffect, useState } from "react";

import BtnCurrentPage from "./headerCurrentPage/btnCurrentPage/btnCurrentPage";
import HeaderOfCurrentPage from "./headerCurrentPage/headerOfCurrentPage";
import SimilarItems from "./similarItems/similarItems";
import { getConfiguration } from "./../../../../store/data/dataConfg";
import { useParams } from "react-router-dom";

function ShowCurrentMovie(props) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [link, setLink] = useState([]);
  const [similarItem, setSimilarItem] = useState([]);

  const params = useParams();
  useEffect(() => {
    getCurrentMovie(params).then((res) => setData(res));
    getConfiguration().then((res) => setImage(res));
    getSimilarMovie(params).then((res) => setSimilarItem(res));
    window.scrollTo(0,0);
  }, [params]);
  if (image.length !== 0 && data.length !== 0) {
    return (
      <div className="showItem" key={data.id}>
        <HeaderOfCurrentPage data={data} image={image} />
        <BtnCurrentPage details={data} />
        {/* <Trailer video={video} linkOftrailer={link} /> */}
        {similarItem.length !== 0 ? (
          <SimilarItems similarItems={similarItem} image={image} />
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return null;
  }
}

export default ShowCurrentMovie;
