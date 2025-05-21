import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdChatBubbleOutline } from 'react-icons/md';

function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false); // ✅ 전체 보기 상태

    useEffect(() => {
        fetch(`http://localhost:8081/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.error('❌ 게시물 불러오기 실패:', err));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    const images = post.imagePath ? post.imagePath.split(',') : [];
    const formattedDate = new Date().toISOString().slice(0, 10);

    return (
        <div className="w-full h-full bg-[#76BF41] flex flex-col items-center p-[30px] box-border">
            {/* 메뉴 토글 */}
            <div className="w-full flex justify-end pb-[25px]">
                <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="w-[36px] bg-[#FFF] h-[8px] rounded-md"></div>
                    <div className="w-[36px] bg-[#FFF] h-[8px] rounded-md"></div>
                    <div className="w-[36px] bg-[#FFF] h-[8px] rounded-md"></div>
                </div>
            </div>

            {menuOpen && (
                <div className="absolute top-20 right-6 bg-white rounded-xl shadow-lg z-50 w-[130px] p-2">
                    <ul className="flex flex-col">
                        <li className="p-2 cursor-pointer hover:bg-gray-100">설정</li>
                        <li className="p-2 cursor-pointer hover:bg-gray-100">로그아웃</li>
                    </ul>
                </div>
            )}

            {/* 하얀색 카드 */}
            <div className="w-full h-full bg-white rounded-[24px] p-[130px] shadow-xl overflow-auto box-border">
                <div className="flex items-center justify-between px-6 py-4 bg-white shadow rounded-lg">

                    {/* 왼쪽: 프로필 + 작성자 + 제목 */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full" />

                        <div className="flex items-center text-[#363636] text-[16px] gap-2">
                            <span>{post.author}</span>
                            <div className="w-[2px] h-[29px] bg-[#76BF41] rounded" />
                        </div>

                        <div className="text-black text-[20px] font-medium ml-4">
                            {post.title}
                        </div>
                    </div>

                    {/* 오른쪽: 날짜 + 버튼들 */}
                    <div className="flex items-center gap-4 text-[16px]">
                        <div className="text-[#676767]">{formattedDate}</div>

                        <button className="text-black flex gap-2 mr-[155px]">
                            <MdChatBubbleOutline className="text-2xl" />
                            대화 열기
                        </button>

                        <button
                            onClick={() => navigate('/edit-post', { state: { post } })}
                            className="text-black font-bold"
                        >
                            수정
                        </button>

                        <button
                            onClick={async () => {
                                if (window.confirm('정말 삭제하시겠습니까?')) {
                                    try {
                                        await fetch(`http://localhost:8081/posts/${id}`, { method: 'DELETE' });
                                        alert('삭제되었습니다!');
                                        navigate('/posts');
                                    } catch (err) {
                                        console.error(err);
                                        alert('삭제 중 오류 발생');
                                    }
                                }
                            }}
                            className="text-black font-bold"
                        >
                            삭제
                        </button>

                        <button
                            onClick={() => alert('신고가 접수되었습니다.')}
                            className="bg-[#FAC6C6] text-[#FF5353] font-bold text-[16px] rounded px-3 py-1"
                        >
                            신고
                        </button>
                    </div>
                </div>

                {/* 본문 박스 */}
                <div className="w-full h-full bg-[#E9E9E9] border-2 border-[#76BF41] rounded-[15px] p-6 box-border">

                    {/* 본문 + 세로줄 + 이미지 슬라이드 한 줄로 */}
                    <div className="flex w-full items-start">

                        {/* 본문 */}
                        <div className="basis-[60%] max-w-[60%] text-[16px] break-words whitespace-pre-line">
                            {post.content}
                        </div>

                        {/* 세로줄 */}
                        <div className="w-px h-[386.5px] bg-[#76BF41] mx-[2%]" />

                        {/* 이미지 */}
                        <div className="basis-[40%] flex gap-2 h-[221px] mt-[80px]">
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={`http://localhost:8081/images/${img}`}
                                    alt={`img-${idx}`}
                                    onClick={() => {
                                        if (activeIndex === idx) setShowFullImage(true);
                                        else setActiveIndex(idx);
                                    }}
                                    className={`${activeIndex === idx ? 'w-[85%]' : 'w-[15%]'} object-cover rounded-[28px] transition-all duration-300 cursor-pointer`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* 아래쪽 정보 영역 */}
                    <div className="mt-5 px-[15px] flex flex-col gap-2">

                        <div className="w-full h-px bg-[#76BF41]" />
                        {/* 유통기한 + 거래장소 */}
                        <div className="text-[16px] text-black">
                            <p className="p-3">유통기한: {post.expiryDate}</p>

                            <div className="w-full h-px bg-[#76BF41]" />

                            <p className="p-3">거래장소: {post.location}</p>

                            <div className="w-full h-px bg-[#76BF41]" />
                        </div>
                    </div>
                </div>

                    {/* ✅ 전체 이미지 보기 모달 */}
                {showFullImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        onClick={() => setShowFullImage(false)}
                    >
                        <img
                            src={`http://localhost:8081/images/${images[activeIndex]}`}
                            alt="full"
                            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostDetail;
