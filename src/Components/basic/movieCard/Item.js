import BtnDetails from "./btnDetails/btnDetails";
import Image from "./image/image";
import Info from "./info/info";

import style from "./Item.module.css";

function Item(props) {
  const { item, image } = props;
  return item.map((value) => {
    return (
      <div className={style.moviesCard} key={value.id}>
        <Image image={image} item={value} />
        <Info info={value} />
        <BtnDetails details={value} />
      </div>
    );
  });
}

export default Item;
