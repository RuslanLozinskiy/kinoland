import style from "./InfoActor.module.css";

function InfoActor(props) {
  const { data } = props;
  return (
    <div className={style.infoActors}>
      <h4>{data.name}</h4>
    </div>
  );
}
export default InfoActor;
