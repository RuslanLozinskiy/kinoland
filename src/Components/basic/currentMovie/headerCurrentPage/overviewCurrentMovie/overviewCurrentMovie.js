import style from "./overviewCurrentMovie.module.css";

function OverviewCurrentMovies(props) {
  const { data } = props;
  return (
    <div className={style.showItemOverview}>
      <h1>{data.hasOwnProperty("title") ? data.title : data.name}</h1>
      <p>{data.overview}</p>
    </div>
  );
}
export default OverviewCurrentMovies;
