"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MyRequest() {
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

  return (
    <>
    {/* header section */}
      <header className="bg-[#253956]">
      <nav className="">
        <div className="border-b-2">
          <div className="container mx-auto flex justify-between">
            <div className="flex items-center border-r-2">
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
            <div>
              {
                user?._id ? <div className="relative">
                <button className="flex items-center space-x-2 cursor-pointer bg-white p-6" onClick={() => setShow(!show)}>
                <span className="font-light uppercase text-[14px] text-[#253956]">{user.firstName} {user.lastName} </span>
                <img className="w-8" src="./images/user.png"/>
                </button>
                {show && <button className="absolute flex items-center space-x-2 bg-white p-1 w-full border-t-[2px] border-[#253956]" onClick={handleLogout}>
                  <img src="./images/logout.png" alt="Logout" />
                  <span className="text-[#253956] font-semibold">Log out</span>
                </button>}
              </div> :  <Link href="/login"
                className="inline-block text-[#007bff] hover:text-[#0056b3] hover:underline transition-none delay-100 bg-white py-[27px] px-12"
              >
                Log in
              </Link>
              }
            </div>
          </div>
        </div>
        <div className="container mx-auto">
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
                  href="request-visa-c"
                  >Visa C</Link>
              </li>}
              { user?._id &&  <li className="">
                <Link
                  className="py-4 px-6 border-r-[1px] border-[#637599] inline-block text-[#EFEFEF] text-sm font-semibold hover:bg-[#EFEFEF] hover:text-[#253956]"
                  href="/request-visa-d"
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
    {/* request section */}
    <section className="bg-white pt-10 pb-28">
        <div className="container mx-auto">
            <h2 className="text-[48px] text-[#253956] font-semibold pb-16 text-center">List of previously sent requests</h2>
            <div className="border-y-[1px] border-[#BBBBBB]">
                <ul>
                    <li className="grid grid-cols-9">
                        <div className="p-5">
                            <div className="pb-6">
                                <p className="text-[14px] text-[#A0A0A0]">Request number</p>
                                <p className="text-[#253956] font-semibold">{user?.requestNum}</p>
                            </div>
                            <div className="pb-6">
                                <p className="text-[14px] text-[#A0A0A0]">Visa request ID</p>
                                <p className="text-[#253956] font-semibold">{user?.visaReqId}</p>
                            </div>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Foreign citizen's registration number</p>
                            <p className="text-[#253956] font-semibold">{user?.foreignRegNum || "/"}</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">First and last name</p>
                            <p className="uppercase text-[#253956] font-semibold">{user?.firstName} {user?.lastName}</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">The representative office where the request was submitted</p>
                            <p className="uppercase text-[#253956] font-semibold">
                              {/* {user?.diplomaticAndConsular} */} NEW <br/> DELHI
                              </p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Status</p>
                            <p className={`${user?.status === "Rejected" ? "bg-[#FF0000]" : "bg-[#4A90E2]"} p-1 text-white text-[14px]`}>{user?.status}</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Comment</p>
                            <p className="uppercase text-[#253956] font-semibold">
                                    {/* {user?.comment} */}/
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Attachment</p>
                            <p className="text-[#253956] font-semibold">/</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Visa</p>
                            <p className="text-[#253956] font-semibold">Visa D</p>
                        </div>
                        <div className="flex items-center justify-center p-5">
                            <button className="py-1 px-4 rounded-md text-[14px] font-semibold text-white bg-[#253956] hover:bg-[#172439] hover:underline hover:decoration-[#007bff]">Open Request</button>
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div className="border-y-[1px] border-[#BBBBBB]">
                <ul>
                    <li className="grid grid-cols-9">
                        <div className="p-5">
                            <div className="pb-6">
                                <p className="text-[14px] text-[#A0A0A0]">Request number</p>
                                <p className="text-[#253956] font-semibold">/</p>
                            </div>
                            <div className="pb-6">
                                <p className="text-[14px] text-[#A0A0A0]">Visa request ID</p>
                                <p className="text-[#253956] font-semibold">/</p>
                            </div>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Foreign citizen's registration number</p>
                            <p className="text-[#253956] font-semibold">/</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">First and last name</p>
                            <p className="uppercase text-[#253956] font-semibold">{user?.firstName} {user?.lastName}</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">The representative office where the request was submitted</p>
                            <p className="uppercase text-[#253956] font-semibold">/</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Status</p>
                            <p className="bg-[#E5BF3A] p-1 text-white text-[14px]">Draft <br /> request</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Comment</p>
                            <p className="uppercase text-[#253956] font-semibold">
                                /
                            </p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Attachment</p>
                            <p className="text-[#253956] font-semibold">/</p>
                        </div>
                        <div className="p-5">
                            <p className="text-[14px] text-[#A0A0A0]">Visa</p>
                            <p className="text-[#253956] font-semibold">/</p>
                        </div>
                        <div className="flex items-center justify-center p-5">
                            <button className="py-1 px-4 rounded-md text-[14px] font-semibold text-white bg-[#253956] hover:bg-[#172439] hover:underline hover:decoration-[#007bff]">Open Request</button>
                        </div>
                    </li>
                </ul>
            </div> */}
        </div>
    </section>
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
    {/* footer */}
    <footer className="bg-white py-3">
      <div className="container mx-auto">
        <div className="flex space-x-5 w-[500px]">
          <div>
            <img src="./images/footer-logo.png" alt="Footer Logo" />
          </div>
          <div className="pt-5 space-y-5">
            <div>
              <h3 className="text-[26px] font-semibold text-[#253956]">
                Welcometoserbia.gov.rs
              </h3>
              <h6 className="text-sm font-semibold text-[#4f4f4f]">
                Welcome to Serbia
              </h6>
            </div>
            <div className="space-y-1">
              <p className="text-[#A0A0A0] text-xs font-semibold leading-5">
                The Website is licensed under a
                <a
                  href="https://creativecommons.org/licenses/by-nc-nd/3.0/rs/deed.en"
                  target="_blank"
                  className="font-semibold text-[#253956] border-b-[1px] border-b-[#253956] font-medium"
                  >Creative Commons</a
                >
                Attribution-NonCommercial-No Derivs 3.0 Serbia License. Web
                project
                <a
                  href="https://evisa.welcometoserbia.gov.rs/"
                  target="_blank"
                  className="font-semibold text-[#253956] border-b-[1px] border-b-[#253956] font-medium"
                  >ite.gov.rs</a
                >
              </p>
              <p>
                <a className="text-[#007BFF] hover:underline" href="#"
                  >Privacy Plicy and terms of Use</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};