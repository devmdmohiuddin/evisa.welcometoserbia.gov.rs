const VisaInformation = ({ user }) => {
    return(
        <div className="sm:w-[900px] mx-auto space-y-32">
                <div className="space-y-12">
                    <h3 className="text-[34px] text-[#253956] font-extrabold">Information about the visa <br className="sm:block hidden" /> for which you apply</h3>
                    <div className="sm:grid grid-cols-2">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="diplomaticAndConsular" className="block text-[14px] font-medium w-full sm:w-64">Diplomatic and Consular Representation Office of the Republic of Serbia in: *</label>
                          <div className="flex items-center">
                          <select className="border-[1px] bg-[#EFEFEF] border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" disabled value={user?.diplomaticAndConsular}>
                            <option value="">Select</option>
                            <option value="New Delhi">New DELHI</option>
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="visaType" className="block text-[14px] font-medium w-full sm:w-64">Visa type: </label>
                          <div className="flex items-center">
                          <input type="text" value={user?.visaType} className="border-[1px] bg-[#EFEFEF] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" disabled /> <span className="w-[28px] ml-2"></span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="travelPurpose2" className="block text-[14px] font-medium w-full sm:w-64">Travel purpose: </label>
                          <div className="flex items-center">
                          <input type="text" value={user?.travelPurpose2} className="border-[1px] bg-[#EFEFEF] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" disabled /> <span className="w-[28px] ml-2"></span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="numberOfDays" className="block text-[14px] font-medium w-full sm:w-64">Number of days of stay: *</label>
                          <div className="flex items-center">
                          <input type="text" value={user?.numberOfDays} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="otherVisaIssues" className="block text-[14px] font-medium w-full sm:w-64">Other visas issued in the previous three years: *</label>
                          <div className="flex items-center">
                          <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.otherVisaIssues} disabled>
                            <option value="">Select answer</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pt-6 sm:pt-0">
                        <div className="space-y-2">
                          <label htmlFor="dateOfArrival" className="block text-[14px] font-medium w-full sm:w-64">Date of arrival in the Republic of Serbia: *</label>
                          <div className="flex items-center">
                          <input type="date" value={user?.dateOfArrival.slice(0, 10)} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="dateOfDeparture" className="block text-[14px] font-medium w-full sm:w-64">ate of departure from the Republic of Serbia: *</label>
                          <div className="flex items-center">
                          <input type="date" value={user?.dateOfDeparture.slice(0, 10)} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" disabled /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="borderCrossing" className="block text-[14px] font-medium w-full sm:w-64">Border crossing:</label>
                          <div className="flex items-center">
                          <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" disabled value={user?.borderCrossing}>
                            <option value="">Select border crossing</option>
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
                            <option value="NOVI SAD">NOVI SAD</option>
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
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="meansOfTransport" className="block text-[14px] font-medium w-full sm:w-64">Means of trasnport: </label>
                          <div className="flex items-center">
                          <input type="text" value={user?.meansOfTransport} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                          </div>
                          <div className="flex space-x-1 sm:w-64 w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Example: airplane, car, bus, etc</span>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>

                <div className="space-y-12">
                  <h3 className="text-[34px] text-[#253956] font-extrabold">Information on previous stay in the <br /> Republic of Serbia</h3>
                  <div className="sm:grid grid-cols-2">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="previouslyStayed" className="block text-[14px] font-medium w-full sm:w-64">Have you previously stayed in the Republic of Serbia? *</label>
                        <div className="flex items-center">
                        <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-blocksm:w-64 w-full text-[14px]" disabled value={user?.previouslyStayed}>
                          <option value="">Select answer</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                      </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>

                <div className="space-y-12">
                  <h3 className="text-[34px] text-[#253956] font-extrabold">Data on intended (future) residence <br className="sm:block hidden" /> in the Republic of Serbia</h3>
                  <div className="sm:grid grid-cols-2">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="hostFirstName" className="block text-[14px] font-medium w-full sm:w-64">Host's first name: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.hostFirstName} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="hostTelNum" className="block text-[14px] font-medium w-full sm:w-64">Host's telephone number: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.hostTelNum} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="hostAddress" className="block text-[14px] font-medium w-full sm:w-64">Host's address: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.hostAddress} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="hostEmail" className="block text-[14px] font-medium w-full sm:w-64">Host's e-mail address: *</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.hostEmail} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="municipality" className="block text-[14px] font-medium w-full sm:w-64">Municipality: *</label>
                        <div className="flex items-center">
                        <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" disabled value={user?.municipality}>
                          <option value="">Select border crossing</option>
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
                          <option value="NOVI SAD">NOVI SAD</option>
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
                      </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="settlement" className="block text-[14px] font-medium w-full sm:w-64">Settlement: *</label>
                        <div className="flex items-center">
                        <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" disabled value={user?.settlement}>
                          <option value="">Select border crossing</option>
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
                          <option value="NOVI SAD">NOVI SAD</option>
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
                      </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                    </div>


                    <div className="space-y-6 pt-6 sm:pt-0">
                      <div className="space-y-2">
                        <label htmlFor="street" className="block text-[14px] font-medium w-full sm:w-64">Street: *</label>
                        <div className="flex items-center">
                        <select name="" id="" className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.street}>
                          <option value="">Select street</option>
                          <option value="1300 KAPLARA">1300 KAPLARA</option>
                          <option value="9. MAJA">9. MAJA</option>
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="houseNum" className="block text-[14px] font-medium w-full sm:w-64">House number: *</label>
                        <div className="flex items-center">
                        <select name="" id="" className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.houseNum}>
                          <option value="">Select house number</option>
                          <option value="001">001</option>
                          <option value="001A">001A</option>
                        </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="entrance" className="block text-[14px] font-medium w-full sm:w-64">Entrance: </label>
                        <div className="flex items-center">
                        <input type="text" value={user?.entrance} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="floor" className="block text-[14px] font-medium w-full sm:w-64">Floor:</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.floor} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="apartment" className="block text-[14px] font-medium w-full sm:w-64">Apartment:</label>
                        <div className="flex items-center">
                        <input type="text" value={user?.apartment} className="border-[1px] border-[#253956] text-[#253956] font-medium uppercase focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full" /> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="travelCost" className="block text-[14px] font-medium w-full sm:w-64">Who is covering your travel costs? *</label>
                        <div className="flex items-center">
                        <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.travelCost}>
                          <option value="">Select who covers the expenses of your travel</option>
                          <option value="Visa applicant">Visa applicant</option>
                          <option value="Host company">Host company</option>
                          <option value="Other">Other</option>
                      </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="livingExpenses" className="block text-[14px] font-medium w-full sm:w-64">Financial resources for living expenses: * {user?.livingExpenses}</label>
                        <div className="flex items-center">
                        <select className="border-[1px] bg-transparent border-[#253956] text-[#A0A0A0] font-medium focus:border-[#4A90E2] rounded-md py-2 px-4 inline-block sm:w-64 w-full text-[14px]" value={user?.livingExpenses}>
                          <option value="">Select financial resources for living expenses</option>
                          <option value="Cash">Cash</option>
                          <option value="Credit cards">Credit cards</option>
                          <option value="Other">Other</option>
                          <option value="Traveller's cheques">Traveller's cheques</option>
                      </select> <img className="w-[28px] inline-block ml-2" src="./images/info.png" alt="info" />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>

                </div>
    )
}

export default VisaInformation;