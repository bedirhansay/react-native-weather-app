import { getCurrentWeather } from "../api/weather";
import { getData } from "../store/asyncStore";

export const fetchWeather = async (cityParam) => {
  const storedCity = await getData("city");

  const cityToUse = cityParam || storedCity;

  const defaultCity = "Bolu";
  const finalCity = cityToUse || defaultCity;

  console.log(finalCity);

  try {
    // getCurrentWeather fonksiyonunu kullanarak hava durumu verisini getirin
    const data = await getCurrentWeather(finalCity, 7);
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error; // Hata durumunda hatayı yeniden fırlatın
  }
};
