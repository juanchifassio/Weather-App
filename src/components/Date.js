import React from "react";

const DateFormat = () => {
  var today = new Date();
  var day = String(today.getDate());
  var month = today.toLocaleString("en-us", { month: "long" });
  var hours = String(today.getHours());
  var minutes = String(today.getMinutes());

  return <>{`${month} ${day}, ${hours}:${minutes}`}</>;
};

export default DateFormat;
