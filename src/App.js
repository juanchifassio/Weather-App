import { useState, useEffect, createContext } from "react";
import { Box } from "@chakra-ui/react";
import CardsCarousel from "./components/CardsCarousel";
import Navbar from "./components/NavBar";
import axios from "axios";

export const Context = createContext("");

function App() {
  const [weathers, setWeather] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [days, setDays] = useState("1");
  const [cityName, setCityName] = useState("");

  const APIkey = "c1d3506f6b3576257e566deecc94be4c";
  const GETrequestForecast = `//api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${days}&units=${unit}&appid=${APIkey}`;
  const GETrequestCurrent = `//api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${APIkey}`;

  const Data = (data) => {
    isNaN(data) === true ? setUnit(data) : setDays(String(data));
  };

  var cityData = (city) => {
    setCityName(city);
  };

  useEffect(() => {
    if (days === "1") {
      axios.get(GETrequestCurrent).then((res) => {
        setWeather(res.data);
      });
    }

    if (days !== "1") {
      axios.get(GETrequestForecast).then((res) => {
        setWeather(res.data);
      });
    }
  }, [cityName, unit, days]);

  return (
    <Box>
      <Context.Provider value={cityName}>
        <Navbar Data={Data} cityData={{ cityData }} />
        {cityName !== undefined ? (
          <CardsCarousel weathers={weathers} cityName={cityName} />
        ) : null}
      </Context.Provider>
    </Box>
  );
}

export default App;
