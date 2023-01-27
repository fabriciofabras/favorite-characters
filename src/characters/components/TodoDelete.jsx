import React from "react";

export const TodoDelete = ({ onDeleteTodo, item }) => {

  const deleteTodo = (todo) => {


    const deleteItem = {
      id: item.id
    };

    onDeleteTodo(deleteItem);
    window.location.reload(true);
  };

  return (
    <div>
      <button className="btn btn-outline-danger mt-1" onClick={deleteTodo}>
        Delete from favorites
      </button>
    </div>
  );
};
