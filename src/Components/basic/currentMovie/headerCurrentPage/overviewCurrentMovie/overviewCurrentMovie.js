import Progressbar from "../ProgressBar/ProgressBar";

import style from "./overviewCurrentMovie.module.css";

function OverviewCurrentMovies(props) {
  const { data } = props;
  return (
    <div className={style.showItemOverview}>
      <span>
        {data.hasOwnProperty("title") ? data.title : data.name}
        <Progressbar vote_average={data.vote_average} />
      </span>
      <p>{data.overview}</p>
    </div>
  );
}
export default OverviewCurrentMovies;
