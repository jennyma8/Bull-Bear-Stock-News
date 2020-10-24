import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../AppContext/AppContext";
require("dotenv").config();
const apiKeyAlpha = process.env.REACT_APP_ALPHA_API;

const StockQuote = () => {
  const [data, setdata] = React.useState();
  const { ticker } = useContext(AppContext);

  //create new state of ticket and setTicker

  React.useEffect(() => {
    //input symbol
    //INTRADAY 1MIN
    // console.log(ticker);
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=${apiKeyAlpha}`
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
  }, [ticker]);

  if (!data) {
    return <h1>loading</h1>;
  }

  //format: object of object
  return (
    <>
      <Wrapper>
        <div>Symbol: {data["Meta Data"]["2. Symbol"]}</div>
        <div>
          Last Price:{" "}
          {Object.entries(data["Time Series (1min)"])[0][1]["4. close"]}
        </div>
        <div>
          Last Update: {Object.entries(data["Time Series (1min)"])[0][0]}
        </div>
      </Wrapper>
    </>
  );
};

/* <div>
{Object.values(data["Time Series (5min)"]).map(([date, stockPrice]) => {
  return <div>{date}<div>Last price: {stockPrice["4. close"]}</div>;
})}
</div> */

// company overview
// https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo

const Wrapper = styled.div`
  background-color: lightgrey;
`;
export default StockQuote;
