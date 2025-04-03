"use client";

import { useEffect, useState } from "react";
import "./Background.style.css";
import { WeatherCondition } from "@/types/Weather";

interface WeatherBackgroundProps {
  weatherData: WeatherCondition | null;
  children: React.ReactNode; // children 추가
}

export default function WeatherBackground({ weatherData, children }: WeatherBackgroundProps) {
  const [theme, setTheme] = useState("bg-default");

  useEffect(() => {
    if (!weatherData) return;

    const condition = weatherData.weatherType;
    console.log("배경 Condition : ",condition);
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
  }, [weatherData]);

  return (
    <div className={`w-full h-screen ${theme}`}>
      {children} {/* 내부 컨텐츠 렌더링 */}
    </div>
  );
}
