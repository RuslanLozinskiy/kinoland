function CurrentImage(props) {
  const { image, data } = props;
  return (
    <div className="showItem-image">
      <img
        alt=""
        src={image.base_url + image.poster_sizes[3] + data.poster_path}
      />
    </div>
  );
}
export default CurrentImage;
