import React from "react";
import { ItemCard } from "./ItemCard";

export const TodoList = ({ items, favorites, onDeleteTodo }) => {

  return (
    <div className="row rows-cols-1 row-cols-md-4 g-3">
      {items.map((todo) => (
        <ItemCard key={todo.name} {...todo} favorites={favorites} onDeleteTodo={id=>onDeleteTodo(id)}></ItemCard>
      ))}
    </div>
  );
};
