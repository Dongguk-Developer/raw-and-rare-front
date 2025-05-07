// src/pages/home/index.tsx
import { useState } from "react";

const categories = ["전체", "채소/과일", "축산/계란류", "수산/건어물", "냉동/간편식품", "음료/유제품", "곡물/면/양념/분말"] as const;

const mockItems = [
    { id: 1, title: "청정원 춘장 1kg", imageUrl: "/Cow.png" },
    { id: 2, title: "롯데 스파게티면 3kg", imageUrl: "/ender_pearl.png" },
    { id: 3, title: "청정원 춘장 1kg", imageUrl: "/Cow.png" },
    { id: 4, title: "롯데 스파게티면 3kg", imageUrl: "/ender_pearl.png" },
    { id: 5, title: "청정원 춘장 1kg", imageUrl: "/ender_pearl.png" },
    { id: 6, title: "롯데 스파게티면 3kg", imageUrl: "/Cow.png" },
    { id: 7, title: "청정원 춘장 1kg", imageUrl: "/ender_pearl.png" },
    { id: 8, title: "롯데 스파게티면 3kg", imageUrl: "/Cow.png" },
] as const;

export default function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState("전체");
    return (
        <div className="">
            <div className="relative flex flex-row justify-between items-center h-24">
                {/* 상단 제목 */}
                <h1 className="absolute text-3xl font-bold text-white w-full text-center py-4">식 상하지 않은 재료</h1>
                {/* 메뉴 */}
                <SidebarMenu />
            </div>

            <div className="relative w-[1280px] m-auto h-[60rem] bg-white flex flex-col items-center p-6 rounded-3xl">
                {/* 카테고리 필터 */}
                <div className="relative flex justify-center items-center mt-4 border-2 rounded-md border-[#76bf41] p-4">
                    <h1 className="absolute left-[20px] bottom-[80%] w-28 h-8 rounded-lg bg-[#76bf41]  text-white text-xl font-bold flex items-center justify-center">
                        골라보기
                    </h1>

                    {/* 필터 버튼 */}
                    <div className="flex space-x-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1 rounded-full border ${selectedCategory === cat ? "bg-[#76bf41] text-white" : "bg-white text-[#76bf41]"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                {/* 카드 리스트 */}
                <CardList />
                {/* 우측 하단 버튼 */}
                <NewPost />
            </div>
        </div>
    );
}

function CardList() {
    return (
        <div className="grid grid-cols-4 gap-12 mt-20 justify-center w-full ">
            {mockItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg border-2 shadow-md overflow-hidden flex flex-col items-center p-4">
                    <img src={item.imageUrl} alt={item.title} className="w-32 h-32 object-cover" />
                    <p className="mt-2 text-sm text-center">{item.title}</p>
                </div>
            ))}
        </div>
    );
}

function NewPost() {
    return <button className="absolute bottom-8 right-8 bg-[#76bf41] text-white px-3 py-1 rounded-md shadow-xl font-semibold">✎ 글쓰기</button>;
}

function SidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex ml-auto h-16 z-0">
            {/* 햄버거 버튼 */}
            <button className={`top-8 right-16 p-2`} onClick={() => setIsOpen((prev) => !prev)}>
                <div className="w-8 h-1 bg-white mb-1"></div>
                <div className="w-8 h-1 bg-white mb-1"></div>
                <div className="w-8 h-1 bg-white"></div>
            </button>

            {/* 사이드 메뉴 */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#558c03] text-white transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300`}
            >
                <button className="absolute left-4 top-1" onClick={() => setIsOpen((prev) => !prev)}>
                    ❌
                </button>
                <br />
                {/* 프로필 카드 */}
                <div className="relative p-4 bg-stone-300 rounded-lg m-4">
                    <img src="/vite.svg" alt="프로필" className="absolute top-8 w-8 h-8 rounded-full mb-2" />
                    <div className="font-bold text-black">strong potato</div>
                    <button className="text-black mt-2 px-3 py-1 border border-[#558c03] rounded-full">로그아웃</button>
                    <button className="absolute top-8 right-4">⚙️</button>
                </div>

                {/* 메뉴 리스트 */}
                <ul className="mt-8 space-y-4 ml-8">
                    <li className="hover:underline">내 글</li>
                    <li className="hover:underline">내 쪽지 목록</li>
                    <li className="hover:underline">content1</li>
                    <li className="hover:underline">content2</li>
                    <li className="hover:underline">content3</li>
                    <li className="hover:underline">content4</li>
                </ul>
            </div>
        </div>
    );
}
