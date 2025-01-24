import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextResponse } from "next/server";
import User from "@/models/userModel";

export function authenticateToken(allowedRoles = []) {
  return async (req, res) => {
    try {
      // Parse cookies from the request headers
      const authHeader = req.headers.get("cookie");
      const cookies = cookie.parse(authHeader || "");

      // Retrieve the token from the cookies
      const token = cookies.token;

      if (!token) {
        return NextResponse.json(
          {
            success: false,
            message: "Access denied. No token provided.",
          },
          { status: 401 }
        );
      }

      // Verify the token
      const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Assuming the token payload contains 'role' and 'userId'
      const { role, userId } = verified;

      // Check if the user's role is allowed
      if (allowedRoles.length && !allowedRoles.includes(role)) {
        return NextResponse.json(
          {
            success: false,
            message: "Access denied. Unauthorized role.",
          },
          { status: 403 }
        );
      }

      // Fetch the user from the database
      const user = await User.findById(userId);

      if (!user) {
        return NextResponse.json(
          {
            success: false,
            message: "User not found.",
          },
          { status: 404 }
        );
      }

      // Attach the user object to the request (for downstream usage)
      req.user = user;

      return NextResponse.json(
        { success: true, message: "Authenticated successfully", user },
        { status: 200 }
      );
    } catch (error) {
      console.error("Authentication error:", error.message);
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token or authentication error.",
        },
        { status: 400 }
      );
    }
  };
}
