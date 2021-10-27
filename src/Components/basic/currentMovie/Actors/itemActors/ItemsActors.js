import LazyLoad from "react-lazyload";

import style from "./itemActors.module.css";

function ItemActors(props) {
  const { data, confg } = props;
  return data.map((item, index) => {
    return (
      <div key={item.id} className={style.ActorsCard}>
        <LazyLoad className={style.moviesImage} height={200}>
          <img
            src={confg.base_url + confg.poster_sizes[1] + item.profile_path}
            alt=""
          />
        </LazyLoad>
        <div className={style.infoActors}>
          {" "}
          <h3>{item.name}</h3>
          <span>{item.character}</span>
        </div>
      </div>
    );
  });
}
export default ItemActors;
