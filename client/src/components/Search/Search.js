import React from "react";
import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

require("dotenv").config();
const apiKeyAlpha = process.env.REACT_APP_ALPHA_API;

const Search = () => {
  const [data, setdata] = React.useState();
  // const [searchQuery, setSearchQuery] = React.useState("");

  // const onChangeSearch = (query) => setSearchQuery(query);

  React.useEffect(() => {
    //input keywords0
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=aapl&apikey=${apiKeyAlpha}`
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
  }, []);

  if (!data) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <FiSearch />

      <input
        placeholder="Search..."
        // onChangeText={onChangeSearch}
        // value={searchQuery}
      ></input>
      <div>
        {Object.values(data["bestMatches"]).map((stock) => {
          return (
            <>
              <div>{stock["1. symbol"]}</div>
              <div>{stock["2. name"]}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;

//check M4-3 for typeahead search bar
