import React from "react";
import { Box, Text, Stack, Grid } from "@chakra-ui/react";

const Conditions = ({ weather }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <Box textAlign="left" ml={10} my={4} mt={5}>
        <Stack>
          <Text fontSize="lg">Humidity</Text>
          <Text fontSize="xl">{weather.main.humidity} %</Text>
        </Stack>
      </Box>
      <Box textAlign="right" mr={10} my={4} mt={5}>
        <Stack>
          <Text fontSize="lg">Wind</Text>
          <Text fontSize="xl">{weather.wind.speed} %</Text>
        </Stack>
      </Box>
      <Box textAlign="left" ml={10}>
        <Stack>
          <Text fontSize="lg">Pressure</Text>
          <Text fontSize="xl">{weather.main.pressure} hPa</Text>
        </Stack>
      </Box>
      <Box textAlign="right" mr={10}>
        <Stack>
          <Text fontSize="lg">Cloudiness</Text>
          <Text fontSize="xl">{weather.clouds.all} % </Text>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Conditions;
