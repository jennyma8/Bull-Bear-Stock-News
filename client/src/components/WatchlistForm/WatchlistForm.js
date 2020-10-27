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
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update ticker"
            value={input}
            name="text"
            className="todo-input-edit"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button onClick={handleSubmit} className="todo-button-edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a ticker"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button onClick={handleSubmit} className="todo-button">
            Add
          </button>
        </>
      )}
    </form>
  );
};

export default WatchlistForm;
