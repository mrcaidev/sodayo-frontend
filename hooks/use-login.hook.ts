import { useLocalStorageState, useRequest } from "ahooks";
import { message } from "antd";
import { requestHelper } from "helpers/request.helper";

export function useLogin() {
  const [, setToken] = useLocalStorageState<string>("token", {
    serializer: v => v,
    deserializer: v => v,
  });

  const { run: login } = useRequest(requestHelper.login, {
    manual: true,
    onSuccess: res => {
      setToken(res);
      message.success("登录成功");
    },
    onError: err => {
      message.error(err.message);
    },
  });
  return login;
}
