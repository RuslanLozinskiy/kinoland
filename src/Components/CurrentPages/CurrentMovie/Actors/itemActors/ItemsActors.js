import { useHistory } from "react-router";

import ImgActor from "./imgActor/ImgActor.js";

import style from "./itemActors.module.css";

function ItemActors(props) {
  const { data, confg } = props;
  console.log(data);
  const history = useHistory();
  return data.map((item, index) => {
    return item.profile_path === null ? null : (
      <div
        key={item.id}
        className={style.ActorsCard}
        onClick={() => {
          history.push(`/kinoland/person/${item.id}`);
        }}
      >
        <ImgActor data={item} confg={confg}>
          <h4>{item.name}</h4>
        </ImgActor>
      </div>
    );
  });
}
export default ItemActors;
