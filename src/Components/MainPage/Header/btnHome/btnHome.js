import { useHistory } from "react-router-dom";

function BtnHome() {
  const history = useHistory();
  return (
    <button
      className="header-button"
      onClick={() => {
          history.push("/kinoland/");
      }}
    >
      HOME
    </button>
  );
}
export default BtnHome;
