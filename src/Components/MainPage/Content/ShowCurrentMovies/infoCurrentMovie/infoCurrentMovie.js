function InfoCurrentMovie(props) {
  const { data } = props;

  return (
    <div className="showItem-info">
      <p>
        <b>data of release:</b>{" "}
        {data.hasOwnProperty("release_date")
          ? data.release_date
          : data.first_air_date}
      </p>
      <p>
        <b>name:</b> {data.hasOwnProperty("title") ? data.title : data.name}
      </p>
      {data.production_countries.length !== 0 ? (
        <p>
          <b> country:</b>
          {data.production_countries[0].name}
        </p>
      ) : null}

      {data.hasOwnProperty("budget") ? (
        <p>
          <b>budget:</b> {data.budget} $
        </p>
      ) : (
        ""
      )}
      {data.genres.length !== 0 ? (
        <p>
          <b>genre:</b> {data.genres[0].name}
        </p>
      ) : null}

      <p>
        <b>language:</b> {data.original_language}
      </p>
    </div>
  );
}
export default InfoCurrentMovie;
