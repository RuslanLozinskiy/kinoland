import { useHistory } from "react-router-dom";

import style from "./btnSerials.module.css";

function BtnSerials() {
  const history = useHistory();
  return (
    <div className={style.dropdownMovies}>
      <button
        className={style.headerButton}
        onClick={() => {
          history.push("/kinoland/serials");
        }}
      >
        TV
      </button>
      <div className={style.dropdownContent}>
        <button
          className={style.dropdownButton}
          onClick={() => {
            history.push("/kinoland/serials/ontheair");
          }}
        >
          NOW PLAYING
        </button>
        <button
          className={style.dropdownButton}
          onClick={() => {
            history.push("/kinoland/serials/toprated");
          }}
        >
          TOP RATED
        </button>
      </div>
    </div>
  );
}
export default BtnSerials;
