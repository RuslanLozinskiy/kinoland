import BtnDetails from "./btnDetails/btnDetails";
import Image from "./image/image";
import Info from "./info/info";

function Item(props) {
  const { item, image } = props;
  if (item.length !== 0 && image.length !== 0) {
    return item.map((value) => {
      if (value.backdrop_path !== null) {
        return (
          <div className="movies-card" key={value.id}>
            <Image image={image} item={value} />
            <Info info={value} />
            <BtnDetails details={value} />
          </div>
        );
      } else {
        return "";
      }
    });
  } else {
    return "";
  }
}

export default Item;