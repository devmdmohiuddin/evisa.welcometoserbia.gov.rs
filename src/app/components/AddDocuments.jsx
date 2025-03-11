const AddDocuments = ({ user }) => {
  console.log("url", user)
    return (
        <div class="sm:w-[1000px] mx-auto space-y-32">
                <div class="space-y-12">
                    <div className="space-y-4">
                    <h3 class="text-[34px] text-[#253956] font-extrabold">Documents</h3>
                    <p className="text-[#253956] text-[14px]">Maximum 1 file document.</p>
                    </div>
                    <div class="sm:grid grid-cols-2">
                      <div class="space-y-8">
                        <div>
                          {user?.image ? <img class="w-[250px] h-[300px] object-cover rounded-md" src={user?.image} /> : <img class="w-[200px] h-[200px] object-contain rounded-md" src="./images/avatar.png" alt="Avatar" />}
                        </div>
                         <div class="space-y-2">
                          <label for="country" class="block text-[14px] font-medium w-full sm:w-[400px]">Face photo *</label>
                          <div class="flex items-center justify-between border border-[#253956] rounded-md py-2 pl-4 pr-24 sm:w-[400px] w-full">
                            <span id="file-name" class="text-[#A0A0A0] text-[14px] font-medium">File not selected.</span>
                            <label for="file-upload" class="font-medium cursor-pointer text-[14px] border-[#253956]">
                              Select file
                            </label>
                            <input 
                              type="file" 
                              id="file-upload" 
                              class="hidden" 
                              onchange="updateFileName(event)" 
                              required
                            />
                          </div>
                          <div className="flex space-x-1 sm:w-[400px] w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Allowed extensions: .jpg, .jpeg, .png, .tiff</span>
                          </div>
                        </div> 
                        <div class="space-y-2">
                          <label for="country" class="block text-[14px] font-medium w-full sm:w-[400px]">The first page of the travel document/passport *</label>
                          <div class="flex items-center justify-between border border-[#253956] rounded-md py-2 pl-4 pr-24 sm:w-[400px] w-full">
                            <span id="file-name" class="text-[#A0A0A0] text-[14px] font-medium">File not selected.</span>
                            <label for="file-upload" class="font-medium cursor-pointer text-[14px] border-[#253956]">
                              Select file
                            </label>
                            <input 
                              type="file" 
                              id="file-upload" 
                              class="hidden" 
                              onchange="updateFileName(event)" 
                            />
                          </div>
                          <div className="flex space-x-1 sm:w-[400px] w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Allowed extensions: .jpg, .jpeg, .png, .tiff</span>
                          </div>
                        </div> 
                        <div class="space-y-2">
                          <label for="country" class="block text-[14px] font-medium w-full sm:w-[400px]">Invitation letter *</label>
                          <div class="flex items-center justify-between border border-[#253956] rounded-md py-2 pl-4 pr-24 sm:w-[400px] w-full">
                            <span id="file-name" class="text-[#A0A0A0] text-[14px] font-medium">File not selected.</span>
                            <label for="file-upload" class="font-medium cursor-pointer text-[14px] border-[#253956]">
                              Select file
                            </label>
                            <input 
                              type="file" 
                              id="file-upload" 
                              class="hidden" 
                              onchange="updateFileName(event)" 
                            />
                          </div>
                          <div className="flex space-x-1 sm:w-[400px] w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Allowed extensions: .pdf</span>
                          </div>
                        </div> 
                        <div class="space-y-2">
                          <label for="country" class="block text-[14px] font-medium w-full sm:w-[400px]">A concluded contract between the employer for whom work is performed or services performed and a foreign employer, which must include the place and deadline for performing the work and a certified translation of the same *</label>
                          <div class="flex items-center justify-between border border-[#253956] rounded-md py-2 pl-4 pr-24 sm:w-[400px] w-full">
                            <span id="file-name" class="text-[#A0A0A0] text-[14px] font-medium">File not selected.</span>
                            <label for="file-upload" class="font-medium cursor-pointer text-[14px] border-[#253956]">
                              Select file
                            </label>
                            <input 
                              type="file" 
                              id="file-upload" 
                              class="hidden" 
                              onchange="updateFileName(event)" 
                            />
                          </div>
                          <div className="flex space-x-1 sm:w-[400px] w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Allowed extensions: .pdf, .jpg, .jpeg, .png, .tiff</span>
                          </div>
                        </div> 
                        <div class="space-y-2">
                          <label for="country" class="block text-[14px] font-medium w-full sm:w-[400px]">Confirmation from the foreign employer that the foreigner is employed, i.e. employed for at least one year with the foreign employer and a certified translation of the same *</label>
                          <div class="flex items-center justify-between border border-[#253956] rounded-md py-2 pl-4 pr-24 sm:w-[400px] w-full">
                            <span id="file-name" class="text-[#A0A0A0] text-[14px] font-medium">File not selected.</span>
                            <label for="file-upload" class="font-medium cursor-pointer text-[14px] border-[#253956]">
                              Select file
                            </label>
                            <input 
                              type="file" 
                              id="file-upload" 
                              class="hidden" 
                              onchange="updateFileName(event)" 
                            />
                          </div>
                          <div className="flex space-x-1 sm:w-[400px] w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Allowed extensions: .pdf, .jpg, .jpeg, .png, .tiff</span>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label for="country" class="block text-[14px] font-medium w-full sm:w-[400px]">Act of the foreign employer on sending a foreigner to temporary work in the Republic of Serbia and a certified translation of the same *</label>
                          <div class="flex items-center justify-between border border-[#253956] rounded-md py-2 pl-4 pr-24 sm:w-[400px] w-full">
                            <span id="file-name" class="text-[#A0A0A0] text-[14px] font-medium">File not selected.</span>
                            <label for="file-upload" class="font-medium cursor-pointer text-[14px] border-[#253956]">
                              Select file
                            </label>
                            <input 
                              type="file" 
                              id="file-upload" 
                              class="hidden" 
                              onchange="updateFileName(event)" 
                            />
                          </div>
                          <div className="flex space-x-1 sm:w-[400px] w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Allowed extensions: .pdf, .jpg, .jpeg, .png, .tiff</span>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label for="country" class="block text-[14px] font-medium w-full sm:w-[400px]">Statement of employer and foreign employer                          </label>
                          <div class="flex items-center justify-between border border-[#253956] rounded-md py-2 pl-4 pr-24 sm:w-[400px] w-full">
                            <span id="file-name" class="text-[#A0A0A0] text-[14px] font-medium">File not selected.</span>
                            <label for="file-upload" class="font-medium cursor-pointer text-[14px] border-[#253956]">
                              Select file
                            </label>
                            <input 
                              type="file" 
                              id="file-upload" 
                              class="hidden" 
                              onchange="updateFileName(event)" 
                            />
                          </div>
                          <div className="flex space-x-1 sm:w-[400px] w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Allowed extensions: .pdf, .jpg, .jpeg, .png, .tiff</span>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label for="country" class="block text-[14px] font-medium w-full sm:w-[400px]">Additional document 1</label>
                          <div class="flex items-center justify-between border border-[#253956] rounded-md py-2 pl-4 pr-24 sm:w-[400px] w-full">
                            <span id="file-name" class="text-[#A0A0A0] text-[14px] font-medium">File not selected.</span>
                            <label for="file-upload" class="font-medium cursor-pointer text-[14px] border-[#253956]">
                              Select file
                            </label>
                            <input 
                              type="file" 
                              id="file-upload" 
                              class="hidden" 
                              onchange="updateFileName(event)" 
                            />
                          </div>
                          <div className="flex space-x-1 sm:w-[400px] w-full">
                            <img className="w-[15px] h-[15px] object-contain flex-shrink-0" src="./images/info-sm.png" alt="info" /> <span className="text-[12px] text-[#4f4f4f]">Allowed extensions: .pdf, .jpg, .jpeg, .png, .tiff</span>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label for="country" class="block text-[14px] w-full sm:w-[400px] font-normal">Diplomatic and consular representation office may additionally request the supplementation of documents that have not been attached.</label>
                        </div>
                      </div>
                      </div>
                    </div>
                </div>
    )
}

export default AddDocuments;