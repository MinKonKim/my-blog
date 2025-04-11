// app/blog/layout.tsx
import { ReactNode } from "react";
import WeatherBackground from "@/components/Background/WeatherBackground";
import Sidebar from "@/components/Sidebar/Sidebar";
import { fetchWeatherType } from "@/utils/fetchWeatherType";

export default async function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  const weatherType = await fetchWeatherType();
  //   const notiondb = await fetchNotionDb();
  return (
    <WeatherBackground weatherCondition={weatherType}>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </WeatherBackground>
  );
}
