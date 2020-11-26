import React from "react";
import styled from "styled-components";
import { FcCurrencyExchange } from "react-icons/fc";
import Spinner from "../assets/CircularSpinner";
import { useTranslation } from "react-i18next";
import { GrBitcoin } from "react-icons/gr";
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
        <h2>
          {t("Exchange.1")}
          <FcCurrencyExchange style={{ height: 45, width: 45 }} />
        </h2>
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
        <br></br>
        <h2>
          {t("Bitcoin.1")} <GrBitcoin />
        </h2>
        <div>BTC = $17,782.30 USD</div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(to bottom right, #3d5a80 0%, #ccffff 100%);
  position: fixed;
  border-radius: 20px;
  margin-top: 120px;
  margin-left: 0px;
  height: 100%;
  width: 295px;
  color: white;
  padding: 15px;
  padding-top: 60px;

  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
`;

export default FX;
