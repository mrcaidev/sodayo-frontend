import { BackendError } from "errors/backend";
import { IncomingHttpHeaders } from "http";
import { tokenUtils } from "./token";

export const apiUtils = {
  getUserIdFromHeaders,
};

function getUserIdFromHeaders(headers: IncomingHttpHeaders) {
  const { authorization } = headers;
  if (!authorization) {
    throw new BackendError(401, "未登录");
  }

  const groups = authorization.match(/^Bearer\s(.*)$/);
  if (!groups || groups.length !== 2) {
    throw new BackendError(401, "令牌无效");
  }

  return tokenUtils.decode(groups[1]);
}
