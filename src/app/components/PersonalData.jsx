const PersonalData = ({ user }) => {
    return (
        <div className="sm:w-[900px] mx-auto space-y-32">
                <div className="space-y-12">
                    <h3 className="text-[34px] text-[#253956] font-extrabold">Personal Information</h3>
                    <div className="sm:grid grid-cols-2">
                    <div className="space-y-6">
                        <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-[14px] font-medium sm:w-64 w-full">User's last name: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.lastName} className="bg-[#EFEFEF] border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" disabled /> <span className="inline-block w-[28px] ml-2"></span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastNameAtBirth" className="block text-[14px] font-medium sm:w-64 w-full">Last name at birth:</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.lastNameAtBirth} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-[14px] font-medium sm:w-64 w-full">User's first name: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.firstName} className="bg-[#EFEFEF] border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" disabled /> <span className="inline-block w-[28px] ml-2"></span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="gender" className="block text-[14px] font-medium sm:w-64 w-full">Gender: *</label>
                        <div className="flex items-center">
                        <select name="gender" id="gender" className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.gender} >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="dateOfBirth" className="block text-[14px] font-medium sm:w-64 w-full">Date of birth: *</label>
                        <div className="flex items-center">
                        <input type="date" value={user?.dateOfBirth.slice(0,10)} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <span className="inline-block w-[28px] ml-2"></span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="dateOfBirth" className="block text-[14px] font-medium sm:w-64 w-full">Country of birth: *</label>
                        <div className="flex items-center">
                        <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.countryOfBirth}>
                          <option value="">Select the country of birth</option>
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
                      </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="placeOfBirth" className="block text-[14px] font-medium sm:w-64 w-full">Place of birth: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.placeOfBirth} className=" border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6 pt-6 sm:pt-6">
                      <div className="space-y-2">
                        <label htmlFor="address" className="block text-[14px] font-medium sm:w-64 w-full">Address: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.address} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telephone" className="block text-[14px] font-medium sm:w-64 w-full">Telephone: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.telephone} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="issuingCountry" className="block text-[14px] font-medium sm:w-64 w-full">Passport issuing country: *</label>
                        <div className="flex items-center">

                        <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.issuingCountry}>
                          <option value="">Select passport issuing country</option>
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
                      </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="citizenship" className="block text-[14px] font-medium sm:w-64 w-full">Original citizenship: *</label>
                        <div className="flex items-center">
                        <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.citizenship}>
                          <option value="">Select original citizenship</option>
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
                      </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="maritalStatus" className="block text-[14px] font-medium sm:w-64 w-full">Marital status: *</label>
                        <div className="flex items-center">
                        <select name="maritalStatus" id="maritalStatus" className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.maritalStatus}>
                          <option value="">Select marital status</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                          <option value="Separated">Separated</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowded">Widowded</option>
                          <option value="Other">Other</option>
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="fatherName" className="block text-[14px] font-medium sm:w-64 w-full">Father's first name: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.fatherName} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="motherName" className="block text-[14px] font-medium sm:w-64 w-full">Place of birth: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.motherName} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-[14px] font-medium sm:w-64 w-full">E-mail address: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.email} className="bg-[#EFEFEF] border-[1px] border-[#253956] text-[#253956] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" disabled /> <span className="inline-block w-[28px] ml-2"></span>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-[30px] text-[#253956] font-bold">Family Data</h3>
                  
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" id="family" className="w-6 h-6 cursor-pointer" />
                    <label htmlFor="family" className="text-[14px] font-semibold text-[#253956] cursor-pointer">
                      Do you have a family?
                    </label> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" id="children" className="w-6 h-6" />
                    <label htmlFor="children" className="text-[14px] font-semibold text-[#253956]">
                      Do you have children?
                    </label> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-[30px] text-[#253956] font-bold">Employment information</h3>
                <div className="space-y-2">
                  <label htmlFor="currentProfession" className="block text-[14px] font-medium sm:w-64 w-full">Current profession:</label>
                  <div className="flex items-center">
                  <input type="text" value={user?.currentProfession} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="employerCompany" className="block text-[14px] font-medium sm:w-64 w-full">Employee's Company:</label>
                  <div className="flex items-center">
                  <input type="text" value={user?.employerCompany} className=" border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="employerAddress" className="block text-[14px] font-medium sm:w-64 w-full">Employee's address:</label>
                  <div className="flex items-center">
                  <input type="text" value={user?.employerAddress} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="employerTelephone" className="block text-[14px] font-medium sm:w-64 w-full">Employee's telephone number:</label>
                  <div className="flex items-center">
                  <input type="text" value={user?.employerTelephone} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                  </div>
                </div>
              </div>
            </div>
    )
}  

export default PersonalData;