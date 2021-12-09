import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import WeatherCard from "./Card";

const CardsCarousel = ( {weathers} ) => {

//<WeatherCard forecast={forecast} />



  return (
    <Carousel showThumbs={false}>
      
      {weathers.list !== undefined ? (weathers.list.map((forecast) => {
  return <WeatherCard forecast={forecast} />})):(null)}
    </Carousel>
  );
};

export default CardsCarousel;
