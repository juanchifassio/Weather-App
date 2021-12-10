import React, { useContext } from "react";
import { Context } from "../App";
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
import { Image } from "@chakra-ui/react";
import DateFormat from "./Date";

const NowCard = ({ weather }) => {
  const city = useContext(Context);
  console.log(weather);
  return <p>ogete</p>;
};

export default NowCard;
