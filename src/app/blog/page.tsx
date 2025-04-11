import BlogList from "@/components/BlogList/BlogList";
import WeatherCard from "@/components/WeatherCard";
import { fetchWeatherType } from "@/utils/fetchWeatherType";
const Home = async () => {
  const weatherType = await fetchWeatherType();
  return (
    <div className="flex min-h-full">
      <main className="flex-1 p-4">
        <WeatherCard weatherCondition={weatherType} />
        <BlogList />
      </main>
    </div>
  );
};
export default Home;
