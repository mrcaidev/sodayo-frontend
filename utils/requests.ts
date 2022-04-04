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

requests.interceptors.request.use(
  config => {
    // Bake token into headers if it exists.
    const token = localStorage.getItem("token");
    if (!token) {
      return config;
    }
    if (!config.headers) {
      config.headers = { Authorization: `Bearer ${token}` };
    } else {
      config.headers["Authorization"] = `Bearer ${token}`;
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
