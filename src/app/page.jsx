"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
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
                <span className="uppercase text-[12px] text-[#253956] hidden sm:block">{user.firstName} {user.lastName} </span>
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
    {user?.role === "admin" && <section>
      <div className="container mx-auto py-3">
        <Link href="/admin/users">Dashboard</Link>
      </div>
    </section>}
    {/* welcome to eService */}
    <section className="cus-bg">
      <div className="sm:container mx-auto">
        <div className="sm:w-[850px] mx-auto text-center py-32 space-y-4 px-4">
          <h1 className="text-[36px] sm:text-[48px] text-white font-semibold">
            Welcome to <br className="block sm:hidden" /> eServices
          </h1>
          <p className="text-white font-semibold">
            Here you can use electronic services of diplomatic and consular
            offices and other competent authorities of the Republic of Serbia.
          </p>
        </div>
      </div>
    </section>
    {/* e services */}
    <section className="sm:py-16 pt-0 pb-16">
      <div className="sm:container mx-auto">
        <div className="sm:w-[850px] mx-auto sm:grid grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-[32px] text-[#253956] font-semibold pl-12 sm:pl-0">
              All eServices <br />
              in one place
            </h2>
          </div>
          <div className="col-span-3 space-y-10 pt-24 sm:pt-0">
            {
              !user?._id && (
                <div className="space-y-8 border-l-[10px] border-[#CDD7E7] pl-[40px]">
              <h3 className="text-[28px] font-semibold text-[#253956]">
                For foreign citizens
              </h3>
              <p className="text-[#253956]">
                Apply for visa C, visa D or temporary residence approval in
                Republic of Serbia.
              </p>
              <p className="text-[#253956]">
                List of available services will be presented after you login.
              </p>
              <div className="space-x-10">
                <Link href="/login"
                  className="inline-block py-3 px-5 rounded-md text-[14px] font-semibold text-white bg-[#253956] hover:bg-[#172439] hover:underline hover:decoration-[#007bff]"
                >
                  Login
                </Link>
                <button className="text-[#4A90E2] font-semibold underline">
                  Register an account
                </button>
              </div>
            </div>
              )
            }
            
            {
              !user?._id && (
                <div className="space-y-8 border-l-[10px] border-[#4A90E2] pl-[40px]">
              <h3 className="text-[28px] font-semibold text-[#253956] leading-8">
                For companies in Republic of Serbia
              </h3>
              <p className="text-[#253956]">
                Apply if you wish to employe one or more foreign citizens.
              </p>
              <p className="text-[#253956]">
                eServices available for companies are group visa D and group
                temporary residence,
              </p>
              <p className="text-[#253956]">
                and unified permit for temporary residence and work.
              </p>
              <p className="text-[#253956]">
                To access eServices register on eGovernment Portal.
              </p>
              <div>
                <button
                  className="py-3 px-5 rounded-md text-[14px] font-semibold text-white bg-[#4A90E2] hover:bg-[#3F7DC4] hover:underline hover:decoration-[#253956]"
                >
                  Open eGovernment Portal
                </button>
              </div>
            </div>
              )
            }
            
          
            {
              user?._id && (
                <div className="space-y-8 border-l-[10px] border-[#4A90E2] pl-[40px]">
              <div className="space-y-8 border-b-[1px] border-[#BBBBBB] pb-8">
                <h3 className="text-[28px] font-semibold text-[#253956] leading-8">
                  Visa C
                </h3>
                <p className="text-[#253956]">
                  A short-stay visa C is a permit issued to a foreigner for entry, transit and short-term stay on the territory of the Republic of Serbia for up to 90 days.
                </p>
                <div>
                  <Link href="/request-visa-c"
                    className="inline-block py-3 px-5 rounded-md text-[14px] font-semibold text-white bg-[#253956] hover:bg-[#172439] hover:underline hover:decoration-[#007bff]"
                  >
                    Start application
                  </Link>
                </div>
              </div>
              <div className="space-y-8 border-b-[1px] border-[#BBBBBB] pb-8">
                <h3 className="text-[28px] font-semibold text-[#253956] leading-8">
                  Visa D
                </h3>
                <p className="text-[#253956]">
                  Visa D for a long stay is a permit issued to a foreigner for entry and stay, and work in case when the visa is issued on the basis of employment, in the territory of the Republic of Serbia for a period of 90 to 180 days.
                </p>
                <div>
                  <Link href="/request-visa-d"
                    className="inline-block py-3 px-5 rounded-md text-[14px] font-semibold text-white bg-[#253956] hover:bg-[#172439] hover:underline hover:decoration-[#007bff]"
                  >
                    Start application
                  </Link>
                </div>
              </div>
            </div>
              )
            }
            
            <div>

            </div>
          </div>


        </div>
      </div>
    </section>
    {/* service looking for */}
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="sm:w-[850px] mx-auto sm:grid grid-cols-2 bg-[#E5BF3A] rounded-md">
          <div className="pb-6">
            <img src="./images/globe.png" alt="Globe" />
          </div>
          <div className="p-5 flex items-center justify-center">
            <div className="space-y-4">
              <h3 className="text-[28px] font-semibold text-[#253956] leading-8">
                Did you find the service you are looking for?
              </h3>
              <p className="text-white">
                Learn more about the visa regime. Find more information,
                instructions and documentation needed on Entry & Stay
                Regulations.
              </p>
              <button
                className="text-white font-semibold text-sm border-[1px] w-full sm:w-64 border-white bg-[#253956] rounded-md py-3 px-5 decoration-[#0056b3] hover:underline hover:bg-[#172439]"
              >
                Entry & Stay Regulations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* support */}
    <section className="bg-[#CDD7E7] py-16">
      <div className="sm:container mx-auto px-6 sm:px-0">
        <div className="sm:flex justify-between sm:space-x-20 sm:w-[700px] mx-auto">
          <div className="space-y-2">
            <h3 className="text-[22px] sm:text-[28px] text-left font-semibold text-[#4A90E2]">
              Support
            </h3>
            <div className="flex items-center sm:justify-center">
              <img className="sm:w-20 w-16" src="./images/envelope.png" alt="Envelope" />
            </div>
          </div>
          <div className="space-y-6 pt-8 sm:pt-0">
            <p className="font-medium text-[#253956]">
              If you have additional questions about the visa regime, permits
              and electronic services, please contact us:
            </p>
            <button
              className="py-3 px-5 rounded-md text-[14px] font-semibold text-white bg-[#253956] hover:bg-[#172439] hover:underline hover:decoration-[#007bff]"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* top to page */}
    <section className="bg-[#253956]">
      <div className="sm:container mx-auto px-3 sm:px-0">
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