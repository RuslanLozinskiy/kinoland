import style from "./AbourActor.module.css";

function AboutActor(props) {
  const { data } = props;
  return (
    <div className={style.aboutActor}>
      <h2>Им'я: {data.name}</h2>
      <h2>
        Дата рожденния: {data.birthday} in {data.place_of_birth}
      </h2>
      {data.deathday === null ? null : <h2>Дата гибели: {data.deathday}</h2>}
      <h2>Пол: {data.gender === 1 ? "Женщина" : "Мужчина"}</h2>
      <h2>Популярность: {data.popularity.toFixed(2)}</h2>
    </div>
  );
}
export default AboutActor;
