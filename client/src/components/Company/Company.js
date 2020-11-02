import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext/AppContext";
import Spinner from "../assets/CircularSpinner";

require("dotenv").config();
const apiKeyAlpha = process.env.REACT_APP_ALPHA_API;

const Company = () => {
  const [data, setdata] = React.useState();
  const { ticker } = useContext(AppContext);

  React.useEffect(() => {
    if (ticker !== "") {
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
    }
  }, [ticker]);

  if (!data) {
    if (ticker === "") {
      return <></>;
    } else {
      return <Spinner />;
    }
  }

  // if (data == "") {
  //   return <></>;
  // }
  //format: object of object
  return (
    <>
      <Wrapper>
        <div>Company Name: {data.Name}</div>
        <Desc>
          <strong>Description:</strong> {data.Description}
        </Desc>
        <div>Exchange: {data.Exchange}</div>
        <div>Country: {data.Country}</div>
        <div>Sector: {data.Sector}</div>
        <div>Industry: {data.Industry}</div>
        <div>Address: {data.Address}</div>
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
  margin-top: 20px;
  background-color: lightgrey;
`;

const Desc = styled.div`
  padding: 30px;
`;
export default Company;
