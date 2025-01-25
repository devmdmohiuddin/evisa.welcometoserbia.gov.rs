'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import TravelPurpose from "@/app/components/TravelPurpose";
import PersonalData from "@/app/components/PersonalData";
import TravelDocuments from "@/app/components/TravelDocuments";
import VisaInformation from "@/app/components/VisaInformation";
import AddDocuments from "@/app/components/AddDocuments";
import Fees from "@/app/components/Fees";

const VisaD = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({});
    setShow(false);
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  const statuses = [
    { id: "status-1", heading: "Travel purpose", html: <TravelPurpose user={user} /> },
    { id: "status-2", heading: "Personal data", html: <PersonalData user={user} /> },
    { id: "status-3", heading: "Travel Documents", html: <TravelDocuments user={user} /> },
    { id: "status-4", heading: "Visa Information", html: <VisaInformation user={user} /> },
    { id: "status-5", heading: "Add documents", html: <AddDocuments user={user} /> },
    { id: "status-6", heading: "Fees", html: <Fees user={user} /> },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const updateStatusBar = (step) => {
    if (step >= 0 && step < statuses.length) {
      setCurrentStep(step);
    }
  };
  
  return (
    <>
    {/* header section */}
    <header className="bg-[#253956]">
      <nav>
        <div className="sm:border-b-2">
          <div className="sm:container mx-auto flex justify-between items-center">
            <div className="flex items-center sm:border-r-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="77"
                  viewBox="0 0 6 77"
                  fill="none"
                >
                  <g id="Group 9195">
                    <rect
                      id="Rectangle 2986"
                      width="6"
                      height="25.6667"
                      fill="#D73842"
                    />
                    <rect
                      id="Rectangle 2987"
                      y="25.6654"
                      width="6"
                      height="25.6667"
                      fill="#253956"
                    />
                    <rect
                      id="Rectangle 2988"
                      y="51.3346"
                      width="6"
                      height="25.6667"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="px-10">
              <img className="w-[150px]" src="https://evisa.welcometoserbia.gov.rs/css/assets/logo.svg" alt="icon" />
              </div>
            </div>
            <div className="flex">
              {
                user?._id ? <div className="relative">
                <button className="flex items-center space-x-2 cursor-pointer bg-white p-6" onClick={() => setShow(!show)}>
                <span className="font-light uppercase text-[14px] text-[#253956] hidden sm:block">{user.firstName} {user.lastName} </span>
                <img className="w-8" src="./images/user.png"/>
                </button>
                {show && <button className="absolute flex items-center space-x-2 bg-white p-1 w-full border-t-[2px] border-[#253956]" onClick={handleLogout}>
                  <img src="./images/logout.png" alt="Logout" />
                  <span className="text-[#253956] font-semibold">Log out</span>
                </button>}
              </div> :  <Link href="/login"
                className="inline-block text-center text-[#007bff] hover:text-[#0056b3] hover:underline transition-none delay-100 bg-white py-[27px] sm:px-12 px-8"
              >
                Log in
              </Link>
              }
            <div className="text-white sm:hidden px-6 flex items-center justify-center text-[24px]">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block container mx-auto">
          <div className="flex items-center justify-between">
            <ul className="flex pl-48">
              <li className="">
                <Link
                  className="py-4 px-6 border-r-[1px] border-l-[1px] border-[#637599] inline-block text-[#EFEFEF] text-sm font-semibold hover:bg-[#EFEFEF] hover:text-[#253956]"
                  href="/"
                  >Home Page</Link>
              </li>
              {user?._id && <li className="">
                <Link
                  className="py-4 px-6 border-r-[1px] border-[#637599] inline-block text-[#EFEFEF] text-sm font-semibold hover:bg-[#EFEFEF] hover:text-[#253956]"
                  href="/request-visa-c"
                  >Visa C</Link>
              </li>}
              { user?._id &&  <li className="">
                <Link href="/request-visa-d"
                  className="py-4 px-6 border-r-[1px] border-[#637599] inline-block text-[#EFEFEF] text-sm font-semibold hover:bg-[#EFEFEF] hover:text-[#253956]"
                  >Visa D</Link>
              </li>}
              
              { user?._id &&  <li className="">
                <Link href="/myrequests"
                  className="py-4 px-6 border-r-[1px] border-[#637599] inline-block text-[#EFEFEF] text-sm font-semibold hover:bg-[#EFEFEF] hover:text-[#253956]"
                  >My requests</Link>
              </li>}
              
            </ul>
            <div className="flex items-center space-x-2 text-white text-xs">
              <a href="#">ЋИР</a>
              <a href="#">LAT</a>
              <a href="#">ENG</a>
              <img className="w-6 cursor-pointer" src="./images/global-icon.png" alt="Global Icon" />
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div className="bg-white">
      {/* Header */}
      <section className="pt-10 pb-12 sm:pb-28">
        <div className="sm:container mx-auto">
          <h2 className="text-[36px] font-bold sm:text-[48px] text-[#253956] sm:font-extrabold pb-16 text-center">
            Application for Visa Type D
          </h2>

          {/* Status/Progress Bar */}
          <div className="max-w-2xl mx-auto p-6">
            <div className="relative flex items-center mb-6">
              {/* Progress Bar */}
              <div className="absolute top-3 left-0 w-full h-1 bg-[#4A90E2]">
                <div
                  className="h-1 bg-[#4A90E2] transition-all duration-300"
                  style={{
                    width: `${(currentStep / (statuses.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Steps */}
              <div className="flex justify-between w-full text-center">
                {statuses.map((status, index) => (
                  <div
                    key={status.id}
                    className={`relative z-10 w-[30px] h-[30px] rounded-full flex items-center justify-center border-4 ${
                      index <= currentStep
                        ? "border-[#4A90E2] bg-[#4A90E2]"
                        : "border-[#4A90E2]  bg-white"
                    }`}
                  >
                    <div className="hidden sm:block absolute w-16 -top-10 text-[#A0A0A0] font-medium text-[12px]">
                      Step {index + 1}
                    </div>
                    <div className="block sm:hidden absolute w-16 -top-10 text-[#A0A0A0] font-medium text-[12px]">
                      {index + 1}
                    </div>
                    <div className={`hidden sm:block absolute w-24 top-10 text-[14px] ${index <= currentStep ? "text-[#253956]" : "text-[#A0A0A0]"}  font-medium`}>
                      {status.heading}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-28">
        <div className="sm:container mx-auto px-4 sm:px-0">
          <div
            id="content"
          >
            {statuses[currentStep].html}
          </div>

          {/* Navigation Buttons */}
          <div className="pt-32">
            <label className="block text-sm text-[#253956] pb-6">
              All fields marked with * are mandatory
            </label>
            <div className="flex justify-between">
              <button
                onClick={() => updateStatusBar(currentStep - 1)}
                className={`py-3 px-5 text-sm font-semibold text-white rounded-md ${
                  currentStep === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#172439]"
                }`}
                disabled={currentStep === 0}
              >
                Previous step
              </button>
              <button
                onClick={() => updateStatusBar(currentStep + 1)}
                className={`py-3 px-5 text-sm font-semibold text-white rounded-md ${
                  currentStep === statuses.length - 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#172439]"
                }`}
                disabled={currentStep === statuses.length - 1}
              >
                Next step
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* top to page */}
    <section className="bg-[#253956]">
      <div className="container mx-auto">
        <div className="flex items-center justify-end">
          <button
            className="inline-block text-[13px] text-[#4A90E2] border-t-4 border-t-[#4A90E2] font-semibold py-2"
          >
            Top of the page
            <span className="font-normal"
              ><i className="fa-sharp fa-solid fa-arrow-up"></i
            ></span>
          </button>
        </div>
      </div>
    </section>

      {/* Footer */}
    <footer className="bg-white py-3">
        <div className="container mx-auto">
          <div className="block sm:flex space-x-5 sm:w-[500px]">
            <div>
              <img className="w-10 mx-auto" src="./images/footer-logo.png" alt="Footer Logo" />
            </div>
            <div className="pt-5 space-y-5">
              <div>
                <h3 className="text-2xl sm:font-semibold font-extrabold text-[#253956] text-center sm:text-left">
                  Welcometoserbia.gov.rs
                </h3>
                <h6 className="text-sm font-semibold text-[#4f4f4f] text-center sm:text-left">
                  Welcome to Serbia
                </h6>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs font-semibold leading-5 hidden sm:block">
                  The Website is licensed under a{" "}
                  <a
                    href="https://creativecommons.org/licenses/by-nc-nd/3.0/rs/deed.en"
                    target="_blank"
                    className=" text-[#253956] border-b border-[#253956] font-medium"
                  >
                    Creative Commons
                  </a>{" "}
                  Attribution-NonCommercial-No Derivs 3.0 Serbia License.
                </p>
                <p>
                  <a className="text-[#007BFF] hover:underline" href="#">
                    Privacy Policy and Terms of Use
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default VisaD;
