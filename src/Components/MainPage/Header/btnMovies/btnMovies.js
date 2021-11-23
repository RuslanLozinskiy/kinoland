import { useHistory } from "react-router-dom";
import { ReactComponent as Movieicon } from "../../../../assets/general-icons/Movie.svg";

import style from "./btnMovies.module.css";

function BtnMovies() {
  const history = useHistory();
  return (
    <Movieicon
      className={style.headerButton}
      onClick={() => {
        history.push("/kinoland/movies/page/1");
      }}
    />
  );
}
export default BtnMovies;
