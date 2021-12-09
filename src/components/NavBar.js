import React from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import SearchParams from "./SearchParams";
import SearchCity from "./SearchCity";

const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const CityData = props.cityData;

  const fetchData = (datita) => {
    props.Data(datita);
  };

  const fetchCity = (city) => {
    CityData[Object.keys(CityData)[0]](city);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading size="md">Weather App</Heading>
          <Flex alignItems={"center"}>
            <SearchCity fetchCity={fetchCity} />
            <SearchParams fetchData={fetchData} />
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
