import { Select } from "@chakra-ui/select";
import React from "react";

const SearchParams = ({ fetchData }, { fetchCity }) => {
  const days = ["1", "2", "3", "4", "5"];
  const units = ["metric", "standard", "imperial"];

  const daysOptions = days.map((day) => {
    return (
      <option value={day} key={day}>
        {day}
      </option>
    );
  });

  const unitsOptions = units.map((unit) => {
    return (
      <option value={unit} key={unit}>
        {unit}
      </option>
    );
  });

  return (
    <>
      <Select
        mr={3}
        onChange={(e) => {
          fetchData(e.target.value);
        }}
      >
        {daysOptions}
      </Select>
      <Select
        mr={3}
        onChange={(e) => {
          fetchData(e.target.value);
        }}
      >
        {unitsOptions}
      </Select>
    </>
  );
};

export default SearchParams;
