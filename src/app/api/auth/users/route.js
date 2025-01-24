import { NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConfig";
import User from "@/models/userModel";

export async function GET() {
  try {
    // database connection
    dbConnect();

    const users = await User.find({});

    return NextResponse.json(
      {
        success: true,
        message: "All users",
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    // database connection
    dbConnect();
    const userObj = await req.json();

    const newUser = await User.create(userObj);

    return NextResponse.json(
      {
        success: true,
        message: "New user successfully created!",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
