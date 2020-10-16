import React from "react";
import styled from "styled-components";
require("dotenv").config();

const apiKeyAlpha = process.env.REACT_APP_ALPHA_API;

const Stock = () => {
  const [data, setdata] = React.useState();

  React.useEffect(() => {
    //input symbol
    //INTRADAY 5MIN
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKeyAlpha}`
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
          // console.log(data);
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

  //format: object of object
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

/* <div>
{Object.values(data["Time Series (5min)"]).map(([date, stockPrice]) => {
  return <div>{date}<div>Last price: {stockPrice["4. close"]}</div>;
})}
</div> */

export default Stock;
