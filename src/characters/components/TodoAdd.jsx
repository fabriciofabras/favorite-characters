import React from "react";

export const TodoAdd = ({ onNewTodo, item }) => {
  const addTodo = (todo) => {
    
    const newTodo = {
      id: new Date().getTime(),
      name: item.name,
      gender: item.gender,
      status: item.status,
      species: item.species,
      image: item.image,
      type: item.type,
      dimension: item.dimension,
      weigth: item.weigth,
      size: item.size,
      birthdate: item.birthdate,
      model: item.model,
      cost: item.cost,
      team: item.team,
    };

    onNewTodo(newTodo);
  };

  return (
    <div>
      <button className="btn btn-outline-primary mt-1" onClick={addTodo}>
        Add to favorites
      </button>
    </div>
  );
};
