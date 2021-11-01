import style from "./Image.Actor.module.css";

function ImageActor(props) {
  const { data, confg } = props;
  return (
    <div className={style.imgActor}>
      <img
        alt=""
        src={confg.base_url + confg.poster_sizes[2] + data.profile_path}
      />
    </div>
  );
}
export default ImageActor;
