"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Search, X } from "lucide-react";

const categoryData = [
  {
    name: "프로젝트",
    slug: "project",
    subcategories: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
    ],
  },
  {
    name: "포스트",
    slug: "post",
    subcategories: [
      { name: "JavaScript", slug: "javascript" },
      { name: "UI/UX", slug: "ui-ux" },
    ],
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // 스크롤 방지 처리 (모바일 메뉴 열렸을 때)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* 오버레이 버튼 */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-black/30 backdrop-blur p-2 rounded text-white shadow-lg"
        onClick={() => setIsOpen(true)}
        aria-label="Open Sidebar"
      >
        <Menu size={20} />
      </button>

      {/* 오버레이 배경 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 사이드바 */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 z-40 bg-white/10 backdrop-blur text-white p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:block`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">카테고리</h2>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* 검색 영역 */}
        <div className="mb-6">
          <div className="flex items-center bg-white/10 backdrop-blur rounded p-2">
            <Search size={16} className="text-white mr-2" />
            <input
              type="text"
              placeholder="검색... (준비 중)"
              className="bg-transparent outline-none text-white placeholder-white w-full"
              disabled
            />
          </div>
        </div>

        <nav className="space-y-4">
          {categoryData.map((cat) => (
            <div key={cat.slug}>
              <button
                className="text-lg font-semibold hover:underline"
                onClick={() =>
                  setSelected(selected === cat.slug ? null : cat.slug)
                }
              >
                {cat.name}
              </button>
              {selected === cat.slug && (
                <ul className="mt-2 pl-4 space-y-1">
                  {cat.subcategories.map((sub) => (
                    <li
                      key={sub.slug}
                      onClick={() => {
                        router.push(`/blog/${cat.slug}/${sub.slug}`);
                        setIsOpen(false); // 모바일에서 클릭 후 닫기
                      }}
                      className={`cursor-pointer hover:text-blue-400 ${
                        pathname?.includes(sub.slug) ? "text-blue-400" : ""
                      }`}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
