import React from "react";

const Units = ({ unit }) => {
  const getUnits = (unit) => {
    if (unit === "metric") {
      return "°C";
    } else if (unit === "standard") {
      return "K";
    } else {
      return "°F";
    }
  };

  return <>{getUnits(unit)}</>;
};

export default Units;
