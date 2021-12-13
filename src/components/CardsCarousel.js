import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Day } from "../App";
import WeatherCard from "./Card/Card";
import NowCard from "./Card/NowCard";
import LoadingSpinner from "./Spinner";

const CardsCarousel = ({ weathers }) => {
  const days = useContext(Day);

  const Country = weathers.city !== undefined ? weathers.city.country : null;
  const Timezone = weathers.city !== undefined ? weathers.city.timezone : null;

  const ArrFilter = [0, 8, 16, 24, 32];

  const filter = (ArrFilter, weathers, days) => {
    if (weathers.list[parseInt(days) - 1] !== undefined) {
      var Arr = ArrFilter.slice(0, parseInt(days) / 8);
      var newArr = Arr.map((item) => weathers.list[item]);
      return newArr;
    } else {
      return weathers.list;
    }
  };

  function callback(element) {
    return (
      <WeatherCard
        forecast={element}
        country={this.country}
        timezone={this.timezone}
      />
    );
  }

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoFocus={true}
      useKeyboardArrows={true}
    >
      {weathers.list !== undefined ? (
        filter(ArrFilter, weathers, days).map(callback, {
          country: Country,
          timezone: Timezone,
        })
      ) : weathers.base !== undefined ? (
        <NowCard weather={weathers} />
      ) : (
        <LoadingSpinner />
      )}
    </Carousel>
  );
};

export default CardsCarousel;
