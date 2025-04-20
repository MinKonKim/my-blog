"use client";

import { useEffect, useState } from "react";
import "./Background.style.css";
import useWeatherCondition from "@/hook/useWeatherCondition";

interface WeatherBackgroundProps {
  children: React.ReactNode; // children 추가
}

export default function WeatherBackground({
  children,
}: WeatherBackgroundProps) {
  const [theme, setTheme] = useState("bg-default");
  const weatherCondition = useWeatherCondition();
  const condition = weatherCondition.data?.weatherType || "default";

  useEffect(() => {
    switch (condition) {
      case "Clear":
        setTheme("bg-sunny");
        break;
      case "Clouds":
        setTheme("bg-cloudy");
        break;
      case "Rain":
        setTheme("bg-rainy");
        break;
      case "Snow":
        setTheme("bg-snowy");
        break;
      default:
        setTheme("bg-default");
    }
  }, [condition]);

  return (
    <div className={`w-full h-screen ${theme}`}>
      {children} {/* 내부 컨텐츠 렌더링 */}
    </div>
  );
}
