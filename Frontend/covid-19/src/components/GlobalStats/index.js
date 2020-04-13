import React, { useEffect, useState } from "react";

import "./style.css";

const GlobalStats = ({ data }) => {
  console.log({ data });

  if (data === undefined) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className="borderBox">
        <p className="cases">New Confirmed: {data.NewConfirmed} </p>
        <p className="cases">Total Confirmed: {data.TotalConfirmed}</p>
        <p className="cases">New Deaths: {data.NewDeaths}</p>
        <p className="cases">Total Deaths: {data.TotalDeaths}</p>
        <p className="cases">New Recovered: {data.NewRecovered}</p>
        <p className="cases">Total Recovered: {data.TotalRecovered}</p>
      </div>
    </div>
  );
};

export default GlobalStats;
