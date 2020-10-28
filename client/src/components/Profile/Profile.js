import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/AppContext/AppContext";
import Watchlist from "../Watchlist/Watchlist";
import WatchlistForm from "../WatchlistForm/WatchlistForm";

const Profile = () => {
  const { appUser } = useContext(AppContext);
  // console.log(appUser);
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  return (
    <>
      <Wrapper>
        <div>Hi {appUser.displayName}!</div>
        <h1>My profile</h1>
        <div>Email address: {appUser.email}</div>
        <h1 className="todo-app">Watchlist: </h1>

        <WatchlistForm onSubmit={addTodo} />
        <Watchlist
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 200px;
  margin-left: 50px;
  min-height: 500px;
`;

export default Profile;
//todo list , each link history .push /stock/ticker
