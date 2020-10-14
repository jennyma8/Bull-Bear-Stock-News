import React from "react";
import styled from "styled-components";
const finnhub = require("finnhub");
require("dotenv").config();

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API;
const finnhubClient = new finnhub.DefaultApi();
// console.log(finnhubClient); success

//call
finnhubClient.companyNews(
  "AAPL", //replace with params
  "2020-01-01", //replace with params
  "2020-05-01", //replace with params
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  }
);

const Stock = () => {
  // fetchStock() {
  //     const API_KEY="LLVUYLIO8BXDUHHK"
  //     let API_Call=
  // }
  //Company News
  return <>hello from Stock</>;
};

export default Stock;
