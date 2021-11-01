import { useHistory } from "react-router";

import style from "./btnCurrentPage.module.css";

function BtnCurrentPage(props) {
  const { details } = props;
  const history = useHistory();
  return (
    <div className={style.btnCurrentPage}>
      <button
        className={style.buttonCurrentPage}
        onClick={() => {
          if (details.hasOwnProperty("original_name")) {
            history.push(`/kinoland/serial/${details.id}/details`);
          } else {
            history.push(`/kinoland/movies/${details.id}/details`);
          }
        }}
      >
        ДЕТАЛИ
      </button>
      <button
        className={style.buttonCurrentPage}
        onClick={() => {
          if (details.hasOwnProperty("original_name")) {
            history.push(`/kinoland/serial/${details.id}/videos`);
          } else {
            history.push(`/kinoland/movies/${details.id}/videos`);
          }
        }}
      >
        ТРЕЙЛЕР
      </button>
      <button
        className={style.buttonCurrentPage}
        onClick={() => {
          if (details.hasOwnProperty("original_name")) {
            history.push(`/kinoland/serial/${details.id}/actors`);
          } else {
            history.push(`/kinoland/movies/${details.id}/actors`);
          }
        }}
      >
        АКТОРЫ
      </button>
    </div>
  );
}
export default BtnCurrentPage;
