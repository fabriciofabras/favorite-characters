import React, { useEffect, useReducer } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { TodoAdd } from "./TodoAdd";
import { TodoDelete } from "./TodoDelete";
import { useTodos } from "../../hooks/useTodos";
import { Grid } from "@mui/material";

export const ItemCard = (item) => {
  const { todos, handleNewTodo, handleDeleteTodo } = useTodos();


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <Grid  item xs={12} sm={6} md={4} lg={3}>
      <Card  elevation={20}
        style={{
          paddingTop: "5px",
          paddingLeft: "5%",
          paddingRight: "5%",
          width: "100%",
        }}
      >
        <CardContent align="center">
          <CardHeader title={item.name} subheader="" />
          {item.image ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CardMedia
                alignItems="center"
                component="img"
                style={{
                  width: "7rem",
                  height: "14rem",
                }}
                image={item.image}
                alt={item.name}
              />
            </div>
          ) : (
            ""
          )}
          <CardContent>
            <Typography                 
 variant="body2" color="text.secondary">
              {item.status ? (
                <p className="card-text"> {`Status: ${item.status}`}</p>
              ) : (
                ""
              )}
              {item.weigth ? (
                <p className="card-text"> {`Weigth: ${item.weigth}`}</p>
              ) : (
                ""
              )}
              {item.size ? (
                <p className="card-text"> {`Size: ${item.size}`}</p>
              ) : (
                ""
              )}
              {item.birthdate ? (
                <p className="card-text"> {`Birthdate: ${item.birthdate}`}</p>
              ) : (
                ""
              )}
              {item.model ? (
                <p className="card-text"> {`Model: ${item.model}`}</p>
              ) : (
                ""
              )}
              {item.cost ? (
                <p className="card-text"> {`Cost: ${item.cost}`}</p>
              ) : (
                ""
              )}
              {item.team ? (
                <p className="card-text"> {`Team: ${item.model}`}</p>
              ) : (
                ""
              )}
              {item.gender ? (
                <p className="card-text"> {`Gender: ${item.team}`}</p>
              ) : (
                ""
              )}
              {item.species ? (
                <p className="card-text"> {`Specie: ${item.species}`}</p>
              ) : (
                ""
              )}
              {item.type ? (
                <p className="card-text"> {`Type: ${item.type}`}</p>
              ) : (
                ""
              )}
              {item.dimension ? (
                <p className="card-text"> {`Dimension: ${item.dimension}`}</p>
              ) : (
                ""
              )}
            </Typography>
          </CardContent>
          <CardActions>
            {!item.favorites ? (
              <TodoAdd onNewTodo={handleNewTodo} item={item}></TodoAdd>
            ) : (
              <TodoDelete onDeleteTodo={handleDeleteTodo} item={item}></TodoDelete>
            )}
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};
