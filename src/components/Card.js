import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import DateFormat from "./Date";

const WeatherCard = ({ weathers }) => {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"600px"}
          w={"full"}
          h={600}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          mt={10}
          overflow={"hidden"}
        >
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              CITY NAME
            </Heading>
            <Text color={"gray.500"}>
              <DateFormat />
            </Text>
            <Center>imagen</Center>
          </Stack>
          <Stack>
            <Text>weather.weather.main</Text>
            <Text>weather.weather.description</Text>
            <Heading size="md">Temperatura Actual</Heading>
            <Heading size="lg">weather.main.temp °C</Heading>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem>
                <Stack>
                  <Text>Temperatura minima</Text>
                  <Text fontSize="xl">weather.main.temp_min °C</Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Stack>
                  <Text>Temperatura max</Text>
                  <Text fontSize="xl">weather.main.temp_max °C</Text>
                </Stack>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)">
              <Box textAlign="left">Humedad %</Box>
              <Box textAlign="right">Viento meter/sec</Box>
              <Box textAlign="left">Presion hPa</Box>
              <Box textAlign="right">Visibilidad metres</Box>
            </Grid>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default WeatherCard;
