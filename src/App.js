import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import CardsCarousel from "./components/CardsCarousel";
import Navbar from "./components/NavBar";
import axios from "axios";

function App() {
  const [weathers, setWeather] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [days, setDays] = useState("2");
  const [cityName, setCityName] = useState("Tokyo");

  const APIkey = "c1d3506f6b3576257e566deecc94be4c";
  const GETrequest = `//api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${days}&units=${unit}&appid=${APIkey}`;


  const Data = (data) => {
    isNaN(data) === true ? setUnit(data) : setDays(String(data * 8));
  };

  var cityData = (city) => {
    setCityName(city);
  };

  useEffect(() => {
    axios.get(GETrequest).then((res) => {
      setWeather(res.data);
    });
  }, [cityName, unit, days]);


  return (
    <Box>
      <Navbar Data={Data} cityData={{ cityData }} />
      <CardsCarousel weathers={weathers} />

    </Box>
  );
}

export default App;
