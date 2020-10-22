import React from "react";
import styled from "styled-components";
import StockQuote from "../../components/StockQuote/StockQuote";
import StockNews from "../StockNews/StockNews";
import Search from "../../components/Search/Search";

const StockPage = () => {
  return (
    <>
      <Search />

      <StockQuote />
      <StockNews />
    </>
  );
};

export default StockPage;
