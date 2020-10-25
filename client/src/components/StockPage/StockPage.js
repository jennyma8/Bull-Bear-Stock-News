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

const Wrapper = styled.div``;

const StockWrapper = styled.div`
  display: flex;
`;

const QuoteWrapper = styled.div``;

export default StockPage;
