import React, { useContext } from "react";
import { Unit } from "../../App";
import Units from "./Units";
import { Heading, Text, Stack, Grid, GridItem } from "@chakra-ui/react";

const Temperature = ({ weather }) => {
  const unit = useContext(Unit);
  return (
    <>
      <Heading size="md">Temperature</Heading>
      <Heading size="lg">
        {weather.main.temp} <Units unit={unit} />
      </Heading>
      {weather.main.temp_max !== weather.main.temp_min ? (
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem>
            <Stack>
              <Text fontSize="lg">Low</Text>
              <Text fontSize="xl">
                {weather.main.temp_min} <Units unit={unit} />
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize="lg">High</Text>
              <Text fontSize="xl">
                {weather.main.temp_max} <Units unit={unit} />
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      ) : null}
    </>
  );
};

export default Temperature;
