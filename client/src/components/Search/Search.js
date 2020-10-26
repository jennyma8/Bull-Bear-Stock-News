import React, { useContext } from "react";

import styled from "styled-components";
import { AppContext } from "../AppContext/AppContext";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [data, setdata] = React.useState();
  const [tickerInput, setTickerInput] = React.useState();
  const { ticker, setTicker } = useContext(AppContext);

  const handleChange = (event) => {
    setTickerInput(event.target.value); //input
  };

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
      </Wrapper>
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

export default Search;

//check M4-3 for typeahead search bar
