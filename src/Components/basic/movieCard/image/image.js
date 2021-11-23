import LazyLoad from "react-lazyload";

import style from "./image.module.css";

function Image(props) {
  const { image, item } = props;
  return (
    <LazyLoad className={style.moviesImage} height={200}>
      <img
        src={image.base_url + image.poster_sizes[3] + item.poster_path}
        title={item.hasOwnProperty("original_title") ? item.title : item.name}
        alt=""
      />
    </LazyLoad>
  );
}
export default Image;
