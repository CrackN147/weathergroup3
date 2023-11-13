import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getWeatherForecast } from "global/api";
import { Loader } from "components/elements/Loader";
import { SmallCard } from "components/cards";
export const Carousel = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await getWeatherForecast('q=Tbilisi');
      if (apiData) {
        console.log(apiData.data);
        setData(apiData.data);
      }
    }
    fetchData();
  }, []);
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