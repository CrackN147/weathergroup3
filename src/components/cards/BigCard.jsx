import { useState, useEffect, useContext } from "react";
import { DataContext } from "global/contexts/DataContext";

import { Loader } from "components/elements/Loader";
import { iconUrl } from "global/config";
import { Text } from "components/elements";
export const BigCard = (props) => {
  const { city, day } = useContext(DataContext);
  return (
    <div className="big-card">
      {day ?
        <div className="big-card-container">
          <div className="big-card-image" style={{
            backgroundImage: `url(/images/${day.weather.description.replaceAll(" ", "-")}.jpg)`
          }}>
            <div className="big-card-icon">
              <img src={`${iconUrl}${day.weather.icon}.png`} alt="icon" />
            </div>
          </div>
          <div className="big-card-content">
            <Text type="big-card">City: {city}</Text>
            <Text type="big-card">Wind Deg: {day.windDeg}</Text>
            <Text type="big-card">Wind Speed: {day.windSpeed}</Text>
            <Text type="big-card">Humidity: {day.humidity}</Text>
            <Text type="big-card">Pressure: {day.pressure}</Text>
          </div>
          <div className="big-card-content">
            <Text type="big-card">Description: {day.weather.description}</Text>
            <Text type="big-card">Feels like: {day.feelsLike}</Text>
            <Text type="big-card">Temp: {day.temp}</Text>
            <Text type="big-card">Temp Max: {day.tempMax}</Text>
            <Text type="big-card">Temp Min: {day.tempMin}</Text>
          </div>
        </div>
        :
        <Loader />
      }
    </div>
  );
};