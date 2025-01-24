import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { dbConnect } from "@/db/dbConfig";

export async function POST(req) {
  try {
    // database connection
    dbConnect();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User does not exist" },
        { status: 404 }
      );
    }

    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    
    const response = NextResponse.json(
      {
        message: "You are successfully logged in",
        success: true,
        user
        // user: {
        //   id: user._id,
        //   firstName: user.firstName,
        //   lastName: user.lastName,
        //   email,
        //   isAdmin: user.isAdmin,
        //   role: user.role,
        //   token,
        // },
      },
      { status: 200 }
    );

    // Set cookie
    response.cookies.set("token", token, {
    //   httpOnly: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
