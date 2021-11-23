const createYears = () => {
  const years = [];
  for (let i = 2021; i >= 1970; i--) {
    years.push(i);
  }
  return years;
};
const getYears = createYears();
function ReleaseYear(props) {
  return getYears.map((item, index) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });
}
export default ReleaseYear;
