const TravelPurpose = ({ user }) => {
    console.log("user", user);
    return(
        <div className="w-full sm:w-[1100px] mx-auto space-y-32">
                <div className="space-y-12">
                    <h3 className="text-[34px] text-[#253956] font-extrabold">Travel purpose</h3>
                  <div className="space-y-3">
                    <label htmlFor="travel-purpose" className="block text-[14px] text-[#253956] font-medium">
                      Travel purpose *
                    </label>
                    <select
                      id="travel-purpose"
                      name="travel-purpose"
                      className="inline-block border bg-transparent py-2 px-4 border-[#666666] rounded-[3px] w-full sm:w-[250px] text-[#A0A0A0] text-[14px] cursor-pointer"
                      value={user?.travelPurpose}
                    >
                      <option value="">Select travel purpose</option>
                      <option value="Employment">Employment</option>
                      <option value="Schooling/studying">Schooling/studying</option>
                      <option value="Family reunion">Family reunion</option>
                      <option value="Religious service">Religious service</option>
                      <option value="Treatment or medical care">Treatment or medical care</option>
                      <option value="Ownership of real estate">Ownership of real estate</option>
                      <option value="Startup">Startup</option>
                      <option value="Investor">Investor</option>
                      <option value="Other">Other</option>
                      <option value="International exchange of puplis and students">International exchange of puplis and students</option>
                      <option value="Scientific research work">Scientific research work</option>
                      <option value="Professional practice, specialization">Professional practice, specialization</option>
                      <option value="Seasonal jobs">Seasonal jobs</option>
                    </select>
                  </div>
                </div>


                
                
                <div className="space-y-6">
                <h3 className="text-[34px] text-[#253956] font-extrabold pb-8">More specific travel purpose:</h3>
                  <label htmlFor="specific-purpose" className="block text-[14px] text-[#253956] font-medium">
                    Select specific purpose *
                  </label>
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Employment on the grounds of an employment contract or another contract exercising workplace rights
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Enrolled in the registration decision (self-employment)
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#4A90E2] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                      checked
                      onChange={e => console.log(e)}
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Agreement on business and technical cooperation (informed persons)
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Movement within the company
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Independent professional
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Training and development (professional practice, specialization, training, internship, work experience, professional training/development)
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Volunteering
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Accredited foreign journalist
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Realization of projects with state authorities of RS
                    </label>
                  </div>
  
                  <div className="flex items-center space-x-3 bg-[#CDD7E7] hover:bg-[#BAC8DD] p-6 cursor-pointer rounded-md min-h-[120px]">
                    <input
                      id="specific-purpose"
                      name="specific-purpose"
                      type="radio"
                      className="h-6 w-6 flex-shrink-0 text-[#253956] border-2 border-[#253956] focus:ring-[#253956] cursor-pointer"
                    />
                    <label htmlFor="specific-purpose" className="text-[20px] font-semibold cursor-pointer text-[#253956]">
                      Hiring a member of the author's and acting team who produce an audio-visual work on the territory of the RS
                    </label>
                  </div>
                </div>
              </div>
    )
}

export default TravelPurpose;