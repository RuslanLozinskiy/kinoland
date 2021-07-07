import { useEffect, useState } from "react";

import Item from "../../Item/Item";
import { getConfiguration } from "../../../../store/data/dataConfg";
import { getSerials } from "../../../../store/data/dataOfSerial";

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
