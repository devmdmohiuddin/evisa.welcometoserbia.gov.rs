"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
     const { register, handleSubmit, formState: { errors }, reset} = useForm();
        const submitHandler = async (data) => {
            try {
                const response = await fetch("/api/auth/login", {
                  method: "POST",
                  body: JSON.stringify(data),
                });
          
                reset();
          
                if (response.ok) {
                const data = await response.json();

                localStorage.setItem("user", JSON.stringify(data.user))
                  console.log("User successfully login!");
                  router.push('/')
                } else {
                  console.error("Something went wrong to login user.");
                }
              } catch (error) {
                console.error("Error occurred", error.message);
              }
        }


    return (
        <>
            {/* Header Section */}
            <header className="bg-white">
                <div className="bg-[#253956] sm:block hidden">
                    <div className="container mx-auto">
                        <div className="relative group w-[130px] ml-auto text-center">
                            <a
                                className="px-5 py-2 inline-block text-[14px] font-medium text-white hover:bg-[#D2E7FF] hover:text-[#253956]"
                                href="#"
                            >
                                <span>Language</span>
                                <span><i className="fa-solid fa-angle-down"></i></span>
                            </a>
                            <ul className="bg-[#D2E7FF] absolute top-[37px] right-0 w-full text-[14px] hidden group-hover:block">
                                <li>
                                    <a className="py-2 block hover:bg-[#253956] hover:text-white text-[#253956] font-medium" href="#">Ћирилица</a>
                                </li>
                                <li>
                                    <a className="py-2 block hover:bg-[#253956] hover:text-white text-[#253956] font-medium" href="#">Latinica</a>
                                </li>
                                <li>
                                    <a className="py-2 block hover:bg-[#253956] hover:text-white text-[#253956] font-medium" href="#">English</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-b-[1px] border-[#EEEEEE] py-1">
                    <div className="sm:container mx-auto flex items-center space-x-3 p-3 sm:px-0">
                        <img className="sm:w-12 w-10" src="./images/e-icon.png" alt="Icon" />
                        <div>
                            <h3 className="text-[20] sm:text-[28px] font-bold text-[#23527c]">elD.gov.rs</h3>
                            <h4 className="text-[#23527C] font-normal sm:text-[22px] text-[17px]">Electronic identification portal</h4>
                        </div>
                    </div>
                </div>

                <div className="border-b-[2px] border-[#CCCCCC] hidden sm:block">
                    <div className="container mx-auto">
                        <ul className="flex items-center">
                            {['eID', 'Signature in the cloud', 'Help', 'Contact', 'EGovernment portal', 'Back'].map((item, index) => (
                                <li key={index}>
                                    <a className="p-5 hover:bg-[#D2E7FF] inline-block text-[#23527C] font-medium" href="#">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>

            {/* Login Heading */}
            <section className="bg-[#EEEEEE]">
                <div className="sm:container mx-auto py-3">
                    <h2 className="text-[24px] sm:text-[32px] text-[#253965] font-medium px-3 sm:px-0">Login</h2>
                </div>
            </section>

            {/* Login Section */}
            <section className="my-6">
                <div className="sm:container mx-auto px-3 sm:px-0">
                    <ul className="flex">
                        {[
                            { icon: './images/user-icon.svg', label: 'Username and Password', active: true },
                            { icon: './images/icon-certificate.svg', label: 'Qualified electronic certificate' },
                            { icon: './images/icon-mobile.svg', label: 'Mobile application' },
                        ].map((item, index) => (
                            <li
                                key={index}
                                className={`flex-1 flex items-center justify-center space-x-4 border-[1px] border-[#253965] p-3 hover:cursor-pointer ${item.active ? 'bg-[#253965] text-white' : 'text-[#253965]'}`}
                            >
                                <img src={item.icon} alt={item.label} />
                                <span className={`hidden sm:block font-medium text-sm ${item.active ? 'text-white' : 'text-[#253965]'}`}>{item.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-[#F3F9FF] text-center space-y-10 py-6">
                        <div className="space-y-3">
                            <img className="inline-block" src="./images/icon-user-lg.svg" alt="Icon User" />
                            <p className="text-[#253965] font-medium text-sm">
                                Login with a username and password is a basic security login.
                                <a className="font-bold underline" href="#"> Find out more.</a>
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(submitHandler)} className="sm:w-[500px] mx-auto space-y-3 text-left">
                            <div>
                                <label className="font-bold text-[#253965] text-[14px]" htmlFor="username">Username:</label>
                                <p className="font-medium text-[#253965] text-[13px]">(Email address used for registration)</p>
                                <input
                                    id="username"
                                    className="w-full border-[1px] border-[#253965] bg-white p-3 focus:outline-none font-medium text-[#253965]"
                                    type="email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                            <small className="text-red-500">
                            Email is Required.
                            </small>
                        )}
                            </div>
                            <div>
                                <label className="font-bold text-[#253965] text-[14px]" htmlFor="password">Password:</label>
                                <input
                                    id="password"
                                    className="w-full border-[1px] border-[#253965] bg-white p-3 focus:outline-none font-medium text-[#253965]"
                                    type="password"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && (
                            <small className="text-red-500">
                            Password is Required.
                            </small>
                        )}
                            </div>
                            <div className="pt-6">
                                <button className="w-full p-3 bg-[#017932] flex items-center justify-center space-x-3">
                                    <img className="bg-white p-1 rounded-full" src="./images/icon-signin.svg" alt="Sign In" />
                                    <span className="text-[18px] font-bold text-white">Sign in</span>
                                </button>
                            </div>
                            <a className="font-bold underline text-[#253965] text-[14px]" href="#">Password forgotten</a>
                        </form>

                        <div>
                            <p className="text-[#253965] font-medium text-sm">
                                Don’t have an account at eid.gov.rs? Register
                                <a className="font-bold underline" href="#"> here.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Top Section */}
            <section className="bg-[#253956]">
                <div className="sm:container mx-auto flex items-center justify-end px-3 sm:px-0">
                    <button className="inline-block text-[13px] text-[#4A90E2] border-t-4 border-t-[#4A90E2] font-semibold py-2">
                        Top of the page
                        <span className="font-normal"><i className="fa-sharp fa-solid fa-arrow-up"></i></span>
                    </button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-white pb-3">
                <div className="container mx-auto flex space-x-5">
                    <img className="w-16 object-contain" src="./images/footer-logo.png" alt="Footer Logo" />
                    <div className="pt-5 space-y-5">
                        <div>
                            <h3 className="text-[26px] font-bold text-[#253956]">eid.gov.rs</h3>
                            <h6 className="text-sm font-semibold text-[#4f4f4f]">Electronic identification portal</h6>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[#A0A0A0] text-xs font-semibold leading-5 hidden sm:block">
                                The website is licensed under the terms of the license Creative Commons Attribution – Non Commercial – No Derivatives 3.0 Serbia. Web project
                                <a
                                    href="https://evisa.welcometoserbia.gov.rs/"
                                    target="_blank"
                                    className="font-semibold text-[#253956] border-b-[1px] border-b-[#253956]"
                                > ite.gov.rs</a>
                            </p>
                            <p className="text-xs pt-1">
                                <a className="text-[#A0A0A0] hover:text-[#000] hover:bg-[#EEEEEE] py-1 px-2 font-medium" href="#">Terms of use</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default LoginPage;
