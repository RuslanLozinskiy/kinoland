import { useHistory } from "react-router-dom";

import style from "./btnDetails.module.css";

function BtnDetails(props) {
  const { details } = props;
  const history = useHistory();
  return (
    <button
      className={style.details}
      onClick={() => {
        window.scrollTo(0, 0);

        if (details.hasOwnProperty("original_name")) {
          history.push(`/kinoland/serial/${details.id}/details`);
        } else {
          history.push(`/kinoland/movies/${details.id}/details`);
        }
      }}
    >
      details
    </button>
  );
}
export default BtnDetails;
