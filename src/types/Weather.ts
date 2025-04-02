export interface WeatherCondition {
    weatherType: "Clear" | "Clouds" | "Rain" | "Snow" | "Drizzle" | "Thunderstorm";
  }
  
  export interface WeatherData {
    weather: WeatherCondition[];
  }