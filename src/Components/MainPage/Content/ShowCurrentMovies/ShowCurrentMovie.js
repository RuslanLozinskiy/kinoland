import CurrentImage from "./imageCurrentMovie/currentImage";
import InfoCurrentMovie from "./infoCurrentMovie/infoCurrentMovie";
import OverviewCurrentMovies from "./overviewCurrentMovie/overviewCurrentMovie";
import SimilarItems from "./similarItems/similarItems";
import Trailer from "./trailer/Trailer";

function ShowCurrentMovie(props) {
  let { data, image, video, link, similarItem } = props;
  if (image.length !== 0 && data.length !== 0) {
    return (
      <div className="showItem" key={data.id}>
        <CurrentImage data={data} image={image} />

        <OverviewCurrentMovies data={data} />

        <InfoCurrentMovie data={data} />
        <Trailer video={video} linkOftrailer={link} />
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
