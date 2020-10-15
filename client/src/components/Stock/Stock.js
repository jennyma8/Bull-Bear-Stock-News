import React from "react";
import styled from "styled-components";
const finnhub = require("finnhub");
require("dotenv").config();

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API;
const finnhubClient = new finnhub.DefaultApi();
// console.log(finnhubClient); success

//company news
finnhubClient.companyNews(
  "AAPL", //replace with params
  "2020-05-01", //replace with params
  "2020-05-01", //replace with params
  (error, data, response) => {
    if (error) {
      console.error(error);
      //error 429 when limit is exceeded, 30 API calls/second limit
    } else {
      //   console.log(data[0].datetime);
      //   console.log(data[0].headline);
      //   console.log(data[0].id);
      //   console.log(data[0].image);
      //   console.log(data[0].source);
      //   console.log(data[0].summary);
      console.log(data[0].url);
    }
  }
);

// category: "company"
// datetime: 1588377600
// headline: "WhatsApp Suddenly Gets Powerful New Security Boost: Here’s Why It Affects You"
// id: 691320
// image: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1203670407%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D5000%26cropY1%3D259%26cropY2%3D3072"
// related: "AAPL"
// source: "https://www.forbes.com"
// summary: "WhatsApp has been seriously boosted this week—and from two very unlikely sources."
// url: "https://www.forbes.com

//quote
finnhubClient.quote("AAPL", (error, data, response) => {
  console.log(data);
});

//DAILY ADJUSTED
fetch(
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=process.env.ALPHA_API"
)
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

//INTRADAY 5MIN

const Stock = () => {
  const [data, setdata] = React.useState();

  React.useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=process.env.ALPHA_API"
    )
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
          setdata(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, []);

  if (!data) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <div>Symbol: {data["Meta Data"]["2. Symbol"]}</div>
      <div>Last Refreshed: {data["Meta Data"]["3. Last Refreshed"]}</div>
      <div>Last Update: {Object.entries(data["Time Series (5min)"])[0][0]}</div>
      <div>
        Last Price:{" "}
        {Object.entries(data["Time Series (5min)"])[0][1]["4. close"]}
      </div>
    </>
  );
};

{
  /* <div>
{Object.values(data["Time Series (5min)"]).map(([date, stockPrice]) => {
  return <div>{date}<div>Last price: {stockPrice["4. close"]}</div>;
})}
</div> */
}
export default Stock;
