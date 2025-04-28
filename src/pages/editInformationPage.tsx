import { useState } from "react";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";


function EditInformationPage() {
    const [toggle,setToggle] = useState(false);
    const toggleSidebar = () => {
        setToggle(!toggle);
    }
    return (
      <div className="w-full h-[100vh] flex flex-col bg-[#76BF41]">
        <div className="w-full flex flex-row-reverse">
            <div className="flex flex-col gap-1 p-5 cursor-pointer" onClick={toggleSidebar}>
                <div className="w-[32px] bg-[#FFF] h-[7px] rounded-md"></div>
                <div className="w-[32px] bg-[#FFF] h-[7px] rounded-md"></div>
                <div className="w-[32px] bg-[#FFF] h-[7px] rounded-md"></div>
            </div>
        </div>
        <div className="w-full h-full flex justify-center p-4">
            <div className="w-full h-full flex flex-col items-center bg-[#FFF] p-4 rounded-[24px] gap-7 min-w-[800px]">
                <div className="text-[48px] weight-700 border-b-[5px] border-solid border-[#76BF41] px-4">정보 수정</div>
                <div className="flex flex-col items-center p-7 pt-24 w-[650px] h-[700px] bg-[#E9E9E9] rounded-2xl border-[2px] border-solid border-[#76BF41]">
                    <div className="flex flex-row gap-14">
                        <div className="flex flex-col justify-center">
                          <img src="/src/assets/test.png" className="w-full h-full max-w-[100px] max-h-[100px] rounded-full"/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <label htmlFor="file">
                                <div className="flex flex-row w-full h-[130px] bg-[#76BF41] rounded-xl px-7 cursor-pointer">
                                    <div className="flex flex-col justify-center">
                                        <div className="flex flex-row justify-center gap-2">
                                            <div><MdOutlinePhotoSizeSelectActual color="#FFF" size={40}/></div>
                                            <div className="weight-600 text-[#FFF] text-[24px]">사진 올리기</div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <input id="file" className="hidden" type={"file"} accept={"image/jpg,image/jpeg,image/gif,image/webp,image/png"}></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 py-20">
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col justify-center">
                                <div className="text-[20px] weight-700">닉네임</div>
                            </div>
                            <input className="border-2 border-[#76BF41] rounded-full px-2 py-1 w-[255px] h-[50px] bg-gray-50/0" placeholder="최대 20자 입력" maxLength={20}/>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col justify-center">
                                <div className="text-[20px] weight-700">아이디</div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-[12px] text-[#505050] weight-800">#58903d2d-828d-4da7-ac5a-cd91af24ac80</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                      <div className="text-[#FFF] w-[140px] py-1 text-[20px] text-center weight-700 rounded-full bg-[#76BF41] cursor-pointer">저장하기</div>
                      <div className="text-[#FFF] w-[140px] py-1 text-[20px] text-center weight-700 rounded-full bg-[#FF3E3E] cursor-pointer">탈퇴하기</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default EditInformationPage;