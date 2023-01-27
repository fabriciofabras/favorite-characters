import React, { useState, useEffect } from "react";
import { getRickAndMortyInfo } from "../../helpers/getRickAndMortyInfo";
import { ItemList } from "../components/ItemList";

export const RickAndMortyLocations = () => {
  const [count, setCount] = useState(1);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getRickAndMortyInfo("location", count)
        .then((res) => {
          setLocations([...locations, ...res]);
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
      length={locations.length}
      fetchMoreData={fetchMoreData}
      items={locations}
    ></ItemList>
  );
};
