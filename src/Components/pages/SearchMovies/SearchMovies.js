import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getConfiguration } from "../../../services/Api/ConfigurationApi";
import { foundMovie } from "../../../services/Api/MoviesApi";
import { foundSerials } from "../../../services/Api/SerialsApi";

import { LoaderSpinner } from "../../basic/Loader/LoaderSpinner";
import Item from "../../basic/movieCard/Item";

import style from "./SearchMovies.module.css";

function SearchMovies() {
  const location = useLocation();

  const [name, setName] = useState(null);

  let [nameMovie, setNameMovies] = useState([]);
  let [nameSerial, setNameSerial] = useState([]);
  let [dataImage, setDataImage] = useState([]);
  useEffect(() => {
    setName(location.search.slice(3).toLocaleLowerCase());
  }, [location]);

  useEffect(() => {
    foundMovie(name).then((res) => setNameMovies(res));
    foundSerials(name).then((res) => setNameSerial(res));
    getConfiguration().then((res) => setDataImage(res));
  }, [name]);

  return nameMovie.length !== 0 &&
    nameSerial.length !== 0 &&
    dataImage.length !== 0 ? (
    <div className={style.movies}>
      <Item item={nameSerial} image={dataImage} />
      <Item item={nameMovie} image={dataImage} />
    </div>
  ) : nameMovie.length === 0 && nameSerial.length === 0 ? (
    <h2 className={style.nothingFoung}>nothing found</h2>
  ) : (
    <LoaderSpinner />
  );
}
export default SearchMovies;
