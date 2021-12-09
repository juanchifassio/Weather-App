import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import WeatherCard from "./Card";

const CardsCarousel = ({ weather }) => {
  return (
    <Carousel showThumbs={false}>
      <WeatherCard weather={weather} />
    </Carousel>
  );
};

export default CardsCarousel;
