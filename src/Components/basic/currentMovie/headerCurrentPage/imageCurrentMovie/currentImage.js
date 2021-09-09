import style from "./currentImage.module.css";

function CurrentImage(props) {
  const { image, data } = props;
  return (
    <div className={style.showItemImage}>
      <img
        alt=""
        src={image.base_url + image.poster_sizes[3] + data.poster_path}
      />
    </div>
  );
}
export default CurrentImage;
