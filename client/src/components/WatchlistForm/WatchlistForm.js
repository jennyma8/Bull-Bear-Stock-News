import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const WatchlistForm = (props) => {
  const [input, setInput] = useState("");

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
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a ticker"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit} className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default WatchlistForm;
