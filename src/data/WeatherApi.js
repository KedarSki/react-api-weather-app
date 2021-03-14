import React from "react";
import axios from "axios";

const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "2c8bc7172e9f351279e16fe0a343e0b5";

export const getWeatherData = async (cityName) => {
  try {
    const { data } = await axios.get(baseURL + `q=${cityName}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};
