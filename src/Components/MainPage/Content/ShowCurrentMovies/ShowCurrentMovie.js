import BtnCurrentPage from "./headerCurrentPage/btnCurrentPage/btnCurrentPage";
import HeaderOfCurrentPage from "./headerCurrentPage/headerOfCurrentPage";
import SimilarItems from "./similarItems/similarItems";

function ShowCurrentMovie(props) {
  let { data, image, video, link, similarItem } = props;
  if (image.length !== 0 && data.length !== 0) {
    return (
      <div className="showItem" key={data.id}>
        <HeaderOfCurrentPage data={data} image={image} />
        <BtnCurrentPage details={data} />
        {/* <Trailer video={video} linkOftrailer={link} /> */}
        {similarItem.length !== 0 ? (
          <SimilarItems similarItems={similarItem} image={image} />
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return null;
  }
}

export default ShowCurrentMovie;
