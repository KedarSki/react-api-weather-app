import React from "react";
import axios from "axios";

const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "";

export const getWeatherData = async (cityName) => {
  try {
    const { data } = await axios.get(baseURL + `q=${cityName}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};
