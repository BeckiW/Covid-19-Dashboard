import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStats from "../GlobalStats";

import "./style.css";

const Content = () => {
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSummaryData = url => {
    console.log("hello");
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setLoading(false);
        setSummaryData(json);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    console.log("here");
    const url = "https://api.covid19api.com/summary";
    fetchSummaryData(url);
  }, []);

  console.log(Object.values(summaryData));

  return (
    <div>
      <div id="center" class="main center">
        <div class="mainInner">
          <GlobalStats data={Object.values(summaryData)[0]} />
        </div>
        <div class="mainInner">
          <div>HELLO</div>
        </div>
        <div class="mainInner">
          <div>HELLO</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
