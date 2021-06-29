import BtnHome from "./btnHome/btnHome";
import BtnMovies from "./btnMovies/btnMovies";
import BtnSerials from "./btnSerials/btnSerials";
import SearchField from "./SearchField/SearchField";

function Header(props) {
  return (
    <header className="header">
      <SearchField />
      <BtnHome />
      <BtnMovies />
      <BtnSerials />
    </header>
  );
}
export default Header;
