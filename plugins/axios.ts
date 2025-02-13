import axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const axiosInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
      units: "metric",
      appid: config.public.openWeatherApiKey,
    },
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
