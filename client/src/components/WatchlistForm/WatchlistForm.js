import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const WatchlistForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
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
  );
};

export default WatchlistForm;
