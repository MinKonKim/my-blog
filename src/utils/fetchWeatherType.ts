export const fetchWeatherType =async()=>{
    const res  = await fetch(`${process.env.BASE_URL}/api/weather`, {
        next: { revalidate: 3600 }, // 1시간 단위로 api 호출
        // cache:'no-store'
    });
       
    const {weatherType } = await res.json(); // JSON 데이터 변환
    return weatherType;
}