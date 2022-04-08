import axios from "axios";

export const requests = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "/api/" : "localhost:3000/api",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
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
    config.headers["authorization"] = `Bearer ${token}`;
  }
  return config;
});

requests.interceptors.response.use(
  res => res.data,
  err => Promise.resolve(err.response.data)
);
