import axios from "axios";
import { api } from "config";

export const http = axios.create({
  baseURL: api.baseUrl,
  timeout: 3000,
  data: "grant_type=client_credentials",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: api.clientId,
    password: api.clientSecret,
  },
});
