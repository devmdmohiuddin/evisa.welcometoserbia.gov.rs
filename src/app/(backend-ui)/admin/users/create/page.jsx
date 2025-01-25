"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

const CreateUser = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const submitHandler = async (data) => {
        try {
            const response = await fetch("/api/auth/users", {
              method: "POST",
              body: JSON.stringify(data),
            });

            console.log(data);
      
            reset();
      
            if (response.ok) {
              toast.success("User successfully created!");
            } else {
              toast.error("Something went wrong to create user.");
            }
          } catch (error) {
            toast.error("Error occurred", error.message);
          }
    }

    return (
        <>
        <header className="bg-[#555] text-white p-5">
            <ul className="flex space-x-3">
                <li><Link href="/">Back to Homepage</Link></li>
                <li><Link href="/admin/users/create">Create User</Link></li>
                <li><Link href="/admin/users">All Users</Link></li>
            </ul>
        </header>
        <section className="py-12">
            <div className="sm:container mx-auto px-3 sm:px-0">
            <ToastContainer position="bottom-right" />
                <form onSubmit={handleSubmit(submitHandler)} className="sm:grid grid-cols-2 gap-6 space-y-3 sm:space-y-0">
                    <h3 className="text-xl font-semibold col-span-2">Personal Information</h3>
                    {/* first name */}
                    <div className="space-y-1">
                        <label
                            htmlFor="firstName"
                            className="text-base block"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.firstName
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("firstName", { required: true })}
                        />
                        {errors.firstName && (
                            <small className="text-red-500">
                            First name is required.
                            </small>
                        )}
                    </div>
                    {/* last name */}
                    <div className="space-y-1">
                        <label
                            htmlFor="lastName"
                            className="text-base block"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.lastName
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("lastName", { required: true })}
                        />
                        {errors.lastName && (
                            <small className="text-red-500">
                            Last name is required.
                            </small>
                        )}
                    </div>
                    {/* email */}
                    <div className="space-y-1">
                        <label
                            htmlFor="email"
                            className="text-base block"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.email
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <small className="text-red-500">
                            Email is required.
                            </small>
                        )}
                    </div>
                    {/* password */}
                    <div className="space-y-1">
                        <label
                            htmlFor="password"
                            className="text-base block"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.email
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <small className="text-red-500">
                            Password is required.
                            </small>
                        )}
                    </div>
                    {/* role */}
                    <div className="space-y-1">
                        <label
                            htmlFor="role"
                            className="text-base block"
                        >
                            Role
                        </label>
                        <select name="role" id="role" className={`w-full border-2 rounded-md p-3 ${
                            errors.role
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("role", { required: true })}>
                            <option value="">--Select role--</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        {errors.role && (
                            <small className="text-red-500">
                            Role is required.
                            </small>
                        )}
                    </div>
                    {/* travel purpose */}
                    <div className="space-y-1">
                        <label
                            htmlFor="travelPurpose"
                            className="text-base block"
                        >
                            Travel Purpose
                        </label>
                        <select name="travelPurpose" id="travelPurpose" className={`w-full border-2 rounded-md p-3 ${
                            errors.travelPurpose
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("travelPurpose", { required: true })}>
                            <option value="">--Select travel purpose--</option>
                            <option value="Employment">Employment</option>
                            <option value="School/studying">School/studying</option>
                            <option value="Family reunion">Family reunion</option>
                            <option value="Religious service">Religious service</option>
                            <option value="Treatment for medical care">Treatment for medical care</option>
                            <option value="Ownership of real estate">Ownership of real estate</option>
                            <option value="Investor">Investor</option>
                            <option value="Other">Other</option>
                            <option value="International exchange of pupils and students">International exchange of pupils and students</option>
                            <option value="Scientific research work">Scientific research work</option>
                            <option value="Professional practice, specialization">Professional practice, specialization</option>
                            <option value="Seasonal jobs">Seasonal jobs</option>
                        </select>
                        {errors.travelPurpose && (
                            <small className="text-red-500">
                            Travel Purpose is required.
                            </small>
                        )}
                    </div>
                    {/* last name at birth */}
                    <div className="space-y-1">
                        <label
                            htmlFor="lastNameAtBirth"
                            className="text-base block"
                        >
                            Last Name at Birth
                        </label>
                        <input
                            type="text"
                            id="lastNameAtBirth"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.lastNameAtBirth
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("lastNameAtBirth")}
                        />
                    </div>
                    {/* gender */}
                    <div className="space-y-1">
                        <label
                            htmlFor="gender"
                            className="text-base block"
                        >
                            Gender
                        </label>
                        <select name="gender" id="gender" className={`w-full border-2 rounded-md p-3 ${
                            errors.gender
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("gender", { required: true })}>
                                <option value="">--Select Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                        </select>
                        {errors.gender && (
                            <small className="text-red-500">
                            Gender is required.
                            </small>
                        )}
                    </div>
                    {/* date of birth */}
                    <div className="space-y-1">
                        <label
                            htmlFor="dateOfBirth"
                            className="text-base block"
                        >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.dateOfBirth
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("dateOfBirth", { required: true })}
                        />
                        {errors.dateOfBirth && (
                            <small className="text-red-500">
                            Date of Birth is required.
                            </small>
                        )}
                    </div>
                    {/* country of birth */}
                    <div className="space-y-1">
                        <label
                            htmlFor="countryOfBirth"
                            className="text-base block"
                        >
                            Country of Birth
                        </label>
                        <select name="countryOfBirth" id="countryOfBirth" className={`w-full border-2 rounded-md p-3 ${
                            errors.countryOfBirth
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("countryOfBirth", { required: true })}>
                        <option value="">--Select country of birth--</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Brunei Darussalam">Brunei Darussalam</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Central African Republic">Central African Republic</option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China, People's Republic of</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Ivoire">Côte d'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">Dominican Republic</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Vatican City State">Holy See (Vatican City State)</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong Special Administrative Region of the People's Republic of China</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                        </select>
                        {errors.countryOfBirth && (
                            <small className="text-red-500">
                            Country of Birth is required.
                            </small>
                        )}
                    </div>
                    {/* place of birth */}
                    <div className="space-y-1">
                        <label
                            htmlFor="placeOfBirth"
                            className="text-base block"
                        >
                            Place of Birth
                        </label>
                        <input
                            type="text"
                            id="placeOfBirth"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.placeOfBirth
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("placeOfBirth")}
                        />

                        {errors.placeOfBirth && (
                            <small className="text-red-500">
                            Place of Birth is required.
                            </small>
                        )}
                    </div>
                    {/* address */}
                    <div className="space-y-1">
                        <label
                            htmlFor="address"
                            className="text-base block"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.address
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("address", { required: true })}
                        />
                        {errors.address && (
                            <small className="text-red-500">
                            Address is required.
                            </small>
                        )}
                    </div>
                    {/* telephone */}
                    <div className="space-y-1">
                        <label
                            htmlFor="telephone"
                            className="text-base block"
                        >
                            Telephone
                        </label>
                        <input
                            type="text"
                            id="telephone"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.telephone
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("telephone", { required: true })}
                        />
                        {errors.telephone && (
                            <small className="text-red-500">
                            Telephone is required.
                            </small>
                        )}
                    </div>
                    {/* issuing country */}
                    <div className="space-y-1">
                        <label
                            htmlFor="issuingCountry"
                            className="text-base block"
                        >
                            Issuing Country
                        </label>
                        <select name="issuingCountry" id="issuingCountry" className={`w-full border-2 rounded-md p-3 ${
                            errors.issuingCountry
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("issuingCountry", { required: true })}>
                        <option value="">--Select country of birth--</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Brunei Darussalam">Brunei Darussalam</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Central African Republic">Central African Republic</option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China, People's Republic of</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Ivoire">Côte d'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">Dominican Republic</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Vatican City State">Holy See (Vatican City State)</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong Special Administrative Region of the People's Republic of China</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                        </select>
                        {errors.issuingCountry && (
                            <small className="text-red-500">
                            Issuing Country is required.
                            </small>
                        )}
                    </div>
                    {/* citizenship country */}
                    <div className="space-y-1">
                        <label
                            htmlFor="citizenship"
                            className="text-base block"
                        >
                            Citizenship Country
                        </label>
                        <select name="citizenship" id="citizenship" className={`w-full border-2 rounded-md p-3 ${
                            errors.citizenship
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("citizenship", { required: true })}>
                        <option value="">--Select citizenship country--</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Brunei Darussalam">Brunei Darussalam</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Central African Republic">Central African Republic</option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China, People's Republic of</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Ivoire">Côte d'Ivoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">Dominican Republic</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Greece">Greece</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Vatican City State">Holy See (Vatican City State)</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong Special Administrative Region of the People's Republic of China</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                        </select>
                        {errors.citizenship && (
                            <small className="text-red-500">
                            Citizenship Country is required.
                            </small>
                        )}
                    </div>
                    {/* marital status */}
                    <div className="space-y-1">
                        <label
                            htmlFor="maritalStatus"
                            className="text-base block"
                        >
                            Marital Status
                        </label>
                        <select name="maritalStatus" id="maritalStatus" className={`w-full border-2 rounded-md p-3 ${
                            errors.maritalStatus
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("maritalStatus", { required: true })}>
                        <option value="">Select marital status</option>
                          <option value="Single" selected>Single</option>
                          <option value="Married">Married</option>
                          <option value="Separated">Separated</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowded">Widowded</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.maritalStatus && (
                            <small className="text-red-500">
                            Marital Status is required.
                            </small>
                        )}
                    </div>
                    {/* father name */}
                    <div className="space-y-1">
                        <label
                            htmlFor="fatherName"
                            className="text-base block"
                        >
                            Father name
                        </label>
                        <input
                            type="text"
                            id="fatherName"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.fatherName
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("fatherName")}
                        />
                    </div>
                    {/* mother name */}
                    <div className="space-y-1">
                        <label
                            htmlFor="motherName"
                            className="text-base block"
                        >
                            Mother name
                        </label>
                        <input
                            type="text"
                            id="motherName"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.motherName
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("motherName")}
                        />
                    </div>
                    <h3 className="text-xl font-semibold col-span-2">My Requests</h3>
                    {/* request number */}
                    <div className="space-y-1">
                        <label
                            htmlFor="requestNum"
                            className="text-base block"
                        >
                            Request Number
                        </label>
                        <input
                            type="text"
                            id="requestNum"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.requestNum
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("requestNum", { required: true })}
                        />
                        {errors.requestNum && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* visa request id */}
                    <div className="space-y-1">
                        <label
                            htmlFor="visaReqId"
                            className="text-base block"
                        >
                            Visa Request Id
                        </label>
                        <input
                            type="text"
                            id="visaReqId"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.visaReqId
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("visaReqId", { required: true })}
                        />
                        {errors.visaReqId && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* foreign registration number */}
                    <div className="space-y-1">
                        <label
                            htmlFor="foreignRegNum"
                            className="text-base block"
                        >
                            Foreign Registration Number
                        </label>
                        <input
                            type="text"
                            id="foreignRegNum"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.foreignRegNum
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("foreignRegNum", { required: true })}
                        />
                        {errors.foreignRegNum && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* status */}
                    <div className="space-y-1">
                        <label
                            htmlFor="status"
                            className="text-base block"
                        >
                            Status
                        </label>

                        <select name="status" id="status" className={`w-full border-2 rounded-md p-3 ${
                            errors.status
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("status", { required: true })}>
                        <option value="">Select status</option>
                          <option value="Draft request">Draft request</option>
                          <option value="Request submitted">Request submitted</option>
                          <option value="Request process">Request process</option>
                          <option value="Request updated">Request updated</option>
                          <option value="Request approved">Request approved</option>
                          <option value="Request refused">Request refused</option>
                        </select>
                        {errors.status && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* comment */}
                    <div className="space-y-1">
                        <label
                            htmlFor="comment"
                            className="text-base block"
                        >
                            comment
                        </label>
                        <input
                            type="text"
                            id="comment"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.comment
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("comment", { required: true })}
                        />
                        {errors.comment && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    <h3 className="text-xl font-semibold col-span-2">Employment information</h3>
                    {/* current profession */}
                    <div className="space-y-1">
                        <label
                            htmlFor="currentProfession"
                            className="text-base block"
                        >
                            Current Profession
                        </label>
                        <input
                            type="text"
                            id="currentProfession"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.currentProfession
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("currentProfession")}
                        />
                    </div>
                    {/* employer company */}
                    <div className="space-y-1">
                        <label
                            htmlFor="employerCompany"
                            className="text-base block"
                        >
                            Employer's Company
                        </label>
                        <input
                            type="text"
                            id="employerCompany"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.employerCompany
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("employerCompany")}
                        />
                    </div>
                    {/* employer address */}
                    <div className="space-y-1">
                        <label
                            htmlFor="employerAddress"
                            className="text-base block"
                        >
                            Employer's Address
                        </label>
                        <input
                            type="text"
                            id="employerAddress"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.employerAddress
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("employerAddress")}
                        />
                    </div>
                    {/* employer telephone */}
                    <div className="space-y-1">
                        <label
                            htmlFor="employerTelephone"
                            className="text-base block"
                        >
                            Employer's Telephone
                        </label>
                        <input
                            type="text"
                            id="employerTelephone"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.employerTelephone
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("employerTelephone")}
                        />
                    </div>
                    <h3 className="col-span-2 text-xl font-semibold">Information about travel documents</h3>
                    {/* type of travel document */}
                    <div className="space-y-1">
                        <label
                            htmlFor="typeOfTravelDoc"
                            className="text-base block"
                        >
                            Type of travel document
                        </label>
                        <select name="typeOfTravelDoc" id="typeOfTravelDoc" className={`w-full border-2 rounded-md p-3 ${
                            errors.typeOfTravelDoc
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("typeOfTravelDoc")}>
                            <option value="">Select type of travel document</option>
                            <option value="National Passport">National Passport</option>
                            <option value="Diplomatic passport">Diplomatic passport</option>
                            <option value="Official Passport">Official Passport</option>
                            <option value="Passport for refugees and stateless persons">Passport for refugees and stateless persons</option>
                            <option value="Passport for aliens">Passport for aliens</option>
                            <option value="Seamen's document">Seamen's document</option>
                            <option value="Other travel document">Other travel document</option>
                            <option value="Laissez-passer UN">Laissez-passer UN</option>
                            <option value="Laissez-passer EU">Laissez-passer EU</option>
                        </select>
                        {errors.typeOfTravelDoc && (
                            <small className="text-red-500">
                            Type of travel document is required.
                            </small>
                        )}
                    </div>
                    {/* travel document number */}
                    <div className="space-y-1">
                        <label
                            htmlFor="travelDocNum"
                            className="text-base block"
                        >
                            Travel Document Number
                        </label>
                        <input
                            type="text"
                            id="travelDocNum"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.travelDocNum
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("travelDocNum", { required: true })}
                        />
                        {errors.travelDocNum && (
                            <small className="text-red-500">
                            Travel document number is required.
                            </small>
                        )}
                    </div>
                    {/* issued by */}
                    <div className="space-y-1">
                        <label
                            htmlFor="issuedBy"
                            className="text-base block"
                        >
                            Issued By
                        </label>
                        <input
                            type="text"
                            id="issuedBy"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.issuedBy
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("issuedBy", { required: true })}
                        />
                        {errors.issuedBy && (
                            <small className="text-red-500">
                            Issued by is required.
                            </small>
                        )}
                    </div>
                    {/* date of issue */}
                    <div className="space-y-1">
                        <label
                            htmlFor="dateOfIssue"
                            className="text-base block"
                        >
                            Date of issue
                        </label>
                        <input
                            type="date"
                            id="dateOfIssue"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.dateOfIssue
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("dateOfIssue")}
                        />
                    </div>
                    {/* valid until */}
                    <div className="space-y-1">
                        <label
                            htmlFor="validUntil"
                            className="text-base block"
                        >
                            Valid Until
                        </label>
                        <input
                            type="date"
                            id="validUntil"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.validUntil
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("validUntil")}
                        />
                    </div>
                    {/* country of origin */}
                    <div className="space-y-1">
                        <label
                            htmlFor="countryOfOrigin"
                            className="text-base block"
                        >
                            Do you live in a country other than your country of origin?
                        </label>
                        <select name="countryOfOrigin" id="countryOfOrigin" className={`w-full border-2 rounded-md p-3 ${
                            errors.countryOfOrigin
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("countryOfOrigin")}>
                            <option value="">--Select answer--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {errors.countryOfOrigin && (
                            <small className="text-red-500">
                            Country of origin is required.
                            </small>
                        )}
                    </div>
                    <h3 className="col-span-2 text-xl font-semibold">Information about the visa for which you apply</h3>
                    {/* diplomatic and consular representation */}
                    <div className="space-y-1">
                        <label
                            htmlFor="diplomaticAndConsular"
                            className="text-base block"
                        >
                            Diplomatic and Consular Representation
                        </label>
                        <select name="diplomaticAndConsular" id="diplomaticAndConsular" className={`w-full border-2 rounded-md p-3 ${
                            errors.diplomaticAndConsular
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("diplomaticAndConsular", { required: true })}>
                            <option value="">--Select--</option>
                            <option value="New Delhi">New Delhi</option>
                        </select>
                        {errors.diplomaticAndConsular && (
                            <small className="text-red-500">
                             Diplomatic and Consular Representation is required.
                            </small>
                        )}
                    </div>
                    {/* visa type */}
                    <div className="space-y-1">
                        <label
                            htmlFor="visaType"
                            className="text-base block"
                        >
                            Visa Type
                        </label>
                        <input
                            type="text"
                            id="visaType"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.visaType
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("visaType")}
                        />
                    </div>
                    {/* travel purpose */}
                    <div className="space-y-1">
                        <label
                            htmlFor="travelPurpose2"
                            className="text-base block"
                        >
                            Travel Purpose
                        </label>
                        <input
                            type="text"
                            id="travelPurpose2"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.travelPurpose2
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("travelPurpose2")}
                        />
                    </div>
                    {/* number of days */}
                    <div className="space-y-1">
                        <label
                            htmlFor="numberOfDays"
                            className="text-base block"
                        >
                            Number of days of stay
                        </label>
                        <input
                            type="text"
                            id="numberOfDays"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.numberOfDays
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("numberOfDays", { required: true })}
                        />
                        {errors.numberOfDays && (
                            <small className="text-red-500">
                            Number of days is required.
                            </small>
                        )}
                    </div>
                    {/* other visa issues */}
                    <div className="space-y-1">
                        <label
                            htmlFor="otherVisaIssues"
                            className="text-base block"
                        >
                            Other visas issued in the previous three years
                        </label>
                        <select name="otherVisaIssues" id="otherVisaIssues" className={`w-full border-2 rounded-md p-3 ${
                            errors.otherVisaIssues
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("otherVisaIssues", { required: true })}>
                                <option value="">--Select answer--</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        {errors.otherVisaIssues && (
                            <small className="text-red-500">
                            Other visa issues is required.
                            </small>
                        )}
                    </div>
                    {/* Date of arrival in the Republic of Serbia */}
                    <div className="space-y-1">
                        <label
                            htmlFor="dateOfArrival"
                            className="text-base block"
                        >
                            Date of arrival in the Republic of Serbia
                        </label>
                        <input
                            type="date"
                            id="dateOfArrival"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.dateOfArrival
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("dateOfArrival", { required: true })}
                        />
                        {errors.dateOfArrival && (
                            <small className="text-red-500">
                            Date of arrival is required.
                            </small>
                        )}
                    </div>
                    {/* Date of departure from the Republic of Serbia:*/}
                    <div className="space-y-1">
                        <label
                            htmlFor="dateOfDeparture"
                            className="text-base block"
                        >
                           Date of departure from the Republic of Serbia
                        </label>
                        <input
                            type="date"
                            id="dateOfDeparture"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.dateOfDeparture
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("dateOfDeparture", { required: true })}
                        />
                        {errors.dateOfDeparture && (
                            <small className="text-red-500">
                            Date of departure is required.
                            </small>
                        )}
                    </div>
                    {/* Means of transport */}
                    <div className="space-y-1">
                        <label
                            htmlFor="meansOfTransport"
                            className="text-base block"
                        >
                           Means of transport
                        </label>
                        <input
                            type="text"
                            id="meansOfTransport"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.meansOfTransport
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("meansOfTransport", { required: true })}
                        />
                    </div>
                    {/* border crossing */}
                    <div className="space-y-1">
                        <label
                            htmlFor="previouslyStayed"
                            className="text-base block"
                        >
                           Border Crossing
                        </label>
                        <select name="borderCrossing" id="borderCrossing" className={`w-full border-2 rounded-md p-3 ${
                            errors.borderCrossing
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("borderCrossing")}>
                            <option value="">--Select border crossing--</option>
                            <option value="AERODROM MORAVA">AERODROM MORAVA</option>
                            <option value="APATIN">APATIN</option>
                            <option value="BAČKA PALANKA">BAČKA PALANKA</option>
                            <option value="BAČKI BREG">BAČKI BREG</option>
                            <option value="BAČKI VINOGRADI">BAČKI VINOGRADI</option>
                            <option value="BADOVINCI">BADOVINCI</option>
                            <option value="BAJINA BAŠTA">BAJINA BAŠTA</option>
                            <option value="BAJMOK">BAJMOK</option>
                            <option value="BARKASOVO">BARKASOVO</option>
                            <option value="BATROVCI">BATROVCI</option>
                            <option value="BEOGRAD - REČNI">BEOGRAD - REČNI</option>
                            <option value="BEOGRAD AERODROM<">BEOGRAD AERODROM</option>
                            <option value="BEZDAN">BEZDAN</option>
                            <option value="BEZDAN - REČNI">BEZDAN - REČNI</option>
                            <option value="BOGOJEVO">BOGOJEVO</option>
                            <option value="BOGOJEVO - ŽELEZNIČKI">BOGOJEVO - ŽELEZNIČKI</option>
                            <option value="BRASINA">BRASINA</option>
                            <option value="ĆAFA PRUŠIT">ĆAFA PRUŠIT</option>
                            <option value="ČEMERNO">ČEMERNO</option>
                            <option value="ĐALA">ĐALA</option>
                            <option value="ĐENERAL JANKOVIĆ DRUMSKI">ĐENERAL JANKOVIĆ DRUMSKI</option>
                            <option value="ĐENERAL JANKOVIĆ ŽELEZNIČKI">ĐENERAL JANKOVIĆ ŽELEZNIČKI</option>
                            <option value="ĐERDAP">ĐERDAP</option>
                            <option value="DIMITROVGRAD">DIMITROVGRAD</option>
                            <option value="DONJI MILANOVAC">DONJI MILANOVAC</option>
                            <option value="GLOBOČICA">GLOBOČICA</option>
                            <option value="GLOBOČICA">GLOBOČICA</option>
                            <option value="GODOVO">GODOVO</option>
                            <option value="GOLUBAC">GOLUBAC</option>
                            <option value="GOSTUN">GOSTUN</option>
                            <option value="GRADINA">GRADINA</option>
                            <option value="HORGOŠ">HORGOŠ</option>
                            <option value="HORGOŠ - ŽELEZNIČKI">HORGOŠ - ŽELEZNIČKI</option>
                            <option value="JABUKA">JABUKA</option>
                            <option value="JAMENA">JAMENA</option>
                            <option value="AMENA - ŽELEZNIČKI">JAMENA - ŽELEZNIČKI</option>
                            <option value="JAŠA TOMIĆ">JAŠA TOMIĆ</option>
                            <option value="KALUĐEROVO">KALUĐEROVO</option>
                            <option value="KANJIŽA">KANJIŽA</option>
                            <option value="KELEBIJA">KELEBIJA</option>
                            <option value="KIKINDA">KIKINDA</option>
                            <option value="KLADOVO">KLADOVO</option>
                            <option value="KOTROMAN">KOTROMAN</option>
                            <option value="KUMANICA">KUMANICA</option>
                            <option value="KUSJAK">KUSJAK</option>
                            <option value="LJUBA">LJUBA</option>
                            <option value="LJUBOVIJA">LJUBOVIJA</option>
                            <option value="M.ZVORNIK-N.MOST">M.ZVORNIK-N.MOST</option>
                            <option value="M.ZVORNIK-S.MOST">M.ZVORNIK-S.MOST</option>
                            <option value="MALI ZVORNIK">MALI ZVORNIK</option>
                            <option value="MEĐA">MEĐA</option>
                            <option value="MEHOV KRŠ">MEHOV KRŠ</option>
                            <option value="MOKRA GORA">MOKRA GORA</option>
                            <option value="MOKRANJE">MOKRANJE</option>
                            <option value="NAKOVO">NAKOVO</option>
                            <option value="NEGOTIN">NEGOTIN</option>
                            <option value="NEŠTIN">NEŠTIN</option>
                            <option value="NIŠ AERODROM">NIŠ AERODROM</option>
                            <option value="ĆIRPANOVA" selected>NOVI SAD</option>
                            <option value="PERUĆAC">PERUĆAC</option>
                            <option value="PRAHOVO">PRAHOVO</option>
                            <option value="PREŠEVO">PREŠEVO</option>
                            <option value="PREŠEVO ŽELEZNIČKI">PREŠEVO ŽELEZNIČKI</option>
                            <option value="PRIJEPOLJE">PRIJEPOLJE</option>
                            <option value="PRIŠTINA">PRIŠTINA</option>
                            <option value="PROHOR PČINJSKI">PROHOR PČINJSKI</option>
                            <option value="RIBARCI">RIBARCI</option>
                            <option value="ŠID">ŠID</option>
                            <option value="ŠID - ŽELEZNIČKI">ŠID - ŽELEZNIČKI</option>
                            <option value="SOT">SOT</option>
                            <option value="ŠPILJANI">ŠPILJANI</option>
                            <option value="SREMSKA RAČA">SREMSKA RAČA</option>
                            <option value="SREMSKA RAČA-ŽELEZNIČKI">SREMSKA RAČA-ŽELEZNIČKI</option>
                            <option value="SRPSKA CRNJA">SRPSKA CRNJA</option>
                            <option value="STREZIMIROVCI">STREZIMIROVCI</option>
                            <option value="SUBOTICA">SUBOTICA</option>
                            <option value="TEKIJA">TEKIJA</option>
                            <option value="TRBUŠNICA">TRBUŠNICA</option>
                            <option value="UVAC">UVAC</option>
                            <option value="VAJSKA">VAJSKA</option>
                            <option value="VATIN">VATIN</option>
                            <option value="VELIKO GRADIŠTE">VELIKO GRADIŠTE</option>
                        </select>
                    </div>
                    <h3 className="col-span-2 text-xl font-semibold">Information on previous stay in the Republic of Serbia</h3>
                    {/* Have you previously stayed in the Republic of Serbia */}
                    <div className="space-y-1">
                        <label
                            htmlFor="previouslyStayed"
                            className="text-base block"
                        >
                           Have you previously stayed in the Republic of Serbia?
                        </label>
                        <select name="previouslyStayed" id="previouslyStayed" className={`w-full border-2 rounded-md p-3 ${
                            errors.previouslyStayed
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("previouslyStayed", { required: true })}>
                            <option value="">--Select answer--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {errors.previouslyStayed && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    <h3 className="col-span-2 text-xl font-semibold">Data on intended (future) residence in the Republic of Serbia</h3>
                    {/* host first name */}
                    <div className="space-y-1">
                        <label
                            htmlFor="hostFirstName"
                            className="text-base block"
                        >
                            Host's First Name
                        </label>
                        <input
                            type="text"
                            id="hostFirstName"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.hostFirstName
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("hostFirstName", { required: true })}
                        />
                        {errors.hostFirstName && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* host telephone number */}
                    <div className="space-y-1">
                        <label
                            htmlFor="hostTelNum"
                            className="text-base block"
                        >
                            Host's telephone number
                        </label>
                        <input
                            type="text"
                            id="hostTelNum"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.hostTelNum
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("hostTelNum", { required: true })}
                        />
                        {errors.hostTelNum && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* host address */}
                    <div className="space-y-1">
                        <label
                            htmlFor="hostTelNum"
                            className="text-base block"
                        >
                            Host's address
                        </label>
                        <input
                            type="text"
                            id="hostAddress"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.hostAddress
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("hostAddress", { required: true })}
                        />
                        {errors.hostAddress && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* Host's e-mail address*/}
                    <div className="space-y-1">
                        <label
                            htmlFor="hostTelNum"
                            className="text-base block"
                        >
                            Host's e-mail address
                        </label>
                        <input
                            type="email"
                            id="hostEmail"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.hostEmail
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("hostEmail", { required: true })}
                        />
                        {errors.hostEmail && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* Municipality */}
                    <div className="space-y-1">
                        <label
                            htmlFor="municipality"
                            className="text-base block"
                        >
                            Municipality
                        </label>
                        <select name="municipality" id="municipality" className={`w-full border-2 rounded-md p-3 ${
                            errors.municipality
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("municipality", { required: true })}>
                                <option value="">--Select municipality--</option>
                                <option value="ADA">ADA</option>
                                <option value="NOVI SAD">NOVI SAD</option>
                            </select>
                        {errors.municipality && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* settlement */}
                    <div className="space-y-1">
                        <label
                            htmlFor="settlement"
                            className="text-base block"
                        >
                            Settlement
                        </label>
                        <select name="settlement" id="settlement" className={`w-full border-2 rounded-md p-3 ${
                            errors.settlement
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("settlement", { required: true })}>
                                <option value="">--Select settlement--</option>
                                <option value="ADA">ADA</option>
                                <option value="NOVI SAD">NOVI SAD</option>
                            </select>
                        {errors.settlement && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* street */}
                    <div className="space-y-1">
                        <label
                            htmlFor="street"
                            className="text-base block"
                        >
                            Street
                        </label>
                        <select name="street" id="street" className={`w-full border-2 rounded-md p-3 ${
                            errors.street
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("street", { required: true })}>
                                <option value="">--Select street--</option>
                                <option value="1300 KAPLARA">1300 KAPLARA</option>
                                <option value="ĆIRPANOVA">ĆIRPANOVA</option>
                            </select>
                        {errors.street && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* house number */}
                    <div className="space-y-1">
                        <label
                            htmlFor="houseNum"
                            className="text-base block"
                        >
                            House Number
                        </label>
                        <select name="houseNum" id="houseNum" className={`w-full border-2 rounded-md p-3 ${
                            errors.houseNum
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("houseNum", { required: true })}>
                                <option value="">--Select house number--</option>
                                <option value="001">001</option>
                                <option value="001A">001A</option>
                            </select>
                        {errors.houseNum && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* entrance */}
                    <div className="space-y-1">
                        <label
                            htmlFor="entrance"
                            className="text-base block"
                        >
                            Entrance
                        </label>
                        <input
                            type="text"
                            id="entrance"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.entrance
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("entrance")}
                        />
                    </div>
                    {/* floor */}
                    <div className="space-y-1">
                        <label
                            htmlFor="floor"
                            className="text-base block"
                        >
                            Floor
                        </label>
                        <input
                            type="text"
                            id="floor"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.floor
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("floor")}
                        />
                    </div>
                    {/* apartment */}
                    <div className="space-y-1">
                        <label
                            htmlFor="apartment"
                            className="text-base block"
                        >
                            Apartment
                        </label>
                        <input
                            type="text"
                            id="apartment"
                            className={`w-full border-2 rounded-md p-3 ${
                            errors.apartment
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("apartment")}
                        />
                    </div>
                     {/* Who is covering your travel costs */}
                     <div className="space-y-1">
                        <label
                            htmlFor="travelCost"
                            className="text-base block"
                        >
                            Who is covering your travel costs?
                        </label>
                        <select name="travelCost" id="travelCost" className={`w-full border-2 rounded-md p-3 ${
                            errors.travelCost
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("travelCost", { required: true })}>
                                <option value="">--Select who covers the expenses of your travel--</option>
                                <option value="Visa applicant">Visa applicant</option>
                                <option value="Host Person">Host Person</option>
                                <option value="Host Company">Host Company</option>
                                <option value="Other">Other</option>
                            </select>
                        {errors.travelCost && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* Financial resources for living expenses */}
                    <div className="space-y-1">
                        <label
                            htmlFor="livingExpenses"
                            className="text-base block"
                        >
                            Financial resources for living expenses
                        </label>
                        <select name="livingExpenses" id="livingExpenses" className={`w-full border-2 rounded-md p-3 ${
                            errors.livingExpenses
                                ? "border-warning hover:border-warning focus:outline-warning"
                                : ""
                            }`}
                            {...register("livingExpenses", { required: true })}>
                                <option value="">--Select financial resources for living expenses--</option>
                                <option value="Cash">Cash</option>
                                <option value="Traveller's cheques">Traveller's cheques</option>
                                <option value="Credit cards">Credit cards</option>
                                <option value="Accomodation">Accomodation</option>
                                <option value="Other">Other</option>
                            </select>
                        {errors.livingExpenses && (
                            <small className="text-red-500">
                            This field is required.
                            </small>
                        )}
                    </div>
                    {/* submit button */}
                    <div className="col-span-2">
                    <input
                        type="submit"
                        value="Create User"
                        className="w-full bg-black text-white font-semibold uppercase text-sm p-4 rounded-md cursor-pointer"
                    />
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}

export default CreateUser;