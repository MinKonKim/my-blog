import { fetchWeatherType } from "@/utils/fetchWeatherType";
import WeatherBackground from "../components/Background/WeatherBackground";
import WeatherCard from "../components/WeatherCard";
import BlogList from "../components/BlogList/BlogList";
 const Home=async()=> {
  const weatherType = await fetchWeatherType();
  console.log(weatherType);
  return (
    <WeatherBackground weatherCondition={weatherType}>
    <div className="">
      <main className="">
          <WeatherCard weatherCondition={weatherType}/>
          <div className="border-2">
            <BlogList/>
          </div>
      </main>
    </div>
    </WeatherBackground>
  );
}
export default Home