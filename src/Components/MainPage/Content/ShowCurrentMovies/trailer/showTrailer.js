function ShowTrailer(props) {
  const { video } = props;
  console.log(video);
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
  } else {
    return null;
  }
}
export default ShowTrailer;
