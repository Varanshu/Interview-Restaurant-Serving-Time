import React from "react";
const Details = ({ details }) => {
  console.log(details);

  return (
    <div className="details">
      {details.map(({ foodname, servingtime, outofstock, foodid }, index) => {
        const hrs = new Date().getHours();
        const mins = new Date().getMinutes();
        const startServingTime = servingtime
          .split("-")[0]
          .split(":")
          .map((i) => parseInt(i));
        const endServingTime = servingtime
          .split("-")[1]
          .split(":")
          .map((i) => parseInt(i));

        const displayItem =
          hrs > startServingTime[0] &&
          mins > startServingTime[1] &&
          hrs < endServingTime[0] &&
          mins < endServingTime[1];

        return (
          displayItem && (
            <div className={`detail-item ${outofstock ? "out-of-stock" : ""}`}>
              {foodname}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Details;
