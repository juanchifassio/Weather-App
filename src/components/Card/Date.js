import moment from "moment";
import React from "react";

const FormatDate = (props) => {
  if (props.hour !== undefined) {
    var timezone = props.timezone !== undefined ? props.timezone : 0;
    let unix_timestamp = props.hour + timezone + 10800;

    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    var formattedTime = hours + ":" + minutes.substr(-2);
  }

  if (props.date !== undefined) {
    var Day = props.date.split(" ")[0];
    var dayArray = Day.split("-");

    var constructor = new Date(dayArray[0], dayArray[1] - 1, dayArray[2]);
    var day = moment(constructor).format("MMMM D Y");
  }

  const TodayDate = () => {
    var today = new Date();

    var Today =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var dayArray = Today.split("-");

    var constructor = new Date(dayArray[0], dayArray[1] - 1, dayArray[2]);
    var Today1 = moment(constructor).format("MMMM D Y");
    return Today1;
  };
  return (
    <>
      {day !== undefined ? day : TodayDate()} {formattedTime}
    </>
  );
};

export default FormatDate;
