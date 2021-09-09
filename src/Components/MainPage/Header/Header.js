import BtnHome from "./btnHome/btnHome";
import BtnMovies from "./btnMovies/btnMovies";
import BtnSerials from "./btnSerials/btnSerials";
import SearchField from "./SearchField/SearchField";

import style from "./Header.module.css";

function Header(props) {
  return (
    <header className={style.header}>
      <SearchField />
      <BtnHome />
      <BtnMovies />
      <BtnSerials />
    </header>
  );
}
export default Header;
