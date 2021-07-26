function Info(props) {
  const { info } = props;
  return (
    <div className="movies-info">
      <h4><b>{info.hasOwnProperty("original_title") ? info.title : info.name}</b></h4>
    </div>
  );
}
export default Info;
