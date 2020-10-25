import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import StockQuote from "../../components/StockQuote/StockQuote";
import StockNews from "../StockNews/StockNews";
import Search from "../../components/Search/Search";
import Company from "../Company/Company";

const StockPage = (props) => {
  const [stockPage, setStockPage] = useState({});

  useEffect(() => {
    fetch("https://localhost:3000/stocks/" + props.match.params.ticker)
      .then((res) => res.json())
      .then((result) => {
        setStockPage(result);
      });
  });
  function changeStockPage(e) {}
  return (
    <>
      <Wrapper>
        <Search />
        <a href={"/stocks/" + ticker}>Edit</a>
        <StockWrapper>
          <QuoteWrapper>
            <StockQuote />
            <Company />
          </QuoteWrapper>
          <StockNews />
        </StockWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const StockWrapper = styled.div`
  display: flex;
`;

const QuoteWrapper = styled.div``;

export default StockPage;
