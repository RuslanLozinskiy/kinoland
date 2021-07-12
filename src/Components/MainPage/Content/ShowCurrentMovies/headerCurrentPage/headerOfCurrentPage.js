import BackDropImage from "./backDropImage.js/backDropImage";
import CurrentImage from "./imageCurrentMovie/currentImage";
import OverviewCurrentMovies from "./overviewCurrentMovie/overviewCurrentMovie";
import { useParams } from 'react-router-dom';

function HeaderOfCurrentPage(props) {
  const { data, image } = props;
  const params = useParams()
console.log(params);
  return (
    <>
      <BackDropImage data={data} image={image} />
      <div className="header-currentPage">
      <CurrentImage data={data} image={image} />
      <OverviewCurrentMovies data={data} />
    </div>
    </>
  );
}
export default HeaderOfCurrentPage;
