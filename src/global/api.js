import axios from "axios";
import {apiKey, apiBase} from "./config";
const uniGetData = (url, params) => {
  return axios.get(url, { params });
};

export const getCurrentWeather = async (query = '') => {
  return await uniGetData(
    `${apiBase}weather?${apiKey}&units=metric&${query}`
  );
}

export const getWeatherForecast = async (query = '') => {
  return await uniGetData(
    `${apiBase}forecast/daily?${apiKey}&units=metric&${query}`
  );
}