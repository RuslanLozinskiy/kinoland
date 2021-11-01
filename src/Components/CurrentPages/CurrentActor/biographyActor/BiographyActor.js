import style from "./BiographyActor.module.css";
function BiographyActor(props) {
  const { data } = props;
  return data.biography ? (
    <>
      <h2>Биография: </h2>
      <p className={style.biographyActor}>{data.biography}</p>
    </>
  ) : null;
}
export default BiographyActor;
