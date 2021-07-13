import ShowCurrentMovie from "../../ShowCurrentMovies/ShowCurrentMovie";

function LayoutCurrentMovie(props) {
  return (
    <>
      <ShowCurrentMovie />
      {props.children}
    </>
  );
}
export default LayoutCurrentMovie;
