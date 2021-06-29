import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  foundMovie,
  foundSerials,
  getConfiguration,
} from "../../../../Services/data/Data";
import Item from "../../Item/Item";

function SearchMovies() {
  let params = useParams();
  params.name.toLowerCase();
  let [nameMovie, setNameMovies] = useState([]);
  let [nameSerial, setNameSerial] = useState([]);
  let [dataImage, setDataImage] = useState([]);
  useEffect(() => {
    if (params) {
      foundMovie(params.name).then((res) => setNameMovies(res));
      foundSerials(params.name).then((res) => setNameSerial(res));

      getConfiguration().then((res) => setDataImage(res));
    } else {
      console.error("something wrong");
    }
  }, [params]);

  return (
    <div className="movies">
      <Item item={nameSerial} image={dataImage} />
      <Item item={nameMovie} image={dataImage} />
    </div>
  );
}
export default SearchMovies;
