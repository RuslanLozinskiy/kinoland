import style from "./backDropImage.module.css";
function BackDropImage(props) {
  const { data, image } = props;
  return (
    
      <img 
      className={style.headerCurrentPageBackDropImage}
        alt=""
        src={image.base_url + image.backdrop_sizes[2] + data.backdrop_path}
      />
   
  );
}
export default BackDropImage;
