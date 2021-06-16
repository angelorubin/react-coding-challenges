import axios from "axios";
import config from "config";

const { authURL, baseURL, clientId, clientSecret } = config.api;

export const httpAuth = axios.create({
  baseURL: authURL,
  timeout: 3000,
  params: {
    grant_type: "client_credentials",
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: clientId,
    password: clientSecret,
  },
});
