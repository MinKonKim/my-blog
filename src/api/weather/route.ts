import { convertToGrid } from "@/utils/convertToGrid";
import { getWeatherType } from "@/utils/getWeatherType";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const { nx, ny } = convertToGrid(lat, lon);

  const API_KEY = process.env.NEXT_PUBLIC_ENCODING_WEATHER_API_KEY;
  const baseDate = new Date().toISOString().split("T")[0].replace(/-/g, "");
  const baseTime = "0500"; // 5시 기준
  const endpoint = process.env.NEXT_PUBLIC_WEATHER_API_ENDPOINT;
  try{

      const url =`${endpoint}/getVilageFcst
      ?serviceKey=${API_KEY}
      &dataType=JSON&base_date=${baseDate}
      &base_time=${baseTime}
      &nx=${nx}
      &ny=${ny} `
      console.log("URL: ",url);
      const res = await fetch(url);
      const data = await res.json();
      const { pty, sky } = data;
      
      // 날씨 상태 변환
      const weatherType = getWeatherType(pty, sky);
      return NextResponse.json(weatherType);
    }catch(error){
        return NextResponse.json(error);
    }
}