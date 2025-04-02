"use client";

import { useEffect, useState } from "react";
import "./Background.style.css"
import { WeatherData } from "@/types/Weather";

interface WeatherBackgroundProps {
  weatherData: WeatherData | null;
}

export default function WeatherBackground({ weatherData }: WeatherBackgroundProps) {
  const [theme, setTheme] = useState("bg-default");

  useEffect(() => {
    if (!weatherData) return;

    const condition = weatherData.weather?.[0]?.weatherType;

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

  return <div className={`w-full h-screen ${theme}`}></div>;
}
