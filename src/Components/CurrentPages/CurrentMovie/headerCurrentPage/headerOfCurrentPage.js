import BackDropImage from "./backDropImage.js/backDropImage";
import CurrentImage from "./imageCurrentMovie/currentImage";
import OverviewCurrentMovies from "./overviewCurrentMovie/overviewCurrentMovie";

import style from "./headerOfCurrentPage.module.css";

function HeaderOfCurrentPage(props) {
  const { data, image } = props;
  return (
    <>
      <BackDropImage data={data} image={image} />
      <div className={style.headerCurrentPage}>
        <CurrentImage data={data} image={image} />
        <OverviewCurrentMovies data={data} />
      </div>
    </>
  );
}
export default HeaderOfCurrentPage;
