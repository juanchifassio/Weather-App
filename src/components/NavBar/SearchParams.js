import { Select } from "@chakra-ui/select";
import React from "react";

const SearchParams = ({ fetchData }) => {
  const days = [
    { label: "Now", value: "1" },
    { label: "1 Day", value: "8" },
    { label: "2 Days", value: "16" },
    { label: "3 Days", value: "24" },
    { label: "4 Days", value: "32" },
    { label: "5 Days", value: "40" },
  ];
  const units = [
    { label: "Metric", value: "metric" },
    { label: "Standard", value: "standard" },
    { label: "Imperial", value: "imperial" },
  ];

  const daysOptions = days.map((day) => {
    return (
      <option value={day.value} key={day.value}>
        {day.label}
      </option>
    );
  });

  const unitsOptions = units.map((unit) => {
    return (
      <option value={unit.value} key={unit.value}>
        {unit.label}
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
