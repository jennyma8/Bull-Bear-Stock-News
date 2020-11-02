import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext/AppContext";
import Spinner from "../assets/CircularSpinner";
import { useParams } from "react-router-dom";

require("dotenv").config();
const apiKeyAlpha = process.env.REACT_APP_ALPHA_API;

const StockQuote = () => {
  const [data, setdata] = React.useState();
  const { ticker } = useContext(AppContext);

  React.useEffect(() => {
    //input symbol
    //INTRADAY 1MIN
    // console.log(ticker, "IN STOCK QUOTE");
    if (ticker !== "") {
      fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=${apiKeyAlpha}`
      )
        .then(function (response) {
          // console.log(response);
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }

          // Examine the text in the response
          response.json().then(function (data) {
            console.log(data);
            // console.log(Object.keys(data));

            setdata(data);
          });
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
        });
    }
  }, [ticker]);

  if (!data) {
    if (ticker === "") {
      return <></>;
    } else {
      return <Spinner />;
    }
  }

  //when the ticker doesn't exist or API call exceeded
  // if (Object.keys(data) == "Error Message" || Object.keys(data) == "Note") {
  //   return (
  //     <h1>
  //       Sorry, no result found. Please retry another ticker or retry in 1
  //       minute.
  //     </h1>
  //   );
  // }
  // format: object of object

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

const Wrapper = styled.div`
  background-color: white;
  font-size: 30px;
`;
export default StockQuote;
