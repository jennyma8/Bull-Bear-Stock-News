import React, { useContext } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { AppContext } from "../AppContext/AppContext";
import { FiSearch } from "react-icons/fi";

require("dotenv").config();
const apiKeyAlpha = process.env.REACT_APP_ALPHA_API;

const Search = () => {
  const [data, setdata] = React.useState();
  const [tickerInput, setTickerInput] = React.useState();
  const { ticker, setTicker } = useContext(AppContext);
  let { id } = useParams();

  const handleChange = (event) => {
    setTickerInput(event.target.value);
  };

  const handleIdChange = () => {
    let id = tickerInput;
    console.log(id);
  };
  const someFunc = () => {
    setTicker(tickerInput);
    handleIdChange();
  };
  React.useEffect(() => {
    //input keywords
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${apiKeyAlpha}`
    )
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          //   console.log(data);
          setdata(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, [ticker, id]);

  if (!data) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <Wrapper>
        <form>
          <SearchInput
            placeholder="Search..."
            onChange={handleChange}
            value={tickerInput}
          ></SearchInput>
          <Button type="button" onClick={someFunc}>
            <FiSearch size={25} />
          </Button>
        </form>
        <SuggestionContainer>
          <h1>Suggested Results</h1>
          <div>
            {Object.values(data["bestMatches"]).map((stock, index) => {
              return (
                <>
                  <div key={index}>
                    {stock["1. symbol"]}-{stock["2. name"]}
                  </div>
                </>
              );
            })}
          </div>
        </SuggestionContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 100px;
`;
const SearchInput = styled.input`
  border-radius: 20px;
  height: 40px;
  border: 1px solid lightgrey;
  width: 300px;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: white;
  margin-left: -50px;
  margin-top: -20px;
`;

const SuggestionContainer = styled.div`
  /* display: none; */
  border: 1px solid lightgrey;
  margin-top: 2px;
  width: 300px;
`;
export default Search;

//check M4-3 for typeahead search bar
