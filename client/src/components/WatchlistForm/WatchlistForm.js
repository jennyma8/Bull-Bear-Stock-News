import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Data from "../assets/allTickers.json";

const WatchlistForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [display, setDisplay] = useState(false);

  const inputRef = useRef(null);

  let newData = Data;

  useEffect(() => {
    inputRef.current.focus();
  });

  //handle
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      setDisplay(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  const updateSearchBar = (selection) => {
    setInput(selection);
    setDisplay(false);
  };

  //   console.log(Data); success
  //work on case sensitive
  // .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
  if (input.length > 0) {
    newData = newData.filter((stock) => {
      return stock.name.match(input) || stock.ticker.match(input);
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              id="UpdateTicker"
              placeholder="Update ticker"
              value={input}
              name="text"
              onChange={handleChange}
              ref={inputRef}
            ></input>
            <button onClick={handleSubmit}>Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              id="AddTicker"
              placeholder="Add a ticker"
              value={input}
              name="text"
              onChange={handleChange}
              ref={inputRef}
            ></input>
            <button onClick={handleSubmit}>Add</button>
          </>
        )}
      </form>
      {display && (
        <div className="autoContainer">
          {newData.map((stock, index) => {
            return (
              <div key={index} onClick={() => updateSearchBar(stock.ticker)}>
                {stock.ticker} - {stock.name}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

//example from .json:
// country: "USA"
// exchange: "NYSE"
// has_news: "yes"
// industry: "Medical Laboratories Research"
// ipo_date: "1999-11-18"
// name: "Agilent Technologies, Inc."
// sector: "Healthcare"
// ticker: "A"

export default WatchlistForm;