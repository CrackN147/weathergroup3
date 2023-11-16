import {useState, useEffect, useContext} from "react";
import {DataContext} from "global/contexts/DataContext";
import {getCurrentWeather} from "global/api";
import {Loader} from "components/elements/Loader";
import {iconUrl} from "global/config";
import { Text } from "components/elements";
export const BigCard = (props) => {
  const {city} = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getCurrentWeather(`q=${city}`);
      if (apiData) {
        setData(apiData.data);
      }
    }
    fetchData();
  }, [city]);
  return (
    <div className="big-card">
      {data ? 
        <div className="big-card-container">
          <div className="big-card-image">
            <img src={`${iconUrl}${data.weather[0].icon}.png`} alt="icon"/>
          </div>
          <div className="big-card-content">
            <Text>City {data.name}</Text>
            <Text>Wind Deg {data.wind.deg}</Text>
            <Text>Wind Speed {data.wind.speed}</Text>
            <Text>humidity {data.main.humidity}</Text>
            <Text>pressure {data.main.pressure}</Text>
          </div>
          <div className="big-card-content">
            <Text>Description {data.weather[0].description}</Text>
            <Text>feels_like {data.main.feels_like}</Text>
            <Text>temp {data.main.temp}</Text>
            <Text>temp_max {data.main.temp_max}</Text>
            <Text>temp_min {data.main.temp_min}</Text>
          </div>
        </div>
        : 
        <Loader />
      }
    </div>
  );
};