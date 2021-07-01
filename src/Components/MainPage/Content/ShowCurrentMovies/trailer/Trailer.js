import LinkOfTrailer from "./linkOfTrailer";
function Trailer(props) {
  const { video, linkOftrailer } = props;

  if (video.length !== 0) {
    return (
      <div id="showItem-trailer">
        <iframe
          title="trailer"
          src={`https://www.youtube.com/embed/${video[0].key}`}
          loading="lazy"
          allowFullScreen
        />
      </div>
    );
  } else if (Object.keys(linkOftrailer).length !== 0) {
    return <LinkOfTrailer link={linkOftrailer} />;
  } else {
    return (
      <h2 className="trailer-nothave">
        sorry we don't have trailer or link of trailer at the moment
      </h2>
    );
  }
}
export default Trailer;
