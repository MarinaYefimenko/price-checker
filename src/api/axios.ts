import axios from "axios";

const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io/api:2XApjh5-/";

export const api = axios.create({
  baseURL: BASE_URL,
});