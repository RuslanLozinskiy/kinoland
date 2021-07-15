import BackDropImage from "./backDropImage.js/backDropImage";
import CurrentImage from "./imageCurrentMovie/currentImage";
import OverviewCurrentMovies from "./overviewCurrentMovie/overviewCurrentMovie";

function HeaderOfCurrentPage(props) {
  const { data, image } = props;
    if (image.length !== 0 && data.length !== 0) {
   return ( 
     <>
      <BackDropImage data={data} image={image} />
      <div className="header-currentPage">
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
