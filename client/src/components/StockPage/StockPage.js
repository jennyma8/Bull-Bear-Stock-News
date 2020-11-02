import React from "react";
import styled from "styled-components";
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
  }
  @media (max-width: 768px) {
  }
`;

const StockWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    /* ... */
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const QuoteWrapper = styled.div`
  margin: 50px;
  border: 1px solid black;
  background: white;
  height: 100%;

  @media (max-width: 1200px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }
`;

export default StockPage;
