import Image from "./image/image";
import { useHistory } from "react-router-dom";

import style from "./Item.module.css";

function Item(props) {
  const { item, image } = props;
  const history = useHistory();

  return item.map((value) => {
    return (
      <div
        className={style.moviesCard}
        key={value.id}
        onClick={() => {
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 300);

          if (value.hasOwnProperty("original_name")) {
            history.push(`/kinoland/serial/${value.id}/details`);
          } else {
            history.push(`/kinoland/movies/${value.id}/details`);
          }
        }}
      >
        <Image image={image} item={value} />
      </div>
    );
  });
}

export default Item;
