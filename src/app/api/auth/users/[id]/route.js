import { dbConnect } from "@/db/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/userModel";


export async function PATCH(req, { params }) {
  try {

    dbConnect();
    const { id } = params;

    const userObj = await req.json();

    const user = await User.findByIdAndUpdate(
      id,
      userObj,
      { new: true }
    ).exec();


    return NextResponse.json(
      {
        success: true,
        message: "Your profile updated successfully!",
        data: user,
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
};


export async function GET(_, { params }) {
  try {
    dbConnect();
    const { id } = params;

    const user = await User.findById(id);

    return NextResponse.json(
      {
        success: true,
        message: "get user details",
        data: user,
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

export async function DELETE(_, { params }) {
  try {
    dbConnect();
    const { id } = params;
    await User.findByIdAndDelete(id);
    return NextResponse.json(
      {
        success: true,
        message: "user deleted successfully done",
      },
      { status: 203 }
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
