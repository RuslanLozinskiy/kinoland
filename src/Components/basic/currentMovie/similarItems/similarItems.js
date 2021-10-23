import Item from "../../movieCard/Item";

import style from "./similarItems.module.css";

function SimilarItems(props) {
  const { similarItems, image } = props;
  similarItems.length = 5;

  return (
    <div className={style.similarMovie}>
      <h2 id={style.textSimilarItems}>ПОХОЖИЕ</h2>
      <div className={style.sliderSimilarItems}>
        <Item item={similarItems} image={image} />
      </div>
    </div>
  );
}
export default SimilarItems;
