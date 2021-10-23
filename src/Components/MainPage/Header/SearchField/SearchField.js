import React from "react";

import { useHistory } from "react-router-dom";
import { useRef } from "react";

import style from "./SearchField.module.css";

function SerachFiled() {
  const history = useHistory();
  const input = useRef(null);
  const clickButton = (e) => {
    history.push(`/kinoland/search?q=${input.current.value}`);
    e.preventDefault();
  };

  return (
    <form className={style.searchHeader} onSubmit={clickButton}>
      <input placeholder="find your movie" type="search" ref={input} />
      <button type="submit">OK</button>
    </form>
  );
}

export default SerachFiled;
