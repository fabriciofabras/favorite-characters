import React, { useState, useEffect } from "react";
import { getStarWarsInfo} from "../../helpers/getStarWarsInfo";
import { ItemList } from "../components/ItemList";

export const StarWarsShips = () => {
    const [ships, setShips] = useState([]);
  
    const [count, setCount] = useState(1);

    useEffect(() => {
      setTimeout(() => {
        getStarWarsInfo("starships", count)
          .then((res) => {
            setShips([...ships, ...res]);
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
        length={ships.length}
        fetchMoreData={fetchMoreData}
        items={ships}
      ></ItemList>
    );
  };