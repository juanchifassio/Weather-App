<Center id={weather.dt} my={20}>
  <Box
    maxW={"600px"}
    w={"full"}
    h={650}
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
        fontSize={"4xl"}
        fontFamily={"body"}
      >
        {city}
      </Heading>
      <Text color={"gray.500"}>
        <DateFormat date={weather.dt_txt} />
      </Text>
      <Box px="180">
        <Image
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={weather.weather[0].icon}
          borderRadius="full"
          boxSize="150px"
        />
      </Box>
    </Stack>
    <Stack>
      <Text>
        {weather.weather[0].main} ({weather.weather[0].description})
      </Text>
      <Heading size="md">Temperature</Heading>
      <Heading size="lg">{weather.main.temp} °C</Heading>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Stack>
            <Text>Low</Text>
            <Text fontSize="xl">{weather.main.temp_min} °C</Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Text>High</Text>
            <Text fontSize="xl">{weather.main.temp_max} °C</Text>
          </Stack>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)">
        <Box textAlign="left" ml={10} my={4} mt={10}>
          <Stack>
            <Text>Humidity</Text>
            <Text fontSize="xl">{weather.main.humidity} %</Text>
          </Stack>
        </Box>
        <Box textAlign="right" mr={10} my={4} mt={10}>
          <Stack>
            <Text>Wind</Text>
            <Text fontSize="xl">{weather.wind.speed} %</Text>
          </Stack>
        </Box>
        <Box textAlign="left" ml={10}>
          <Stack>
            <Text>Pressure</Text>
            <Text fontSize="xl">{weather.main.pressure} hPa</Text>
          </Stack>
        </Box>
        <Box textAlign="right" mr={10}>
          <Stack>
            <Text>Clouds</Text>
            <Text fontSize="xl">{weather.clouds.all} % </Text>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  </Box>
</Center>;
