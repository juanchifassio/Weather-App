import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
} from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import CardsCarousel from "./components/CardsCarousel";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import LoadingSpinner from "./components/Spinner";

export const Context = createContext("");
export const Unit = createContext("");
export const Day = createContext("");

require("dotenv").config();

function App() {
  const [weathers, setWeather] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [days, setDays] = useState("1");
  const [cityName, setCityName] = useState("");

  const GETrequestForecast = `//api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${days}&units=${unit}&appid=${process.env.REACT_APP_APIkey}`;
  const GETrequestWeather = `//api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${process.env.REACT_APP_APIkey}`;

  const Data = (data) => {
    isNaN(data) === true ? setUnit(data) : setDays(String(data));
  };

  var cityData = (city) => {
    setCityName(city);
  };

  const setCoor = (pos) => {
    var coords = pos.coords;
    axios
      .get(
        `//api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_APP_APIkey}&units=${unit}`
      )
      .then((res) => {
        setWeather(res.data);
      });
  };

  // this one renders only on first render (getting the user's current location's weather)

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
    } else {
      navigator.geolocation.getCurrentPosition(setCoor); //on success calls setCoors function
    }
  }, []);

  // make this guys (axios get requests) skip first render

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      if (days === "1") {
        axios.get(GETrequestWeather).then((res) => {
          setWeather(res.data);
        });
      }

      if (days > parseInt("1")) {
        axios.get(GETrequestForecast).then((res) => {
          setWeather(res.data);
        });
      }
    }
  }, [cityName, unit, days]);

  return (
    <Box>
      <Navbar Data={Data} cityData={{ cityData }} />
      <Box
        bg={useColorModeValue("white", "gray.700")}
        minH="83vh"
        display={"flex"}
        flexDirection={"column"}
      >
        <Context.Provider value={cityName}>
          <Unit.Provider value={unit}>
            <Day.Provider value={days}>
              {cityName !== undefined ? (
                <CardsCarousel weathers={weathers} />
              ) : (
                <LoadingSpinner />
              )}
            </Day.Provider>
          </Unit.Provider>
        </Context.Provider>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
