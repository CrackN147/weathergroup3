import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { DataContext } from "global/contexts/DataContext";
import { getWeatherForecast } from "global/api";
import { Loader } from "components/elements/Loader";
import { SmallCard } from "components/cards";
export const Carousel = (props) => {
  const { city } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getWeatherForecast(`q=${city}`);
      if (apiData) {
        // console.log(apiData.data);
        setData(apiData.data);
      }
    }
    fetchData();
  }, [city]);
  return (
    <div className="carousel">
      {data ?
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
        >
          {data.list.map((item, index) => (
            <SwiperSlide key={index}>
              <SmallCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        :
        <Loader />
      }
    </div>
  );
};