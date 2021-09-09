import { useHistory } from "react-router-dom";

import style from "./btnHome.module.css";

function BtnHome() {
  const history = useHistory();
  return (
    <button
      className={style.headerButton}
      onClick={() => {
        history.push("/kinoland/");
      }}
    >
      HOME
    </button>
  );
}
export default BtnHome;
