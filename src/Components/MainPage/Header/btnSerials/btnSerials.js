import { useHistory } from "react-router-dom";

function BtnSerials() {
  const history = useHistory();
  return (
    <div className="dropdown-movies">
      <button
        className="header-button"
        onClick={() => {
          history.push("/kinoland/serials");
        }}
      >
        TV
      </button>
      <div className="dropdown-content">
        <button
          className="dropdown-button"
          onClick={() => {
            history.push("/kinoland/serials/ontheair");
          }}
        >
          NOW PLAYING
        </button>
        <button
          className="dropdown-button"
          onClick={() => {
            history.push("/kinoland/serials/toprated");
          }}
        >
          TOP RATED
        </button>
      </div>
    </div>
  );
}
export default BtnSerials;
