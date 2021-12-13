import React from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import SearchParams from "./SearchParams";
import SearchCity from "./SearchCity";

const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const CityData = props.cityData;

  const fetchData = (data) => {
    props.Data(data);
  };

  const fetchCity = (city) => {
    CityData[Object.keys(CityData)[0]](city);
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        w="100%"
        minH="7vh"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading size="md" display={{ base: "none", md: "block" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              Weather App
            </Link>
          </Heading>
          <Flex>
            <SearchCity fetchCity={fetchCity} />
            <SearchParams fetchData={fetchData} />
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <FaMoon size={70} />
              ) : (
                <FaSun size={70} />
              )}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;

//{{ md: 0, lg: 100, xl: 300 }}
