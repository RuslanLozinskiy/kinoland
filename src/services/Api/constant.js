import { useParams } from "react-router";
export const BASE_URL = "https://api.themoviedb.org/";
export const API_VERSION = "3/";
export const DISCOVER_PATH = "discover/";
export const API_KEY = "d55796f2ca4ecdb97ce23a56b9712c7f";
export function PARAMS() {
  const params = useParams();
  return params;
}
