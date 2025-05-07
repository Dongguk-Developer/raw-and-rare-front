// src/pages/home/index.tsx
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

const categories = ["전체", "채소/과일", "축산/계란류", "수산/건어물", "냉동/간편식품", "음료/유제품", "곡물/면/양념/분말"] as const;

const mockItems = [
    { id: 1, title: "[1] 청정원 춘장 1kg", imageUrl: "/Cow.png", _category: "축산/계란류" },
    { id: 2, title: "[2] 롯데 스파게티면 3kg", imageUrl: "/ender_pearl.png", _category: "축산/계란류" },
    { id: 3, title: "[3] 청정원 춘장 1kg", imageUrl: "/Cow.png", _category: "수산/건어물" },
    { id: 4, title: "[4] 롯데 스파게티면 3kg", imageUrl: "/ender_pearl.png", _category: "음료/유제품" },
    { id: 5, title: "[5] 청정원 춘장 1kg", imageUrl: "/ender_pearl.png", _category: "축산/계란류" },
    { id: 6, title: "[6] 롯데 스파게티면 3kg", imageUrl: "/Cow.png", _category: "수산/건어물" },
    { id: 7, title: "[7] 청정원 춘장 1kg", imageUrl: "/ender_pearl.png", _category: "음료/유제품" },
    { id: 8, title: "[8] 롯데 스파게티면 3kg", imageUrl: "/Cow.png", _category: "음료/유제품" },
];

export default function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState("전체");
    return (
        <div className="w-[95%] m-auto">
            <div className="relative flex flex-row justify-between items-center h-24">
                {/* 상단 제목 */}
                <h1 className="absolute text-3xl font-bold text-white w-full text-center py-4 rounded-lg">식 상하지 않은 재료</h1>
                {/* 카카오 로그인 버튼 */}
                <KakaoLoginButton />
            </div>

            <div className="relative w-[100%] h-[65rem] m-auto bg-white flex flex-col items-center p-6 rounded-3xl">
                {/* 카테고리 필터 */}
                <div className="relative flex justify-center items-center mt-4 border-2 border-[#76bf41] p-4">
                    <h1 className="absolute left-[20px] bottom-[80%] w-28 h-8 rounded-2xl bg-[#76bf41]  text-white text-xl font-bold flex items-center justify-center">
                        골라보기
                    </h1>

                    {/* 필터 버튼 */}
                    <div className="flex space-x-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1 rounded-full border ${
                                    selectedCategory === cat ? "text-black underline font-bold text-base" : "text-gray-800 underline text-base"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                {/* 카드 리스트 */}
                <CardList selectedCategory={selectedCategory} />
                {/* 우측 하단 버튼 */}
                <NewPost />
            </div>
        </div>
    );
}

function KakaoLoginButton() {
    return (
        <button className="ml-auto bg-yellow-400 text-black px-4 py-2 rounded-full font-bold cursor-pointer z-0">
            <RiKakaoTalkFill className="inline align-middle" /> 카카오로 로그인
        </button>
    );
}

function CardList({ selectedCategory }: { selectedCategory: string }) {
    return (
        <div className="grid grid-cols-4 gap-12 mt-20 justify-center w-full ">
            {selectedCategory === "전체" &&
                mockItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg border-2 shadow-md overflow-hidden flex flex-col items-center p-4">
                        <img src={item.imageUrl} alt={item.title} className="w-32 h-32 object-cover" />
                        <p className="mt-2 text-sm text-center">{item.title}</p>
                    </div>
                ))}
            {selectedCategory !== "전체" &&
                mockItems
                    .filter((item) => item._category === selectedCategory)
                    .map((item) => (
                        <div key={item.id} className="bg-white rounded-lg border-2 shadow-md overflow-hidden flex flex-col items-center p-4">
                            <img src={item.imageUrl} alt={item.title} className="w-32 h-32 object-cover" />
                            <p className="mt-2 text-sm text-center">{item.title}</p>
                        </div>
                    ))}
        </div>
    );
}

function NewPost() {
    return (
        <button className="absolute bottom-8 right-8 bg-[#76bf41] text-white px-3 py-1 rounded-md shadow-xl font-semibold">
            <FaPen className="inline align-middle" /> 글쓰기
        </button>
    );
}
