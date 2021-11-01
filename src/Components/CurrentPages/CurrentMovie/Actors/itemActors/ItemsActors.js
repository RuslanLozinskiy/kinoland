import { useHistory } from "react-router";

import ImgActor from "./imgActor/ImgActor.js";
import InfoActor from "./infoActor/InfoActor";

import style from "./itemActors.module.css";

function ItemActors(props) {
  const { data, confg } = props;
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
        <ImgActor data={item} confg={confg} />
        <InfoActor data={item} />
      </div>
    );
  });
}
export default ItemActors;
