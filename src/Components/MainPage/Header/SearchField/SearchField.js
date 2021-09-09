import React from "react";

import { useHistory } from "react-router-dom";
import { useRef } from "react";

import style from "./SearchField.module.css";

function SerachFiled() {
  let name = "";
  const history = useHistory();
  const input = useRef(null);

  const clickButton = (e) => {
    name = input.current.value;
    history.push(`/kinoland/search?q=${name}`);
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
