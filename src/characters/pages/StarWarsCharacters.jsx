import React, { useState, useEffect } from "react";
import { getStarWarsInfo } from "../../helpers/getStarWarsInfo";
import { ItemList } from "../components/ItemList";

export const StarWarsCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      getStarWarsInfo("people", count)
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
