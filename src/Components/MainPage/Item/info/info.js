function Info(props) {
  const { info } = props;
  return (
    <div className="movies-info">
      <h4>{info.hasOwnProperty("original_title") ? info.title : info.name}</h4>
    </div>
  );
}
export default Info;
