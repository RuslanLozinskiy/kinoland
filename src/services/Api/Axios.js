import axios from "axios";
import { BASE_URL } from "./constant";

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});
export default Axios;
