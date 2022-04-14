import { useRequest } from "ahooks";
import { requestHelper } from "helpers/request.helper";
import { useRouter } from "next/router";

interface Config {
  redirectOnAuth?: string;
  redirectOnUnauth?: string;
}

export const useAuth = (config: Config = {}) => {
  const { data: profile, loading } = useRequest(requestHelper.getProfile, {
    cacheKey: "profile",
  });
  const router = useRouter();

  // If data has not arriven.
  if (loading) {
    return { profile: undefined, loading };
  }

  // On arrival, extract staff info.
  const { redirectOnAuth, redirectOnUnauth } = config;

  // Redirect if unauthenticated.
  if (!profile && redirectOnUnauth) {
    router.push(redirectOnUnauth);
  }

  // Redirect if authenticated.
  if (profile && redirectOnAuth) {
    router.push(redirectOnAuth);
  }

  return { profile, loading };
};
