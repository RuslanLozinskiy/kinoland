import { useEffect, useState } from "react";
import {
  getConfiguration,
  getOnTheAirSerials,
} from "../../../../../Services/data/Data";
import Item from "../../../Item/Item";

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
