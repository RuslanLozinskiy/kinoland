import React from "react";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
function SerachFiled() {
  let name = "";
  const history = useHistory();
  const input = useRef(null);
  const clickButton = (e) => {
    name = input.current.value;
    history.push(`/kinoland/search/${name}`);
    e.preventDefault();
  };
  return (
    <form id="search-header" onSubmit={clickButton}>
      <input placeholder="find your movie" type="search" ref={input} />
      <button className="btn-submit" type="submit">
        OK
      </button>
    </form>
  );
}

export default SerachFiled;
