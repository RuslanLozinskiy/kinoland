import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { ReactComponent as Nexticon } from "../../../assets/general-icons/Chevron-Right.svg";
import { ReactComponent as Backicon } from "../../../assets/general-icons/Chevron-Left.svg";
import style from "./Pagination.module.css";
let countLet = 1;
function Pagination(props) {
  const history = useHistory();
  const location = useLocation();
  const pathLength = location.pathname;
  const { totalPages } = props;

  const path = pathLength.split("page/")[0];

  let forward = () => {
    if (totalPages.total_pages === countLet) {
      countLet = totalPages.total_pages;
    } else {
      countLet++;
      history.push(`${path + "page/" + countLet}`);
      window.scrollTo(0, 0);
    }
  };

  let back = () => {
    if (countLet <= 1) {
      countLet = 1;
    } else {
      countLet--;

      history.push(`${path + "page/" + countLet}`);
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    countLet = 1;
  }, [path]);
  return (
    <div className={style.pagination}>
      <Backicon onClick={back} className={style.back} />
      <p>
        {totalPages.page} / {totalPages.total_pages}
      </p>
      <Nexticon onClick={forward} className={style.next} />
    </div>
  );
}
export default Pagination;
