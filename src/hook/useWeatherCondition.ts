import { fetchWeatherType } from "@/utils/fetchWeatherType";
import { useQuery } from "@tanstack/react-query";

const useWeatherCondition = () => {
  return useQuery({
    queryKey: ["weatherType"],
    queryFn: fetchWeatherType,
    staleTime: 1000 * 60 * 60, // 클라이언트에서 1시간 동안 fresh
    gcTime: 1000 * 60 * 60 * 2, // 2시간 후 GC
    refetchOnWindowFocus: false,
  });
};

export default useWeatherCondition;
