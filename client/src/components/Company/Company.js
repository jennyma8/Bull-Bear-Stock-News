import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../AppContext/AppContext";
require("dotenv").config();
const apiKeyAlpha = process.env.REACT_APP_ALPHA_API;

const Company = () => {
  const [data, setdata] = React.useState();
  const { ticker } = useContext(AppContext);

  React.useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKeyAlpha}`
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
        <div>Company Name: {data.Name}</div>
        <div>Description: {data.Description}</div>
        <div>Exchange: {data.Exchange}</div>
        <div>Country: {data.Country}</div>
        <div>Sector: {data.Sector}</div>
        <div>Industry: {data.Industry}</div>
        <div>Address: {data.Address}</div>
        {/* <div>52 Week High: {data.52WeekHigh}</div>
        <div>52 Weed Low: {data.52WeekLow}</div> */}
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
export default Company;
