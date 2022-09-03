import axios from "axios";

export const opentdbApi = axios.create({
  baseURL: "https://opentdb.com/api.php",
});
