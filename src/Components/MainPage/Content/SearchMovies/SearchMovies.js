import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { foundMovie } from "./../../../../store/data/dataOfMovie";
import { foundSerials } from "../../../../store/data/dataOfSerial";
import { getConfiguration } from "../../../../store/data/dataConfg";

import Item from "../../../basic/movieCard/Item";

import style from "./SearchMovies.module.css";

function SearchMovies() {
  let history = useHistory();
  const name = history.location.search.slice(3).toLocaleLowerCase();

  let [nameMovie, setNameMovies] = useState([]);
  let [nameSerial, setNameSerial] = useState([]);
  let [dataImage, setDataImage] = useState([]);
  useEffect(() => {
    if (name) {
      foundMovie(name).then((res) => setNameMovies(res));
      foundSerials(name).then((res) => setNameSerial(res));

      getConfiguration().then((res) => setDataImage(res));
    } else {
      console.error("something wrong");
    }
  }, [name]);

  return (
    <div className={style.movies}>
      <Item item={nameSerial} image={dataImage} />
      <Item item={nameMovie} image={dataImage} />
    </div>
  );
}
export default SearchMovies;
