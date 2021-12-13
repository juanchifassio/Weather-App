import React, { useContext } from "react";
import { Context } from "../../App";

const TitleCity = () => {
  const city = useContext(Context);

  if (city.includes(",") === true) {
    var titleCity = city.split(",");
    return <>{titleCity[0]}</>;
  } else {
    return <>{city}</>;
  }
};

export default TitleCity;
