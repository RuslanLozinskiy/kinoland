import BackDropImage from "./backDropImage.js/backDropImage";
import CurrentImage from "./imageCurrentMovie/currentImage";
import OverviewCurrentMovies from "./overviewCurrentMovie/overviewCurrentMovie";

import style from "./headerOfCurrentPage.module.css";

function HeaderOfCurrentPage(props) {
  const { data, image } = props;
  if (image.length !== 0 && data.length !== 0) {
    return (
      <>
        <BackDropImage data={data} image={image} />
        <div className={style.headerCurrentPage}>
          <CurrentImage data={data} image={image} />
          <OverviewCurrentMovies data={data} />
        </div>
      </>
    );
  } else {
    return null;
  }
}
export default HeaderOfCurrentPage;
