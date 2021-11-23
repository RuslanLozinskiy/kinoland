import { useHistory } from "react-router-dom";
import style from "./btnHome.module.css";
import { ReactComponent as Homeicon } from "../../../../assets/general-icons/Home.svg";
function BtnHome() {
  const history = useHistory();
  return (
    <Homeicon
      className={style.headerButton}
      onClick={() => {
        history.push("/kinoland/");
      }}
    />
  );
}
export default BtnHome;
