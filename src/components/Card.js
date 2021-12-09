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

const WeatherCard = ({ forecast }) => {

  return(
    <Center py={6} id={forecast.dt}>
        <Box
          maxW={"600px"}
          w={"full"}
          h={600}
          bg="white"
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          mt={10}
          overflow={"hidden"}
        >
          <Stack>
            <Heading
              color="gray.700"
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
            <Text>{forecast.weather[0].main}</Text>
            <Text>{forecast.weather[0].description}</Text>
            <Heading size="md">Temperatura Actual</Heading>
            <Heading size="lg">{forecast.main.temp} °C</Heading>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem>
                <Stack>
                  <Text>Temperatura minima</Text>
                  <Text fontSize="xl">{forecast.main.temp_min} °C</Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Stack>
                  <Text>Temperatura max</Text>
                  <Text fontSize="xl">{forecast.main.temp_max} °C</Text>
                </Stack>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)">
              <Box textAlign="left"><Stack>
                  <Text>Humidity</Text>
                  <Text fontSize="xl">{forecast.main.humidity} %</Text>
                </Stack></Box>
              <Box textAlign="right"><Stack>
                  <Text>Wind</Text>
                  <Text fontSize="xl">{forecast.wind.speed} %</Text>
                </Stack></Box>
              <Box textAlign="left"><Stack>
                  <Text>Pressure</Text>
                  <Text fontSize="xl">{forecast.main.pressure} hPa</Text>
                </Stack></Box>
              <Box textAlign="right"><Stack>
                  <Text>Visibility</Text>
                  <Text fontSize="xl">{forecast.main.pressure} hPa</Text>
                </Stack></Box>
            </Grid>
          </Stack>
        </Box>
      </Center>)
    
    
    
    
  
};

export default WeatherCard;
