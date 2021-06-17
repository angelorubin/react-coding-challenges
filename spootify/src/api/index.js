import axios from "axios";
import { api } from "config";

export const http = axios.create({
  baseURL: api.baseURL,
  timeout: 3000,
});
