import { useRef, useState } from "react";

import Item from "../../../Item/Item";

function SimilarItems(props) {
  const { similarItems, image } = props;
  const [togR, setTogR] = useState(true);
  const [togL, setTogL] = useState(true);
  let [position, setPosition] = useState(0);
  const slider = useRef(null);

  const prevHandler = (e) => {
    setPosition((position += 100));

    slider.current.childNodes.forEach((elem) => {
      elem.style = `transform: translatex(${position}%)`;
    });
    if (position !== -1800) {
      setTogR(true);
    }
    if (position >= 0) {
      setTogL(false);
    }
  };

  const nextHandler = () => {
    setPosition((position -= 100));

    slider.current.childNodes.forEach((elem) => {
      elem.style = `transform: translatex(${position}%)`;
    });

    if (position === -1700) {
      setTogR(false);
    }
    if (position < 0) {
      setTogL(true);
    }
  };

  return (
    <>
    <h2 id="text-similar-items">ПОХОЖИЕ</h2>
    <div className="similarItems">
      <div
        className={togL ? "btn-slider-prev" : "false"}
        onClick={prevHandler}
      ></div>
      
      <div className="slider-similar-items" ref={slider}>
        <Item item={similarItems} image={image} />
      </div>
      
      <div
        className={togR ? "btn-slider-next" : "false"}
        onClick={nextHandler}
      ></div>
    </div>
    </>
  );
}
export default SimilarItems;
