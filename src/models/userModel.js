import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide first name"],
    },

    lastName: {
      type: String,
      required: [true, "Please provide last name"],
    },

    email: {
      type: String,
      required: [true, "Please provide an email"],
    },

    password: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    requestNum: {
      type: String,
      required: [true, "Please provide request number"],
    },

    visaReqId: {
      type: String,
      required: [true, "Please provide visa request id"],
    },

    foreignRegNum: {
      type: String,
      required: [true, "Please provide foreign registration number"],
    },

    status: {
      type: String,
      required: [true, "Please provide foreign registration number"],
    },

    comment: {
      type: String,
      required: [true, "Please provide comment"],
    },

    travelPurpose: {
      type: String,
      default: ""
    },

    lastNameAtBirth: {
      type: String,
      default: ""
    },

    gender: {
      type: String,
      required: [true, "Please provide gender"]
    },

    dateOfBirth: {
      type: Date,
      required: [true, "Please provide date of birth"]
    },

    countryOfBirth: {
      type: String,
      required: [true, "Please provide date of birth"]
    },

    placeOfBirth: {
      type: String,
      required: [true, "Please provide place of birth"]
    },

    address: {
      type: String,
      required: [true, "Please provide address"]
    },

    telephone: {
      type: String,
      required: [true, "Please provide telephone"]
    },

    issuingCountry: {
      type: String,
      required: [true, "Please provide issuing country"]
    },

    citizenship: {
      type: String,
      required: [true, "Please provide citizenship country"]
    },

    maritalStatus: {
      type: String,
      required: [true, "Please provide marital status"]
    },

    fatherName: {
      type: String,
      default: ""
    },

    motherName: {
      type: String,
      default: ""
    },

    currentProfession: {
      type: String,
      default: ""
    },

    employerCompany: {
      type: String,
      default: ""
    },

    employerAddress: {
      type: String,
      default: ""
    },

    employerTelephone: {
      type: String,
      default: ""
    },

    typeOfTravelDoc: {
      type: String,
      required: [true, "Please provide type of travel document"]
    },

    travelDocNum: {
      type: String,
      required: [true, "Please provide travel document number"]
    },

    issuedBy: {
      type: String,
      required: [true, "Please provide issued by"]
    },

    dateOfIssue: {
      type: Date,
      default: ""
    },

    validUntil: {
      type: Date,
      default: ""
    },

    countryOfOrigin: {
      type: String,
      required: [true, "Please provide country of origin"]
    },

    diplomaticAndConsular: {
      type: String,
      required: [true, "Please provide diplomatic and consular"]
    },

    visaType: {
      type: String,
      default: ""
    },

    travelPurpose2: {
      type: String,
      default: ""
    },

    numberOfDays: {
      type: String,
      required: [true, "Please provide number of days of stay"]
    },

    otherVisaIssues: {
      type: String,
      required: [true, "Please provide Other visa issues"]
    },

    dateOfArrival: {
      type: Date,
      required: [true, "Please provide Date of arrival"]
    },

    dateOfDeparture: {
      type: Date,
      required: [true, "Please provide Date of departure"]
    },

    borderCrossing: {
      type: String,
      default: ""
    },

    meansOfTransport: {
      type: String,
      default: ""
    },

    previouslyStayed: {
      type: String,
      default: ""
    },

    hostFirstName: {
      type: String,
      required: [true, "Please provide host first name"]
    },

    hostTelNum: {
      type: String,
      required: [true, "Please provide host telephone number"]
    },

    hostAddress: {
      type: String,
      required: [true, "Please provide host address"]
    },

    hostEmail: {
      type: String,
      required: [true, "Please provide host email address"]
    },
    
    municipality: {
      type: String,
      required: [true, "Please provide municipality"]
    },

    settlement: {
      type: String,
      required: [true, "Please provide settlement"]
    },

    street: {
      type: String,
      required: [true, "Please provide street"]
    },

    houseNum: {
      type: String,
      required: [true, "Please provide house number"]
    },

    entrance: {
      type: String,
      default: ""
    },

    floor: {
      type: String,
      default: ""
    },

    apartment: {
      type: String,
      default: ""
    },

    travelCost: {
      type: String,
      required: [true, "Please provide travel cost"]
    },

    livingExpenses: {
      type: String,
      required: [true, "Please provide living expenses"]
    },
  }, 
  { 
    timestamps: true
  }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
