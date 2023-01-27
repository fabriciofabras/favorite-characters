import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <Card elevation={6} className="text-justify">
        <CardHeader title={todo.name} subheader="" />
        {todo.image ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              alignItems="center"
              component="img"
              style={{
                width: "7rem",
                height: "14rem",
              }}
              image={todo.image}
              alt={todo.name}
            />
          </div>
        ) : (
          ""
        )}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {todo.status ? <p className="card-text"> {`Status: ${todo.status}`}</p> : ""}
            {todo.weigth ? <p className="card-text"> {`Weigth: ${todo.weigth}`}</p> : ""}
            {todo.size ? <p className="card-text"> {`Size: ${todo.size}`}</p> : ""}
            {todo.birthdate ? (
              <p className="card-text"> {`Birthdate: ${todo.birthdate}`}</p>
            ) : (
              ""
            )}
            {todo.model ? <p className="card-text"> {`Model: ${todo.model}`}</p> : ""}
            {todo.cost ? <p className="card-text"> {`Cost: ${todo.cost}`}</p> : ""}
            {todo.team ? <p className="card-text"> {`Team: ${todo.model}`}</p> : ""}
            {todo.gender ? <p className="card-text"> {`Gender: ${todo.team}`}</p> : ""}
            {todo.species ? (
              <p className="card-text"> {`Specie: ${todo.species}`}</p>
            ) : (
              ""
            )}
            {todo.type ? <p className="card-text"> {`Type: ${todo.type}`}</p> : ""}
            {todo.dimension ? (
              <p className="card-text"> {`Dimesion: ${todo.dimension}`}</p>
            ) : (
              ""
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={addToFavorites} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}
