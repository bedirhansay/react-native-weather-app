import axios from "axios";

const apiKey = "7f141f7ed6e8474bb5b80109232311";

export const CurrentWeatherForecastEndpoint = (city, days) =>
  `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`;

export const locationsEndpoint = (city) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`;

export const getCurrentWeather = async (city, days) => {
  try {
    const res = await axios.get(CurrentWeatherForecastEndpoint(city, days));
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const FetchLocations = async (city, days) => {
  try {
    const res = await axios.get(locationsEndpoint(city));
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
