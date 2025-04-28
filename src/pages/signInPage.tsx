import { useState,useRef } from "react";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

function SignInPage() {
    
    const [toggle,setToggle] = useState(false);
    const toggleSidebar = () => {
        setToggle(!toggle);
    }
    const [toggleRule,setToggleRule] = useState(false);
    const toggleRulePopup = () => {
        setToggleRule(!toggleRule);
    }
    const [imgFile, setImgFile] = useState(null);
    const imgRef = useRef(null);
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
           };
    };
    
    return (
      <div className="w-full h-[100vh] flex flex-col bg-[#76BF41]">
        {toggleRule?

            <div className="w-full h-full flex flex-col absolute justify-center items-center bg-gray-500/25">
                <div className="w-full h-[25%]" onClick={toggleRulePopup}></div>
                <div className="flex flex-row w-full">
                    <div className="w-[35%]" onClick={toggleRulePopup}></div>
                    <div className="bg-[#FFF] grow h-[800px] rounded-xl flex flex-col items-center p-5 w-[30%]">
                        <div className="weight-700 text-[32px] py-1">이용 약관</div>
                        <div className="overflow-scroll scroll-y-[700px] h-[700px] w-[400px] bg-[#F5F5F5] whitespace-normal break-keep">
                            <div className="weight-700">제1조 (목적)</div>
                            <p>본 약관은 "식-상하지 않은 재료" (이하 "서비스")가 서비스 제공 및 이용자 편의 향상을 위해 필요한 개인정보 수집·이용에 관한 조건을 규정하는 것을 목적으로 합니다.</p>
                            <hr/>
<br/>
                            <div className="weight-700">제2조 (수집하는 개인정보 항목)</div>
                            <p>
<div>
서비스는 다음과 같은 항목의 개인정보를 수집합니다.</div>

<div className="weight-600">회원가입 및 기본 서비스 이용 시</div>
<div className="pl-7">
    <ul className="list-disc">
    <li>이름</li>

<li>휴대전화 번호</li>

<li>이메일 주소</li>

<li>비밀번호 (암호화 저장)</li>

<li>기본 거주지 주소</li>

<li>식재료 제공 및 수령 과정에서</li>

<li>상세 주소(식재료 수령 및 전달을 위한 목적)</li>

<li>선호 식재료/알레르기 정보 (선택)</li>

<li>거래 희망 시간대 (선택)</li>

<li>서비스 이용 과정에서 자동으로 생성되는 정보</li>

<li>접속 IP 주소</li>

<li>접속 기기 정보 및 브라우저 정보</li>

<li>서비스 이용 기록 (로그 기록, 매칭 내역 등)</li>

<li>쿠키(cookie) 정보</li>
    </ul>
</div>

</p>
<hr/>
<br/>

<div className="weight-700">제3조 (개인정보 수집 및 이용 목적)</div>
<p>
<div>수집된 개인정보는 다음의 목적으로 이용됩니다.</div>
<div className="pl-7">
    <ul className="list-disc">
        <li>회원 가입 의사 확인 및 본인 인증</li>
        <li>식재료 제공자와 수령자 간 매칭 및 소통 지원</li>
        <li>식재료 전달 과정에서의 연락 및 배송 안내</li>
        <li>고객 문의 및 민원 처리</li>
        <li>부정 이용 방지 및 서비스 안정성 확보</li>
        <li>통계 작성 및 서비스 개선, 맞춤형 서비스 제공</li>
        <li>법령이나 이용약관을 위반하는 회원에 대한 제재 조치</li>
    </ul>
</div>
</p>
<hr/>
<br/>



<div className="weight-700">제4조 (개인정보 보유 및 이용 기간)</div>
<p>
<div>수집된 개인정보는 수집·이용 목적 달성 시까지 보관하며, 회원 탈퇴 또는 수집 목적 달성 시에는 지체 없이 파기합니다.</div>
<div className="weight-600">단, 다음의 경우에는 1년간 보관합니다.</div>

<div className="pl-7">
    <ul className="list-disc">

        <li>서비스 이용 관련 분쟁 해결 및 민원 처리</li>

        <li>부정 이용 방지를 위한 기록 보관</li>

        <li>보존 기간: 회원 탈퇴 또는 수집 목적 달성일로부터 1년</li>
    </ul>
</div>
</p>
<hr/>
<br/>
<div className="weight-700">제5조 (개인정보 제3자 제공)</div>
<p>

<div>서비스는 원칙적으로 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다.</div>
<div>다만, 다음의 경우에 한하여 최소한의 정보를 제공할 수 있습니다.</div>


</p>
<span className="weight-700">제공 받는 자 : </span>식재료 제공자(매칭 상대방)
<p>

<div className="weight-600">제공 항목</div>
<div className="pl-7">
    <ul className="list-disc">
        <li>이름</li>
        <li>휴대전화 번호</li>
        <li>식재료 수령 또는 제공지 주소</li>
        <li>제공 목적</li>
        <li>식재료 전달, 거래 일정 조율, 직접 소통을 위함</li>
        <li>제공 받는 자의 개인정보 보유 및 이용 기간</li>
        <li>목적 달성 후 즉시 폐기</li>
        <li>기타 제공</li>
    </ul>
</div>

<div>법령에 의해 요구되는 경우</div>

<div>이용자가 사전에 동의한 경우</div>
</p>
<hr/>
<br/>

<div className="weight-700">제6조 (개인정보 처리 위탁)</div>
<p>
서비스는 개인정보 처리를 위탁할 수 있으며, 위탁 시 수탁자 및 위탁 업무의 범위를 별도로 고지하거나 통지합니다.

(※ 현재 위탁사가 존재하지 않는 경우 "해당 사항 없음"으로 기재할 수 있습니다.)

</p>
<hr/>
<br/>
<div className="weight-700">제7조 (이용자의 권리와 행사 방법)</div>
<p>

이용자는 언제든지 자신의 개인정보에 대해 조회·수정·삭제 요청 및 수집·이용 동의 철회를 요청할 수 있습니다.

권리 행사는 서비스 설정 메뉴, 고객센터, 이메일 문의 등을 통해 가능합니다.
</p>
<hr/>
<br/>
<div className="weight-700">제8조 (개인정보 파기 절차 및 방법)</div>
<p>
    파기 절차

    개인정보의 수집 및 이용 목적이 달성된 후에는 내부 방침 및 관련 법령에 따라 1년간 보관 후 파기합니다.

    파기 방법

    전자적 파일: 복구가 불가능한 방법으로 영구 삭제

    종이 문서: 분쇄하거나 소각
</p>
<hr/>
<br/>
<div className="weight-700">제9조 (개인정보 보호 책임자)</div>
<p>

서비스는 개인정보 관련 민원 처리 및 고충 해결을 위하여 개인정보 보호 책임자를 지정하고 있습니다.

<div>개인정보 보호 책임자: 김이현</div>

<div>이메일: lh7721004@naver.com</div>

<div>전화번호: 010-5109-0625</div>
</p>
<hr/>
<br/>
<div className="weight-700">제10조 (약관의 변경)</div>
<p>

본 약관은 관련 법령 개정이나 서비스 정책 변경에 따라 사전 공지 후 변경될 수 있습니다. 변경 사항은 홈페이지 또는 앱 공지사항을 통해 사전 통지합니다.
</p>
                        </div>
                        
                        <div className="w-full flex flex-row-reverse pt-2 pb-7">

                            <div className="flex flex-row gap-1 cursor-pointer">
                                <input type={"checkbox"} id={"checkbox"} className="cursor-pointer"></input>
                                <label className="text-[12px] cursor-pointer" htmlFor="checkbox">위 내용에 대해 상세히 읽었으며 동의합니다.<span className="text-[#F00]">*</span></label>
                            </div>
                        </div>
                        <div className="border-2 border-[#000] rounded-full px-4 py-2">동의합니다</div>
                    </div>
                    <div className="w-[35%]" onClick={toggleRulePopup}></div>
                </div>                
                <div className="w-full h-[25%]" onClick={toggleRulePopup}></div>
            </div>
            :<></>}
        <div className="w-full flex flex-row-reverse">
            <div className="flex flex-col gap-1 p-5 cursor-pointer" onClick={toggleSidebar}>
                <div className="w-[32px] bg-[#FFF] h-[7px] rounded-md"></div>
                <div className="w-[32px] bg-[#FFF] h-[7px] rounded-md"></div>
                <div className="w-[32px] bg-[#FFF] h-[7px] rounded-md"></div>
            </div>
        </div>
        <div className="w-full h-full flex justify-center p-4">
            <div className="w-full h-full flex flex-col items-center bg-[#FFF] p-4 rounded-[24px] gap-7 min-w-[800px]">
                <div className="text-[48px] weight-700 border-b-[5px] border-solid border-[#76BF41] px-4">회원 가입</div>
                <div className="flex flex-col items-center p-7 pt-24 w-[650px] h-[700px] bg-[#E9E9E9] rounded-2xl border-[2px] border-solid border-[#76BF41]">
                    <div className="flex flex-row gap-14">
                        <div className="flex flex-col justify-center">
                            <img
                            src={imgFile ? imgFile :`/src/assets/test.png`}
                            alt="프로필 이미지"
                            className="w-full h-full max-w-[100px] max-h-[100px] rounded-full"
                            />
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
                            <input id="file" className="hidden" type={"file"} accept={"image/jpg,image/jpeg,image/gif,image/webp,image/png"} onChange={saveImgFile} ref={imgRef}></input>
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
                    <div className="text-[#4B4B4B] text-[20px] weight-700 pt-4 pb-9 underline cursor-pointer" style={{textShadow:"0px 2px 4px rgba(0,0,0,0.25)"}} onClick={toggleRulePopup}>이용 약관</div>
                    <div className="text-[#FFF] w-[140px] py-1 text-[20px] text-center weight-700 rounded-full bg-[#76BF41] cursor-pointer">가입하기</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default SignInPage;