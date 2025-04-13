"use client";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  Settings,
  User,
  HelpCircle,
  Folder,
  FileText,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { usePostTagStore } from "@/stores/usePostTagStore";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isPostsOpen, setIsPostsOpen] = useState(false);
  const [postTagList, setPostTagList] = useState<string[]>([]);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };
  const items = usePostTagStore((state) => state.getItems);

  const togglePosts = () => {
    setIsPostsOpen(!isPostsOpen);
  };

  useEffect(() => {
    const tags = items();
    setPostTagList(tags);
  }, []);

  return (
    <>
      {/* 토글 버튼 */}
      <button
        className="fixed top-4 left-4 z-30 p-2 text-blue-600 bg-white/50 rounded-md hover:bg-white focus:outline-none transition-all duration-300"
        onClick={toggleSidebar}
        aria-label="사이드바 토글"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 사이드바 - 반투명 흰색 배경 */}
      <div
        className={`fixed top-0 left-0 z-20 h-full w-64 bg-white bg-opacity-80 backdrop-blur-sm text-gray-800 shadow-lg transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-5 mt-16">
          <h2 className="text-2xl font-bold mb-6">메뉴</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <Home size={20} />
                  <span>홈</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <User size={20} />
                  <span>프로필</span>
                </a>
              </li>

              {/* 프로젝트 섹션 */}
              <li className="border-t border-gray-200 pt-4">
                <div
                  className="flex items-center justify-between gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                  onClick={toggleProjects}
                >
                  <div className="flex items-center gap-3">
                    <Folder size={20} />
                    <span className="font-medium">프로젝트</span>
                  </div>
                  {isProjectsOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>

                {/* 프로젝트 하위 메뉴 */}
                {isProjectsOpen && (
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        <span className="flex items-center">
                          <span className="text-gray-600 mr-2">•</span>
                          프로젝트 주제1
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        <span className="flex items-center">
                          <span className="text-gray-600 mr-2">•</span>
                          프로젝트 주제2
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        <span className="flex items-center">
                          <span className="text-gray-600 mr-2">•</span>
                          ...
                        </span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* 포스트 섹션 */}
              <li className="border-t border-gray-200 pt-4">
                <div
                  className="flex items-center justify-between gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                  onClick={togglePosts}
                >
                  <div className="flex items-center gap-3">
                    <FileText size={20} />
                    <span className="font-medium">포스트</span>
                  </div>
                  {isPostsOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>

                {/* 포스트 하위 메뉴 */}
                {isPostsOpen && (
                  <ul className="ml-6 mt-2 space-y-2">
                    {postTagList.map((postTag) => (
                      <li key={postTag}>
                        <a
                          href="#"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition-colors"
                        >
                          <span className="flex items-center">
                            <span className="text-gray-600 mr-2">•</span>
                            {postTag}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <Settings size={20} />
                  <span>설정</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <HelpCircle size={20} />
                  <span>도움말</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* 오버레이 (사이드바가 열렸을 때만 표시) */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 z-10"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
