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
  width: 100%;
  display: flex;

  @media (max-width: 1200px) {
    /* ... */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
`;

const QuoteWrapper = styled.div`
  position: sticky;
  top: 0;
  margin-top: 85px;
  margin-left: 50px;
  margin-right: 50px;
  border: 1px solid black;
  background: white;
  width: 50%;
  float: left;
  height: 100%;
  padding: 10px;

  @media (max-width: 1200px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }
`;

const NewsWrapper = styled.div`
  width: 50%;
  float: right;
`;

export default StockPage;
