const TravelDocuments = ({ user }) => {
    return (
        <div className="sm:w-[900px] mx-auto space-y-32">
                <div className="space-y-12">
                    <h3 className="text-[34px] text-[#253956] font-extrabold">Information about <br className="sm:hidden block" /> travel <br className="sm:block hidden" /> documents</h3>
                    <div className="sm:grid grid-cols-2">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="typeOfTravelDoc" className="block text-[14px] font-medium w-full sm:w-64">Type of travel document: *</label>
                          <div className="flex items-center">
                          <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block w-full sm:w-64 text-[14px]" value={user?.typeOfTravelDoc}>
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
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="travelDocNum" className="block text-[14px] font-medium w-full sm:w-64">Travel document number: *</label>
                          <div className="flex items-center">
                          <input type="text" value={user?.travelDocNum} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block w-full sm:w-64" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="issuedBy" className="block text-[14px] font-medium w-full sm:w-64">Issued by: *</label>
                          <div className="flex items-center">
                          <input type="text" value={user?.issuedBy} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block w-full sm:w-64" /> <span className="w-[28px] ml-2"></span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="dateOfIssue" className="block text-[14px] font-medium w-full sm:w-64">Date of issue: *</label>
                          <div className="flex items-center">
                          <input type="date" className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block w-full sm:w-64" value={user?.dateOfIssue.slice(0, 10)} /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                          <div className="flex space-x-1 sm:w-64 w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">The travel document must have been issued in the last 10 years and must have two consecutive blank pages</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="validUntil" className="block text-[14px] font-medium w-full sm:w-64">Valid Until: *</label>
                          <div className="flex items-center">
                          <input type="date" className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block w-full sm:w-64" value={user?.validUntil.slice(0, 10)} /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                          <div className="flex space-x-1 sm:w-64 w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">The travel document must be valid for at least three months after the intended date of departure from the Republic of Serbia</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-6 sm:pt-0">
                        <div className="space-y-2">
                          <label htmlFor="countryOfOrigin" className="block text-[14px] font-medium w-full sm:w-64">Do you live in country other than country of origin? *</label>
                          <div className="flex items-center">
                          <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block w-full sm:w-64 text-[14px]" value={user?.countryOfOrigin}>
                            <option value="">Select answer</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
    )
}

export default TravelDocuments;