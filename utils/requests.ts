import axios from "axios";

export const requests = axios.create({
  baseURL: "http://192.168.31.205:3600/",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

requests.interceptors.request.use(config => {
  // Bake token into headers if it exists.
  const token = localStorage.getItem("token");
  if (!token) {
    return config;
  }
  if (!config.headers) {
    config.headers = { authorization: `Bearer ${token}` };
  } else {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

requests.interceptors.response.use(
  res => res.data,
  err => {
    throw new Error(err.response.data.message);
  }
);
