import { useRequest } from "ahooks";
import { userHelper } from "helpers/user";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface Config {
  redirectOnAuth?: string;
  redirectOnNotAuth?: string;
}

export const useAuth = (config: Config = {}) => {
  const { data, loading, refresh } = useRequest(userHelper.me, {
    cacheKey: "me",
  });
  const router = useRouter();

  // Authorization related actions.
  const register = useCallback(userHelper.register, []);
  const login = useCallback(userHelper.login, []);
  const logout = useCallback(() => {
    localStorage.setItem("token", "");
    router.reload();
  }, []);
  const actions = { register, login, logout, refresh };

  // If data has not arriven.
  if (!data) {
    return { me: {}, loading, actions };
  }

  // On arrival, extract staff info.
  const { me } = data;
  const { redirectOnAuth, redirectOnNotAuth } = config;

  // Redirect if unauthenticated.
  if (!me && redirectOnNotAuth) {
    router.push(redirectOnNotAuth);
  }

  // Redirect if authenticated.
  if (me && redirectOnAuth) {
    router.push(redirectOnAuth);
  }

  return { me, loading, actions };
};
