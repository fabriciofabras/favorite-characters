import React, { useState, useEffect } from "react";
import { getRickAndMortyInfo } from "../../helpers/getRickAndMortyInfo";
import { ItemList } from "../components/ItemList";

export const RickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      getRickAndMortyInfo("character", count)
        .then((res) => {
          setCharacters([...characters, ...res]);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }, 1000);
  }, [count]);

  const fetchMoreData = () => {
    setCount((count) => count + 1);
  };

  return (
    <ItemList
      length={characters.length}
      fetchMoreData={fetchMoreData}
      items={characters}
    ></ItemList>
  );
};
