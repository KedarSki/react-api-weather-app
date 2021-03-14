import React from "react";
import axios from "axios";

const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "3b278956367a63c02624975120217c4b";

export const getWeatherData = async (cityName) => {
  try {
    const { data } = await axios.get(baseURL + `q=${cityName}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};
