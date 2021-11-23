import { useHistory } from "react-router-dom";
import { ReactComponent as TVicon } from "../../../../assets/general-icons/TV.svg";

import style from "./btnSerials.module.css";

function BtnSerials() {
  const history = useHistory();
  return (
    <TVicon
      className={style.headerButton}
      onClick={() => {
        history.push("/kinoland/serials/page/1");
      }}
    />
  );
}
export default BtnSerials;
