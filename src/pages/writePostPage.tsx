import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PostCreate() {
    const navigate = useNavigate();
    const locationHook = useLocation();
    const post = locationHook.state?.post;

    const [title, setTitle] = useState(post ? post.title : '');
    const [locationInput, setLocationInput] = useState(post ? post.location : '');
    const [date, setDate] = useState(post ? post.expiryDate : '');
    const [isPurchaseDate, setIsPurchaseDate] = useState(true);
    const [images, setImages] = useState([]);
    const [content, setContent] = useState(post ? post.content : '');
    const [menuOpen, setMenuOpen] = useState(false);
    const [deletedImages, setDeletedImages] = useState([]); // ✅ 삭제할 기존 이미지 추적


    const existingImages = post?.imagePath ? post.imagePath.split(',') : [];

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        // 현재 업로드된 이미지 총합 계산
        const totalUploaded =
            existingImages.filter(img => !deletedImages.includes(img)).length + images.length;

        const remainingSlots = 3 - totalUploaded;

        if (remainingSlots <= 0) {
            alert('이미지는 최대 3개까지만 업로드할 수 있습니다.');
            return;
        }

        const limitedFiles = files.slice(0, remainingSlots);
        setImages(prev => [...prev, ...limitedFiles]);
    };

    const handleImageDelete = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleExistingImageDelete = (filename) => {
        setDeletedImages(prev => [...prev, filename]);
    };

    const handleSubmit = async () => {
        if (!title || !locationInput || !date || !content) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('location', locationInput);
        formData.append('expiryDate', date);
        formData.append('author', '작성자');
        images.forEach(image => formData.append('images', image));

        if (post) {
            formData.append('deletedImages', JSON.stringify(deletedImages));
        }

        try {
            const isEdit = !!post;
            const url = isEdit
                ? `http://localhost:8081/posts/${post.id}`
                : 'http://localhost:8081/posts';

            const response = await fetch(url, {
                method: isEdit ? 'PUT' : 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error(isEdit ? '수정 실패' : '등록 실패');
            alert(isEdit ? '게시물이 수정되었습니다!' : '게시물이 등록되었습니다!');
            navigate('/posts');
        } catch (error) {
            console.error(error);
            alert('업로드 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="w-full h-full bg-[#76BF41] flex flex-col items-center relative p-[30px] box-border">
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
                <div className="flex flex-col gap-3 h-full">

                    {/* 이미지 업로드 */}
                    <div className="flex flex-col gap-2">

                        {/* 안내 문구 */}
                        <p className="text-[12px] text-gray-600">※ 이미지는 최대 3개까지 업로드할 수 있습니다.</p>

                        <div className="flex flex-wrap gap-4">
                            {/* 기존 이미지 (삭제되지 않은 것만) */}
                            {existingImages.filter(img => !deletedImages.includes(img)).map((img, idx) => (
                                <div key={`exist-${idx}`} className="relative w-[55px] h-[52px] border border-[#76BF41] bg-white rounded">
                                    <img
                                        src={`http://localhost:8081/images/${img}`}
                                        alt={`기존 이미지-${idx}`}
                                        className="w-full h-full object-cover rounded"
                                    />
                                    <button
                                        onClick={() => handleExistingImageDelete(img)}
                                        className="absolute -top-1 -right-1 w-[9px] h-[9px] bg-[#8E8E8E] text-white text-[8px] rounded-full flex items-center justify-center">
                                        ×</button>
                                </div>
                            ))}

                            {/* 새 이미지 */}
                            {images.map((file, idx) => (
                                <div key={`new-${idx}`} className="relative w-[55px] h-[52px] border border-[#76BF41] bg-white rounded">
        <span className="text-[10px] text-[#A9A9A9] absolute top-[56px] w-full text-center truncate">
          {file.name}
        </span>
                                    <button
                                        onClick={() => handleImageDelete(idx)}
                                        className="absolute -top-1 -right-1 w-[9px] h-[9px] bg-[#8E8E8E] rounded-full"
                                    />
                                </div>
                            ))}

                            {/* + 버튼: 이미지가 3개 미만일 때만 표시 */}
                            {(existingImages.filter(img => !deletedImages.includes(img)).length + images.length) < 3 && (
                                <label className="w-[40px] h-[40px] bg-[#76BF41] flex justify-center items-center text-white rounded-md cursor-pointer">
                                    +
                                    <input type="file" multiple hidden onChange={handleImageChange} />
                                </label>
                            )}
                        </div>
                    </div>


                    {/* 제목, 장소, 날짜, 토글 */}
                    <div className="flex gap-4 items-center w-full">
                        {/* 제목 */}
                        <input
                            type="text"
                            placeholder="제목"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="flex-1 h-[48px] bg-[#E9E9E9] border-2 border-[#76BF41] rounded-full px-4 text-lg text-[#707070]"
                        />

                        {/* 거래 장소 */}
                        <input
                            type="text"
                            placeholder="거래 장소"
                            value={locationInput}
                            onChange={(e) => setLocationInput(e.target.value)}
                            className="w-[180px] h-[48px] bg-[#E9E9E9] border-2 border-[#76BF41] rounded-full px-4 text-lg text-[#707070]"
                        />

                        {/* 날짜 */}
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-[160px] h-[48px] bg-[#E9E9E9] border-2 border-[#76BF41] rounded-full px-4 text-lg text-[#707070]"
                        />

                        {/* 토글 */}
                        <div className="flex flex-col items-center pt-[8px]">
                            <button
                                onClick={() => setIsPurchaseDate(prev => !prev)}
                                className={`w-[64px] h-[36px] rounded-full px-[4px] flex items-center ${
                                    isPurchaseDate ? 'justify-start bg-[#76BF41]' : 'justify-end bg-[#ADADAD]'
                                }`}>
                                <div className="w-[24px] h-[24px] bg-white rounded-full"></div>
                            </button>
                            <span className="text-[11px] text-[#707070] mt-1">
                                {isPurchaseDate ? '구매일' : '유통기한'}
                            </span>
                        </div>
                    </div>


                    {/* 내용 */}
                    <textarea
                        placeholder="내용을 입력하세요"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-[520px] bg-[#E9E9E9] border-2 border-[#76BF41] rounded-[15px] p-4 resize-none text-base text-[#707070]"
                    />

                    {/* 버튼 */}
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-[89px] h-[35px] bg-[#76BF41] text-white rounded-full text-[20px] font-bold"
                        >
                            취소
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="w-[89px] h-[35px] bg-[#76BF41] text-white rounded-full text-[20px] font-bold"
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCreate;