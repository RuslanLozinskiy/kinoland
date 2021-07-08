function BackDropImage(props) {
  const { data, image } = props;
  return (
    <div className="header-currentPage-back_drop_image">
      <img
        alt=""
        src={image.base_url + image.backdrop_sizes[2] + data.backdrop_path}
      />
    </div>
  );
}
export default BackDropImage;
