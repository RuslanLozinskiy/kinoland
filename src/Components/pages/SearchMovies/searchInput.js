import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import style from "./searchInput.module.css";
function SearchInput() {
  const [phwrong, setPhWrong] = useState("please write name");
  const [isCorrect, setisCorrect] = useState(true);
  const history = useHistory();
  const input = useRef(null);
  const clickButton = (e) => {
    if (input.current.value === "") {
      setisCorrect(false);
      setPhWrong("please write name correct");
    } else {
      history.push(`/kinoland/search/query?q=${input.current.value}`);
      setisCorrect(true);
      setPhWrong("please write name");
    }
    e.preventDefault();
  };

  return (
    <div className={style.d1}>
      <form className={style.searchHeader} onSubmit={clickButton}>
        <input
          placeholder={phwrong}
          type="search"
          ref={input}
          className={isCorrect ? style.correct : style.wrong}
        />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default SearchInput;
