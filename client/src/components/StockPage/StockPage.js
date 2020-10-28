import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import StockQuote from "../../components/StockQuote/StockQuote";
import StockNews from "../StockNews/StockNews";
import Search from "../../components/Search/Search";
import Company from "../Company/Company";

const StockPage = () => {
  return (
    <>
      <Wrapper>
        <Search />

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

const Wrapper = styled.div`
  @media (max-width: 1200px) {
    /* ... */
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StockWrapper = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    /* ... */
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const QuoteWrapper = styled.div`
  margin: 50px;
  border: 1px solid black;
  background: red;

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 1024px) {
    //issue with height
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export default StockPage;
