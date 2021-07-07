import { useEffect, useState } from "react";

import Item from "../../Item/Item";
import { getConfiguration } from "../../../../store/data/dataConfg";
import { getMovies } from "../../../../store/data/dataOfMovie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [imageMovie, setImageMovie] = useState([]);
  useEffect(() => {
    getMovies().then((res) => setMovies(res));
    getConfiguration().then((res) => setImageMovie(res));
  }, []);
  return (
    <div className="movies">
      <Item item={movies} image={imageMovie} />
    </div>
  );
}
export default Movies;
