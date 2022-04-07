import { BackendError } from "errors/backend";
import { IncomingHttpHeaders } from "http";
import { NextApiRequest } from "next";
import { decryptToken } from "./token";

export function getUserIdFromHeaders(headers: IncomingHttpHeaders) {
  const { authorization } = headers;
  if (!authorization) {
    throw new BackendError(401, "未登录");
  }

  const groups = authorization.match(/^Bearer\s(.*)$/);
  if (!groups || groups.length !== 2) {
    throw new BackendError(401, "令牌无效");
  }

  return decryptToken(groups[1]);
}

export function assertSameUserId(req: NextApiRequest) {
  const userIdInHeaders = getUserIdFromHeaders(req.headers);
  const userIdInUrl = req.query.id;
  if (userIdInHeaders !== userIdInUrl) {
    throw new BackendError(403, "无权访问");
  }
  return userIdInHeaders;
}
