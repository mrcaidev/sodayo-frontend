import { useLocalStorageState } from "ahooks";

export function useToken() {
  return useLocalStorageState<string>("token", {
    serializer: t => t,
    deserializer: t => t,
  });
}
