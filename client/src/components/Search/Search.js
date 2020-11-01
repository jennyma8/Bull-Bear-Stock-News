import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext/AppContext";
import { FiSearch } from "react-icons/fi";
import Data from "../assets/allTickers.json";

const Search = (props) => {
  const [data, setdata] = React.useState();
  const [tickerInput, setTickerInput] = React.useState("");
  const { ticker, setTicker } = useContext(AppContext);
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

  const updateSearchBar = (selection) => {
    setTickerInput(selection);
    setDisplay(false);
  };

  React.useEffect(() => {
    if (id !== undefined) {
      setTicker(id);
    }
  }, []);

  if (tickerInput.length > 0) {
    newData = newData.filter((stock) => {
      return stock.name.match(tickerInput) || stock.ticker.match(tickerInput);
    });
  }
  return (
    <>
      <Wrapper>
        <form>
          <SearchInput
            placeholder="Search a ticker..."
            onChange={handleChange}
            value={tickerInput}
          ></SearchInput>
          <Button type="button" onClick={() => setTicker(tickerInput)}>
            <FiSearch size={25} />
          </Button>
        </form>
      </Wrapper>{" "}
      {display && (
        <div className="autoContainer">
          {newData.map((stock, index) => {
            return (
              <Display
                key={index}
                onClick={() => updateSearchBar(stock.ticker)}
              >
                {stock.ticker} - {stock.name}
              </Display>
            );
          })}
        </div>
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
`;
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

const Display = styled.div``;
export default Search;

//check M4-3 for typeahead search bar
