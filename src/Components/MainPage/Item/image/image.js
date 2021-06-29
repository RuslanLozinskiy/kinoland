import LazyLoad from "react-lazyload";

function Image(props) {
    const { image, item } = props;
   
  return (
      
          <LazyLoad className="movies-image" height={200}>
      <img
        src={image.base_url + image.poster_sizes[4] + item.poster_path}
        alt=""
              />
          </LazyLoad>
    
  );
}
export default Image;
