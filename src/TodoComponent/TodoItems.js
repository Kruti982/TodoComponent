import React from "react";
import { Button } from "reactstrap";
// import Todos from "./Todos";

export default function TodoItems({ todoNew, onDelete }) {
  return (
    <div className="todoContainer">
      <h2>{todoNew.id}</h2>
      <p>{todoNew.task}</p>
      <Button
        color="danger"
        onClick={() => {
          onDelete(todoNew);
        }}
      >
        Delete
      </Button>
      {/* <Todos /> */}
    </div>
  );
}
