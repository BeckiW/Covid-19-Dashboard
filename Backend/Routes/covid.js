const router = require("express").Router();
const axios = require('axios');

let sourceData = {};
let covidData = {};

const API_URL = "https://api.covid19api.com/all"
const DEBUG_MODE = true

function fetchData()
{
  if (DEBUG_MODE)
  {
    sourceData = require('../data/covid-data-20200413.json');
    processData();
  }
  else 
  {
    axios.get(API_URL)
    .then(function (response) {
      console.log(response);
      sourceData = response.data;
      processData();
    })
    .catch(function (error) {
      console.log(error);
    })  
  }
}

function processData()
{
  // Clear the current data
  covidData = {}
  covidData.latestByCountry = generateLatestByCountry();
}

function generateLatestByCountry() 
{
  let result = {};

  sourceData.forEach((item) => {
    if (!(item.CountryCode in result)) {
      result[item.CountryCode] = item;
    } else {
      if (item.Date > result[item.CountryCode].Date) {
        result[item.CountryCode] = item;
      }
    }
  })

  return result
}

fetchData();

router.route("/").get((req, res) => {

});

router.route("/latestByCountry").get((req, res) => {
  res.json(covidData.latestByCountry);  
})

module.exports = router;
