import React from "react";
import { Box, Spinner, Center, useColorModeValue } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Center mt={5} mb={10}>
      <Box
        maxW={"600px"}
        w={"full"}
        h={700}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"dark-lg"}
        rounded={"2xl"}
        p={100}
        py={200}
        mt={10}
        overflow={"hidden"}
      >
        <Spinner size="xl" />
      </Box>
    </Center>
  );
};

export default LoadingSpinner;
