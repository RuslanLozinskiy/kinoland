import { useEffect, useState } from "react";

import Item from "../../../Item/Item";
import { getConfiguration } from "../../../../../store/data/dataConfg";
import { getOnTheAirSerials } from "../../../../../store/data/dataOfSerial";

function OnTheAir() {
  const [onTheAir, setOnTheAir] = useState([]);
  const [onTheAirImage, setOnTheAirImage] = useState([]);
  useEffect(() => {
    getOnTheAirSerials().then((res) => setOnTheAir(res));
    getConfiguration().then((res) => setOnTheAirImage(res));
  }, []);
  return (
    <div className="movies">
      <Item item={onTheAir} image={onTheAirImage} />
    </div>
  );
}
export default OnTheAir;
