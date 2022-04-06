import axios from "axios";
import { NextApiRequest } from "next";
import { decodeToken } from "./token";

export const requests = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "/api/" : "localhost:3000/api",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

requests.interceptors.request.use(
  config => {
    // Bake token into headers if it exists.
    const token = localStorage.getItem("token");
    if (!token) {
      return config;
    }
    if (!config.headers) {
      config.headers = { authorization: `Bearer ${token}` };
    } else {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    console.error(err);
    return Promise.reject(err);
  }
);

requests.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.error) {
      console.error(res.error);
    }
    return res;
  },
  err => {
    console.error(err);
    return Promise.resolve(err);
  }
);

export function getUserIdFromReq(req: NextApiRequest) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Error("未授权");
  }

  const groups = authorization.match(/^Bearer\s(.*)$/);
  if (!groups || groups.length !== 2) {
    throw new Error("不合法的授权");
  }

  return decodeToken(groups[1]);
}
