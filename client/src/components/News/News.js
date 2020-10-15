import React from "react";
import styled from "styled-components";
const finnhub = require("finnhub");
require("dotenv").config();

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API;
const finnhubClient = new finnhub.DefaultApi();
// console.log(finnhubClient); success

//quote
finnhubClient.quote("AAPL", (error, data, response) => {
  console.log(data);
});

const News = () => {
  const [data, setdata] = React.useState();

  React.useEffect(() => {
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
  }, []);

  if (!data) {
    return <h1>loading</h1>;
  }

  return (
    <>
      {/* <div>Symbol: {data["Meta Data"]["2. Symbol"]}</div>
      <div>Last Refreshed: {data["Meta Data"]["3. Last Refreshed"]}</div>
      <div>Last Update: {Object.entries(data["Time Series (5min)"])[0][0]}</div>
      <div>
        Last Price:{" "}
        {Object.entries(data["Time Series (5min)"])[0][1]["4. close"]}
      </div> */}
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
export default News;
