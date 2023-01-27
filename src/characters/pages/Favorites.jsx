import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../../todoReducer";
import { TodoList } from "../components/TodoList";

const initialState = [];

const init = () => {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
};
export const Favorites = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    console.log("USE EFFECT FVORITES")
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="card-grid">
      <TodoList items={todos} favorites={true} ></TodoList>
    </div>
  );
};
