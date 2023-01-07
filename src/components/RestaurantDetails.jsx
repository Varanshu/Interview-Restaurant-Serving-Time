import React, { useState } from "react";
import details from "../static/restaurant.json";
import Details from "./Details";
const RestaurantDetails = () => {
  const { menuDetails } = details;
  const [resulDetails, setResultDetails] = useState();

  return (
    <div>
      {Object.values(menuDetails).map((item, index) => (
        <div className={`detail-container`}>
          <h1>{Object.keys(menuDetails)[index]}</h1>
          <Details details={item} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetails;
