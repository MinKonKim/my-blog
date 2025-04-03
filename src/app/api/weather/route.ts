import { convertToGrid } from "@/utils/convertToGrid";
import { getWeatherType } from "@/utils/getWeatherType";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = parseFloat(searchParams.get("lat") || "37.5665");
  const lon = parseFloat(searchParams.get("lon") || "126.9780");

  const { nx, ny } = convertToGrid(lat, lon);

  const API_KEYS = [
    process.env.ENCODING_WEATHER_API_KEY,
    process.env.DECODING_WEATHER_API_KEY,
  ].filter(Boolean); // 빈 값 제거

  const baseDate = new Date().toISOString().split("T")[0].replace(/-/g, "");
  const baseTime = "0600"; // 6시 기준
  const endpoint = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";

  for (const API_KEY of API_KEYS) {
    if(!API_KEY)continue;
    
    const encodedKey = encodeURIComponent(API_KEY);
    const url = `${endpoint}?serviceKey=${encodedKey}&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

    try {
      console.log("🔹 Requesting with API_KEY:", API_KEY);
      const res = await fetch(url);

      if (!res.ok) {
        console.error(`❌ API request failed (${res.status}):`, res.statusText);
        continue;
      }

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const text = await res.text();
        console.error("❌ Unexpected response (not JSON):", text);
        continue;
      }

      const data = await res.json();
      if (!data?.response?.body?.items?.item?.length) {
        console.error("❌ Invalid data structure received:", data);
        continue;
      }

      const { pty, sky } = data.response.body.items.item[0] || {};
      const weatherType = getWeatherType(pty, sky);
      return NextResponse.json({ weatherType });

    } catch (error) {
      console.error("❌ API request error:", error);
      continue; // 실패 시 다음 API_KEY로 시도
    }
  }

  return NextResponse.json(
    { error: "Failed to fetch weather data with all API keys" },
    { status: 500 }
  );
}
