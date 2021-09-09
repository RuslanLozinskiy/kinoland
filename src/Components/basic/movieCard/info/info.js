import style from "./info.module.css";

function Info(props) {
  const { info } = props;
  return (
    <div className={style.moviesInfo}>
      <h4>
        <b>{info.hasOwnProperty("original_title") ? info.title : info.name}</b>
      </h4>
    </div>
  );
}
export default Info;
