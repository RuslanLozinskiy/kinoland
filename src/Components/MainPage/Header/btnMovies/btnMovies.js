import { useHistory } from "react-router-dom";

import style from "./btnMovies.module.css";

function BtnMovies() {
  const history = useHistory();
  return (
    <div className={style.dropdownMovies}>
      <button
        className={style.headerButton}
        onClick={() => {
          history.push("/kinoland/movies");
        }}
      >
        MOVIES
      </button>
      <div className={style.dropdownContent}>
        <button
          className={style.dropdownButton}
          onClick={() => {
            history.push("/kinoland/movies/nowplaying");
          }}
        >
          NOW PLAYING
        </button>
        <button
          className={style.dropdownButton}
          onClick={() => {
            history.push("/kinoland/movies/toprated");
          }}
        >
          TOP RATED
        </button>
      </div>
    </div>
  );
}
export default BtnMovies;
