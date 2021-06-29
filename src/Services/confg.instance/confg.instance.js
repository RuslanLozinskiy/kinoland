import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/configuration?api_key=d55796f2ca4ecdb97ce23a56b9712c7f&language=en-US",
});
