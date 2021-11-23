const createSort = [
  {
    label: "Популярные по убыванию",
    value: "popularity.desc",
  },
  {
    label: "Популярные по возростанию",
    value: "popularity.asc",
  },
  {
    label: "Рейтинг по убыванию",
    value: "vote_average.desc",
  },
  {
    label: "Рейтинг по возростанию",
    value: "vote_average.asc",
  },
];
function SortBy(props) {
  return createSort.map((item, index) => {
    return (
      <option value={item.value} key={index}>
        {item.label}
      </option>
    );
  });
}
export default SortBy;
