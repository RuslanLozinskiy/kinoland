import { useEffect, useState } from "react";
import { getConfiguration, getSerials } from "../../../../Services/data/Data";
import Item from "../../Item/Item";

function Serials() {
  const [serials, setSerials] = useState([]);
  const [imageSerials, setImageSerials] = useState([]);
  useEffect(() => {
    getSerials().then((res) => setSerials(res));
    getConfiguration().then((res) => setImageSerials(res));
  }, []);
  return (
    <div className="movies">
      <Item item={serials} image={imageSerials} />
    </div>
  );
}
export default Serials;
