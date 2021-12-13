import { Input } from "@chakra-ui/input";
import React from "react";

const SearchCity = ({ fetchCity }) => {
  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      fetchCity(event.target.value);
    }
  };

  return (
    <>
      <Input
        placeholder="Search for a City . . ."
        mr={3}
        onKeyPress={handleInputChange}
      ></Input>
    </>
  );
};

export default SearchCity;
