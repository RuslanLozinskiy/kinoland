import style from "./Movies.module.css";

import { useParams, useLocation } from "react-router";
import Filter from "../../MainPage/filter/Filter";
import Item from "../../basic/movieCard/Item";
import { LoaderSpinner } from "../../basic/Loader/LoaderSpinner";
import { useState, useEffect } from "react";

import { getSerialsWithGenres } from "../../../services/Api/SerialsApi";
import { getMoviesWithGenres } from "../../../services/Api/MoviesApi";
import Pagination from "../../basic/Pagination/Pagination";
import {
  getConfiguration,
  getListGenres,
  getListGenresSerials,
} from "../../../services/Api/ConfigurationApi";
function Movies(props) {
  const [list, setList] = useState([]);
  const [countPage, setCountPage] = useState([]);
  const [genres, setGenres] = useState([]);
  const [confg, setConfg] = useState([]);
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    getConfiguration().then((res) => setConfg(res));
  }, []);
  useEffect(() => {
    if (location.pathname.slice(10, 17) === "serials") {
      getSerialsWithGenres(params).then((res) => {
        setList(res.results);
        setCountPage(res);
      });
      getListGenresSerials().then((res) => setGenres(res));
    } else {
      getMoviesWithGenres(params).then((res) => {
        setList(res.results);
        setCountPage(res);
      });
      getListGenres().then((res) => setGenres(res));
    }
  }, [params, location]);
  return list.length !== 0 && confg.length !== 0 && genres.length !== 0 ? (
    <div className={style.moviesPage}>
      <Filter genres={genres} data={countPage} />

      <div className={style.listItems}>
        <Item item={list} image={confg} />
      </div>

      <Pagination totalPages={countPage} />
    </div>
  ) : (
    <LoaderSpinner />
  );
}
export default Movies;
