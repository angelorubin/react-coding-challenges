import axios from "axios";
import { api } from "config";

export const http = axios.create({
  baseURL: api.baseURL,
  timeout: 3000,
  params: {
    response_type: api.code,
    client_id: api.clientId,
    scope: encodeURIComponent("user-read-private user-read-email"),
    redirect_uri: encodeURIComponent(api.redirectUri),
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
