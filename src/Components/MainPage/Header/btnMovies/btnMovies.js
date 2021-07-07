import { useHistory } from "react-router-dom";
function BtnMovies() {
  const history = useHistory();
  return (
    <div className="dropdown-movies">
      <button
        className="header-button"
        onClick={() => {
          history.push("/kinoland/movies");
        }}
      >
        MOVIES
      </button>
      <div className="dropdown-content">
        <button
          className="dropdown-button"
          onClick={() => {
            history.push("/kinoland/movies/nowplaying");
          }}
        >
          NOW PLAYING
        </button>
        <button
          className="dropdown-button"
          onClick={() => {
            history.push("/kinoland/movies/toprated");
          }}
        >
          TOP RATED
        </button>
      </div>
    </div>
  );
}
export default BtnMovies;
