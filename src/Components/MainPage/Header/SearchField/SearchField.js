import React from "react";

import style from "./SearchField.module.css";
import { ReactComponent as Searchicon } from "../../../../assets/general-icons/Search.svg";
import { useHistory } from "react-router-dom";

function SerachFiled() {
  const history = useHistory();

  return (
    <Searchicon
      className={style.searchField}
      onClick={() => {
        history.push("/kinoland/search");
      }}
    ></Searchicon>
  );
}

export default SerachFiled;
