"use client";

import React, { useState, useEffect } from "react";
import { WeatherCondition } from "@/types/Weather";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiShowers, WiThunderstorm } from "react-icons/wi";

interface WeatherCardProps {
  weatherCondition?: WeatherCondition;
}

const weatherData = {
  Clear: { message: "맑은 날씨입니다! ☀️", icon: <WiDaySunny className="text-yellow-400 text-6xl" /> },
  Clouds: { message: "구름이 많아요 ☁️", icon: <WiCloud className="text-gray-400 text-6xl" /> },
  Rain: { message: "비가 내리고 있어요 🌧️", icon: <WiRain className="text-blue-500 text-6xl" /> },
  Snow: { message: "눈이 내리고 있어요 ❄️", icon: <WiSnow className="text-blue-300 text-6xl" /> },
  Drizzle: { message: "이슬비가 내려요 🌦️", icon: <WiShowers className="text-blue-400 text-6xl" /> },
  Thunderstorm: { message: "천둥번개가 치고 있어요 ⚡", icon: <WiThunderstorm className="text-yellow-600 text-6xl" /> },
};

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherCondition }) => {
  const [currentCondition, setCurrentCondition] = useState<WeatherCondition | null>(null);

  useEffect(() => {
    if (weatherCondition) {
      setCurrentCondition(weatherCondition);
    }
  }, [weatherCondition]);

  if (!currentCondition) {
    return <div className="w-64 h-40 flex items-center justify-center bg-gray-200 rounded-xl">⏳ 로딩 중...</div>;
  }

  const { message, icon } = weatherData[currentCondition.weatherType] || { message: "알 수 없는 날씨", icon: null };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md w-64">
      {icon}
      <p className="mt-4 text-lg font-semibold">{message}</p>
      <p className="text-sm text-gray-500">현재 날씨: {currentCondition.weatherType}</p>
    </div>
  );
};

export default WeatherCard;
