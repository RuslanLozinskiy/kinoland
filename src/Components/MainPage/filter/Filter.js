import Genres from "./Genres/Genres";
import { useState } from "react";
import style from "./Filter.module.css";
import { useHistory, useLocation } from "react-router";
import ReleaseYear from "./ReleaseYear/ReleaseYear";
import SortBy from "./SortBy/SortBy";

function Filter(props) {
  const history = useHistory();
  const location = useLocation();
  const { genres } = props;
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState(null);
  const handleGenre = (e) => {
    setSelectedGenre(e.target.value);
  };
  const handleYear = (e) => {
    setSelectedYear(e.target.value);
  };
  const handleSortBy = (e) => {
    setSelectedSortBy(e.target.value);
  };
  const sub = (e) => {
    if (
      selectedGenre !== null ||
      selectedYear !== null ||
      selectedSortBy !== null
    ) {
      if (location.pathname.slice(10, 17) === "serials") {
        history.push(
          `/kinoland/serials/genre/${selectedGenre}/year/${selectedYear}/sort/${selectedSortBy}/page/1`
        );
      } else {
        history.push(
          `/kinoland/movies/genre/${selectedGenre}/year/${selectedYear}/sort/${selectedSortBy}/page/1`
        );
      }
    } else {
      history.push(`/kinoland/movies/page/1/`);
    }
    e.preventDefault();
  };
  return (
    <div className={style.filter}>
      <form onSubmit={sub} className={style.filterForm}>
        <span>Сортировать по:</span>
        <select onChange={handleSortBy}>
          <option value="" defaultValue=""></option>

          <SortBy />
        </select>
        <span>Год Релиза:</span>
        <select onChange={handleYear}>
          <option value="" defaultValue=""></option>

          <ReleaseYear />
        </select>
        <span>Выберите жанр:</span>
        <select onChange={handleGenre}>
          <option value="" defaultValue=""></option>
          <Genres genres={genres} />
        </select>
        <button type="submit">Пошук</button>
      </form>
    </div>
  );
}
export default Filter;
