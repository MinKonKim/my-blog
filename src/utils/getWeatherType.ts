import { WeatherCondition } from "@/types/Weather";

export function getWeatherType(pty: number, sky: number):WeatherCondition {
    if (pty === 1 || pty === 2 || pty === 4) return {weatherType:"Rain"};  // 비 또는 비/눈 또는 소나기
  if (pty === 3) return {weatherType:"Snow"};  // 눈

  // 강수 없음(PTY=0)일 경우 SKY 값에 따라 결정
  if (sky === 1) return {weatherType:"Clear"};
  if (sky === 3 || sky === 4) return { weatherType:"Clouds"};

  return {weatherType:"Clear"}; // 기본값
  }