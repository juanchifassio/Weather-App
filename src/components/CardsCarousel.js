import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WeatherCard from "./Card";
import NowCard from "./NowCard";

const CardsCarousel = ({ weathers }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoFocus={true}
      useKeyboardArrows={true}
    >
      {weathers.list !== undefined ? (
        weathers.list.map((forecast) => {
          return <WeatherCard forecast={forecast} />;
        })
      ) : (weathers.base!==undefined?(
        <NowCard weather={weathers} />
      ):(null))}
    </Carousel>
  );
};

export default CardsCarousel;
