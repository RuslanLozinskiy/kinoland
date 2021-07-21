import { useHistory } from "react-router";

function BtnCurrentPage(props) {
  const { details } = props;
  const history = useHistory();
  return (
    <div className="btn-currentPage">
      <button
        onClick={() => {
          if (details.hasOwnProperty("original_name")) {
            history.push(`/kinoland/serial/${details.id}/details`);
          } else {
            history.push(`/kinoland/movies/${details.id}/details`);
          }
        }}
      >
        DETAILS
      </button>
      <button
        onClick={() => {
          if (details.hasOwnProperty("original_name")) {
            history.push(`/kinoland/serial/${details.id}/videos`);
          } else {
            history.push(`/kinoland/movies/${details.id}/videos`);
          }
        }}
      >
        TRALER
      </button>
      <button
        onClick={() => {
          if (details.hasOwnProperty("original_name")) {
            history.push(`/kinoland/serial/${details.id}/actors`);
          } else {
            history.push(`/kinoland/movies/${details.id}/actors`);
          }
        }}
      >
        ACTORS
      </button>
    </div>
  );
}
export default BtnCurrentPage;
