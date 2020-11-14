import React from "react";
import styled from "styled-components";
import { FcCurrencyExchange } from "react-icons/fc";
import Spinner from "../assets/CircularSpinner";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";

require("dotenv").config();
const apiKey = process.env.REACT_APP_NEWS_API;

const FX = () => {
  const [data, setdata] = React.useState();

  const { t } = useTranslation();

  React.useEffect(() => {
    //FX

    fetch(
      `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=USD&to_symbol=CAD&interval=1min&apikey=${apiKey}`
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
          //   console.log(data);
          setdata(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, []);

  if (!data) {
    return <Spinner />;
  }
  if (Object.keys(data) == "Error Message" || Object.keys(data) == "Note") {
    return <></>;
  }
  //format: array of object
  return (
    <>
      <Wrapper>
        <h1>
          {t("Exchange.1")}
          <FcCurrencyExchange />
        </h1>
        <div>
          {t("FromFX.1")}: {data["Meta Data"]["2. From Symbol"]}
        </div>
        <div>
          {t("ToFX.1")}: {data["Meta Data"]["3. To Symbol"]}
        </div>
        <div>
          {t("Conversion.1")}:{" "}
          <strong>
            {Object.entries(data["Time Series FX (1min)"])[0][1]["4. close"]}
          </strong>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  margin-top: 120px;
  margin-left: 0px;
  height: 100%;
  border-right: 1px solid lightgrey;
  background: linear-gradient(to bottom right, #000066 22%, #ffffff 100%);
  color: white;
  padding: 15px;

  div {
  }
  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
`;

export default FX;
