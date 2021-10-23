import style from "./backDropImage.module.css";
function BackDropImage(props) {
  const { data, image } = props;
  return (
    <div className={style.headerCurrentPageBackDropImage}>
      <img
        alt=""
        src={image.base_url + image.backdrop_sizes[2] + data.backdrop_path}
      />
    </div>
  );
}
export default BackDropImage;
