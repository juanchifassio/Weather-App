import { Center, useColorModeValue, Heading, Box } from "@chakra-ui/react";
import React from "react";
import SocialMedia from "./Social";

const Footer = () => {
  return (
    <Box>
      <Center
        as={"footer"}
        h="10vh"
        bg={useColorModeValue("gray.100", "gray.900")}
        justifyContent={"space-between"}
        px={10}
      >
        <Heading size="md">By Juan Martin Fassio</Heading>
        <SocialMedia />
      </Center>
    </Box>
  );
};

export default Footer;
