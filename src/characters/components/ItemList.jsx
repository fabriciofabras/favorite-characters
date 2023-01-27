import React, { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRickAndMortyInfo } from "../../helpers/getRickAndMortyInfo";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Grid } from "@mui/material";

export const ItemList = ({ length, items, fetchMoreData }) => {
  return (
    <InfiniteScroll
      dataLength={length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <Grid
        container
        spacing={1}
        style={{
          paddingTop: "30px",
          paddingLeft: "5%",
          paddingRight: "5%",
          width: "100%",
        }}
      >
        {items.map((item) => (
          <ItemCard key={item.id} {...item}></ItemCard>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
