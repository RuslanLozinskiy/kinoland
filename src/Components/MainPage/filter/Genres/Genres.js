function Genres(props) {
  const { genres } = props;
  return genres.map((item, index) => {
    return (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    );
  });
}
export default Genres;
