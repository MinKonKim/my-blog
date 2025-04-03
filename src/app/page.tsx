import WeatherBackground from "@/components/Background/WeatherBackground";

 const Home=async()=> {
  const res = await fetch(`http:/localhost:3000/api/weather`, {
    next: { revalidate: 3600 }, // 1시간 단위로 api 호출
  });
  if (!res.ok) {
    throw new Error("날씨 정보를 불러오지 못했습니다.");
  }
  const {weatherType} = await res.json(); // JSON 데이터 변환
  return (
    <WeatherBackground weatherData={weatherType}>
    <div className="">
      <main className="">
        <div>
          <p>{`오늘의 날씨 : ${weatherType.weatherType}`}</p>
        </div>
      </main>
    </div>
    </WeatherBackground>
  );
}
export default Home