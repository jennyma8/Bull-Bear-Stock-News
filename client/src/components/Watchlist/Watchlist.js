import React, { useState } from "react";
import styled from "styled-components";
import WatchlistForm from "../WatchlistForm/WatchlistForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";

const Watchlist = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <WatchlistForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <Wrapper key={index}>
      <WatchStock key={todo.id}>{todo.text}</WatchStock>

      <div className="icons">
        <AiOutlineCloseCircle
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </Wrapper>
  ));
};

const Wrapper = styled.div`
  display: flex;
`;

const WatchStock = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 100px;
  padding: 5px;
`;
export default Watchlist;
