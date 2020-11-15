import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext/AppContext";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";

import { FiSearch } from "react-icons/fi";
import Data from "../assets/allTickers.json";

const Search = (props) => {
  const { t } = useTranslation();

  const { ticker, setTicker } = useContext(AppContext);

  const [tickerInput, setTickerInput] = React.useState("");
  const [display, setDisplay] = useState(false);

  const { id } = useParams();
  // console.log(id);

  let newData = Data;

  const handleChange = (event) => {
    setTickerInput(event.target.value); //input
    if (event.target.value.length > 0) {
      setDisplay(true);
    }
  };

  // const handleKeyPress = (event) => {
  //   if (event.keyCode === 13) {
  //     event.preventDefault();
  //     setTickerInput(event.target.value);
  //     handleSubmit();
  //     setDisplay(false);
  //   }
  // };

  const handleSubmit = (event) => {
    // event.preventDefault();
    setTicker(tickerInput);
    console.log(ticker);
    setDisplay(false);
  };
  const updateSearchBar = (selection) => {
    setTickerInput(selection);
    setDisplay(false);
  };

  React.useEffect(() => {
    if (id !== undefined) {
      setTicker(id);
    }
  }, [id]);

  //
  if (tickerInput.length > 0) {
    newData = newData.filter((stock) => {
      const lowerStockName = stock.name.toLowerCase();
      const lowerStockTicker = stock.ticker.toLowerCase();

      return (
        lowerStockName.match(tickerInput.toLowerCase()) ||
        lowerStockTicker.match(tickerInput.toLowerCase())
      );
    });
  }
  return (
    <>
      <Wrapper>
        <FormContainer>
          <form>
            <SearchInput
              placeholder={t("Search.1")}
              onChange={handleChange}
              value={tickerInput}
              // onKeyDown={(ev) => handleKeyPress(ev)}
            ></SearchInput>
            <Button type="button" onClick={handleSubmit}>
              <FiSearch size={25} />
            </Button>
          </form>
        </FormContainer>
        <DisplayContainer className="autoContainer">
          {display && (
            <div>
              {newData.map((stock, index) => {
                return (
                  <Display
                    key={index}
                    onClick={() => updateSearchBar(stock.ticker)}
                  >
                    <li>
                      {stock.ticker} - {stock.name}
                    </li>
                  </Display>
                );
              })}
            </div>
          )}
        </DisplayContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div``;
const SearchInput = styled.input`
  border-radius: 20px;
  height: 50px;
  border: 2px solid lightgrey;
  width: 400px;
  padding: 5px;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: white;
  margin-left: -50px;
  margin-top: -10px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const DisplayContainer = styled.div``;
const Display = styled.div`
  width: 100%;
  align-items: center;
  margin-left: 240px;
  margin-top: 5px;
  li {
    display: inline;
    padding: 1px;
    list-style-type: none;
  }

  li:hover {
    background: lightgrey;
    cursor: pointer;
  }
`;
export default Search;

//check M4-3 for typeahead search bar
