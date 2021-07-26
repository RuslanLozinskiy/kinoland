function ShowActorsCurrentPage(props) {
  const { actors, confg } = props;
  console.log(actors);
  if (actors.length !== 0) {
    return <div className="showActors">

    </div>;
  } else {
      return null;
  }
}
export default ShowActorsCurrentPage;
