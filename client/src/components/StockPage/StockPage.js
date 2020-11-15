import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext/AppContext";
import StockNews from "../StockNews/StockNews";
import Search from "../../components/Search/Search";
import Company from "../Company/Company";

const StockPage = () => {
  const { ticker, setTicker } = useContext(AppContext);

  React.useEffect(() => {
    return () => {
      setTicker("");
    };
  }, []);
  return (
    <>
      <Wrapper>
        <Search />

        <StockWrapper>
          <QuoteWrapper>
            <Company />
          </QuoteWrapper>
          <NewsWrapper>
            <StockNews />
          </NewsWrapper>
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
  width: 100%;
  @media (max-width: 1200px) {
    /* ... */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
`;

const QuoteWrapper = styled.div`
  margin-top: 73px;
  margin-left: 50px;
  margin-right: 50px;

  background: white;
  padding: 10px;
  height: 100%;
  width: 50%;
  float: left;

  @media (max-width: 1200px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }
`;

const NewsWrapper = styled.div`
  height: 100%;
  width: 50%;
  float: right;
`;

export default StockPage;
