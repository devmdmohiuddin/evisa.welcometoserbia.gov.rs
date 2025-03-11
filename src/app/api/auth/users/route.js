import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConfig";
import User from "@/models/userModel";

cloudinary.config({
  cloud_name: 'dyht9a7gs',
  api_key: '778495654219647',
  api_secret: 'oLLgZUnc9RQcd4YTx98jBkFycj8',
});

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

    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");
    const requestNum = formData.get("requestNum");
    const visaReqId = formData.get("visaReqId");
    const foreignRegNum = formData.get("foreignRegNum");
    const status = formData.get("status");
    const comment = formData.get("comment");
    const travelPurpose = formData.get("travelPurpose");
    const lastNameAtBirth = formData.get("lastNameAtBirth");
    const gender = formData.get("gender");
    const dateOfBirth = formData.get("dateOfBirth");
    const countryOfBirth = formData.get("countryOfBirth");
    const placeOfBirth = formData.get("placeOfBirth");
    const address = formData.get("address");
    const telephone = formData.get("telephone");
    const issuingCountry = formData.get("issuingCountry");
    const citizenship = formData.get("citizenship");
    const maritalStatus = formData.get("maritalStatus");
    const fatherName = formData.get("fatherName");
    const motherName = formData.get("motherName");
    const currentProfession = formData.get("currentProfession");
    const employerCompany = formData.get("employerCompany");
    const employerAddress = formData.get("employerAddress");
    const employerTelephone = formData.get("employerTelephone");
    const typeOfTravelDoc = formData.get("typeOfTravelDoc");
    const travelDocNum = formData.get("travelDocNum");
    const issuedBy = formData.get("issuedBy");
    const dateOfIssue = formData.get("dateOfIssue");
    const validUntil = formData.get("validUntil");
    const countryOfOrigin = formData.get("countryOfOrigin");
    const diplomaticAndConsular = formData.get("diplomaticAndConsular");
    const visaType = formData.get("visaType");
    const travelPurpose2 = formData.get("travelPurpose2");
    const numberOfDays = formData.get("numberOfDays");
    const otherVisaIssues = formData.get("otherVisaIssues");
    const dateOfArrival = formData.get("dateOfArrival");
    const dateOfDeparture = formData.get("dateOfDeparture");
    const borderCrossing = formData.get("borderCrossing");
    const meansOfTransport = formData.get("meansOfTransport");
    const previouslyStayed = formData.get("previouslyStayed");
    const hostFirstName = formData.get("hostFirstName");
    const hostTelNum = formData.get("hostTelNum");
    const hostAddress = formData.get("hostAddress");
    const hostEmail = formData.get("hostEmail");
    const municipality = formData.get("municipality");
    const settlement = formData.get("settlement");
    const street = formData.get("street");
    const houseNum = formData.get("houseNum");
    const entrance = formData.get("entrance");
    const floor = formData.get("floor");
    const apartment = formData.get("apartment");
    const travelCost = formData.get("travelCost");
    const livingExpenses = formData.get("livingExpenses");
    const image = formData.get("image");


    let uploadRes;
    if (image) {
       // Convert file to base64
    const buffer = await image.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");
    const imageDataUri = `data:image/png;base64,${base64Image}`;

    // Upload to Cloudinary
     uploadRes = await cloudinary.uploader.upload(imageDataUri, {
      folder: "profile_pictures",
    });
    }

    const newUser = await User.create({
      firstName, lastName, email, password, role, requestNum, visaReqId, foreignRegNum, status, comment, travelPurpose, lastNameAtBirth, gender, dateOfBirth, countryOfBirth, placeOfBirth, address, telephone, issuingCountry, citizenship, maritalStatus, fatherName, motherName, currentProfession, employerCompany, employerAddress, employerTelephone, typeOfTravelDoc, travelDocNum, issuedBy, dateOfIssue, validUntil, countryOfOrigin, diplomaticAndConsular, visaType, travelPurpose2, numberOfDays, otherVisaIssues, dateOfArrival, dateOfDeparture, borderCrossing, meansOfTransport, previouslyStayed, hostFirstName, hostTelNum, hostAddress, hostEmail, municipality, settlement, street, houseNum, entrance, floor, apartment, travelCost, livingExpenses, image: uploadRes?.url
    });

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
