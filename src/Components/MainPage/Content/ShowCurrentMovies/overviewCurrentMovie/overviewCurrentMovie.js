function OverviewCurrentMovies(props) {
  const { data } = props;
  return (
    <div className="showItem-overview">
      <p>
        <b>overview:</b> {data.overview}
      </p>
    </div>
  );
}
export default OverviewCurrentMovies;
