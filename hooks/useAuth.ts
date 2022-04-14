import { useRequest } from "ahooks";
import { getProfileHelper } from "helpers/request.helper";
import { useRouter } from "next/router";

interface Config {
  redirectOnAuth?: string;
  redirectOnNotAuth?: string;
}

export const useAuth = (config: Config = {}) => {
  const { data: profile, loading } = useRequest(getProfileHelper, {
    cacheKey: "profile",
  });
  const router = useRouter();

  // If data has not arriven.
  if (!profile) {
    return { profile: undefined, loading };
  }

  // On arrival, extract staff info.
  const { redirectOnAuth, redirectOnNotAuth } = config;

  // Redirect if unauthenticated.
  if (!profile && redirectOnNotAuth) {
    router.push(redirectOnNotAuth);
  }

  // Redirect if authenticated.
  if (profile && redirectOnAuth) {
    router.push(redirectOnAuth);
  }

  return { profile, loading };
};
