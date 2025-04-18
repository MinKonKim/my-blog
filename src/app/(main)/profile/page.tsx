"use client";
// pages/hover-expand-grid.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Info from "@/components/Profile/Info";
import Skill from "@/components/Profile/Skill";
import Education from "@/components/Profile/Education";
import Career from "@/components/Profile/Career";
import Qualifications from "@/components/Profile/Qualifications";

interface Item {
  id: number;
  title: string;
  description: React.ReactNode;
  color: string;
  position: [number, number]; // [row, column]
}

const contentItems: Item[] = [
  {
    id: 1,
    title: "Info",
    description: <Info />,
    color: "bg-blue-500",
    position: [1, 1],
  },
  {
    id: 2,
    title: "Skill",
    description: <Skill />,
    color: "bg-red-500",
    position: [1, 2],
  },
  {
    id: 3,
    title: "Education",
    description: <Education />,
    color: "bg-green-500",
    position: [2, 1],
  },
  {
    id: 4,
    title: "Career",
    description: <Career />,
    color: "bg-yellow-500",
    position: [2, 3],
  },
  {
    id: 5,
    title: "Qualification",
    description: <Qualifications />,
    color: "bg-pink-500",
    position: [3, 2],
  },
  {
    id: 6,
    title: "Contact",
    description: "Protecting your digital assets and customer data",
    color: "bg-indigo-500",
    position: [3, 3],
  },
];

const emptyPositions: [number, number][] = [
  [1, 3],
  [2, 2],
  [3, 1],
];

const ProfilePage = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getExpansionStyles = (position: [number, number]) => {
    const [row, col] = position;
    let expandDirection = {};
    if (row === 1) {
      if (col === 1 || col === 2) {
        expandDirection = { top: "0", left: "0", transformOrigin: "top left" };
      }
    } else if (row === 2) {
      if (col === 1) {
        expandDirection = {
          bottom: "0",
          left: "0",
          transformOrigin: "bottom left",
        };
      } else if (col === 3) {
        expandDirection = {
          bottom: "0",
          right: "0",
          transformOrigin: "bottom right",
        };
      }
    } else if (row === 3) {
      if (col === 2 || col === 3) {
        expandDirection = {
          bottom: "0",
          right: "0",
          transformOrigin: "bottom right",
        };
      }
    }
    return expandDirection;
  };

  const isEmptyPosition = (position: [number, number]) => {
    return emptyPositions.some(
      ([row, col]) => row === position[0] && col === position[1]
    );
  };

  const renderGridCell = (position: [number, number]) => {
    if (isEmptyPosition(position)) {
      return (
        <div key={`empty-${position[0]}-${position[1]}`} className="h-64"></div>
      );
    }

    const item = contentItems.find(
      (item) =>
        item.position[0] === position[0] && item.position[1] === position[1]
    );

    if (!item) return null;

    const isHovered = hoveredItem === item.id;
    const expansionStyles = getExpansionStyles(item.position);

    return (
      <div key={item.id} className="relative h-64">
        <motion.div
          className={`${item.color} rounded-xl shadow-lg overflow-hidden absolute`}
          style={{
            width: "100%",
            height: "100%",
            ...expansionStyles,
            zIndex: isHovered ? 10 : 1,
          }}
          animate={{
            width: isHovered ? "200%" : "100%",
            height: isHovered ? "200%" : "100%",
            zIndex: isHovered ? 10 : 1,
            transition: { duration: 0.3 },
          }}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <motion.div className="p-6 h-full flex flex-col">
            <h2
              className={`transition-all duration-300 font-bold text-white mb-2 ${
                isHovered ? "text-6xl" : "text-4xl"
              }`}
            >
              {item.title}
            </h2>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-4 flex-grow flex flex-col"
              >
                <div className="">{item.description}</div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    );
  };

  const gridPositions = [];
  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      gridPositions.push([row, col] as [number, number]);
    }
  }

  return (
    <div className="p-4" style={{ minHeight: `${windowHeight}px` }}>
      <h1 className="text-6xl font-bold mb-8 text-center">프로필</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
        {gridPositions.map((position) => renderGridCell(position))}
      </div>
    </div>
  );
};

export default ProfilePage;
