import LazyLoad from "react-lazyload";

import style from "./imgActor.module.css";

function ImgActor(props) {
  const { data, confg } = props;
  return (
    <LazyLoad className={style.ActorImg} height={200}>
      <img
        src={confg.base_url + confg.poster_sizes[3] + data.profile_path}
        alt=""
      />
    </LazyLoad>
  );
}
export default ImgActor;
