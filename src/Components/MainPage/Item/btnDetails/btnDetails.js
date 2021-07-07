import { useHistory } from "react-router-dom";
function BtnDetails(props) {
  const { details } = props;
  const history = useHistory();
  return (
    <button
      className="details"
      onClick={() => {
        if (details.hasOwnProperty("original_name")) {
          history.push(`/kinoland/serial/${details.id}`);
        } else {
          history.push(`/kinoland/movies/${details.id}`);
        }
      }}
    >
      details
    </button>
  );
}
export default BtnDetails;
