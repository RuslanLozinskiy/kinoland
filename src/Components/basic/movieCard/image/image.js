import LazyLoad from "react-lazyload";
import imgNotFound from "../../../../assets/image-not-found.svg";
import style from "./image.module.css";

function Image(props) {
  const { image, item } = props;
  return (
    <LazyLoad className={style.moviesImage} height={200}>
      {item.poster_path !== null ? (
        <img className={style.imgPoster}
          src={image.base_url + image.poster_sizes[3] + item.poster_path}
          title={item.hasOwnProperty("original_title") ? item.title : item.name}
          alt=""
        />
      ) : (
        <img src={imgNotFound} alt="" className={style.imageNotFound} />
      )}
    </LazyLoad>
  );
}
export default Image;
