import moment from "moment";
import React from "react";

const DateFormat = ({ date }) => {
  const Day = date.split(" ")[0];
  const Hour = date.split(" ")[1].slice(0, -3);

  const dayArray = Day.split("-");

  var constructor = new Date(dayArray[0], dayArray[1] - 1, dayArray[2]);
  var day = moment(constructor).format("MMMM D Y");

  return <>{`${day}, ${Hour} UTC`}</>;
};

export default DateFormat;
