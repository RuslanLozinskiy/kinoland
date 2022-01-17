function BiographyActor(props) {
  const { data } = props;
  return data.biography ? (
    <>
      <h2>Биография: </h2>
      <p>{data.biography}</p>
    </>
  ) : null;
}
export default BiographyActor;
