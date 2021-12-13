import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Temperature from "./Temperature";
import Conditions from "./Conditions";
import FormatDate from "./Date";
import TitleCity from "./TitleCity";

const WeatherCard = (props) => {
  const forecast = props.forecast;
  const country = props.country;

  return (
    <Center key={forecast.dt} mt={5} mb={10}>
      <Box
        maxW={"600px"}
        w={"full"}
        h={700}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"dark-lg"}
        rounded={"2xl"}
        p={6}
        mt={10}
        overflow={"hidden"}
      >
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"4xl"}
            fontFamily={"body"}
          >
            <TitleCity />, {country}
          </Heading>
          <Text color={"gray.500"}>
            <FormatDate date={forecast.dt_txt} />
          </Text>
          <Center px={{ sm: "0", md: "180", lg: "180", xl: "180" }}>
            <Image
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
              borderRadius="full"
              boxSize="180px"
              minWidth={180}
              maxW={180}
            />
          </Center>
        </Stack>
        <Stack>
          <Text>{forecast.weather[0].main} </Text>
          <Text>({forecast.weather[0].description})</Text>
          <Temperature weather={forecast} />
          <Conditions weather={forecast} />
        </Stack>
      </Box>
    </Center>
  );
};

export default WeatherCard;
