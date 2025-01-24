import { authenticateToken } from "@/middleware/auth";

export function withAuth(handler, allowedRoles = []) {
  return async (req, res) => {
    const result = await authenticateToken(allowedRoles)(req, res, () => {});

    if (result) {
      return result;
    }

    return handler(req, res);
  };
}
