import { useState } from "react";
import "./App.css";
import Header from "./TodoComponent/Header";
import Todos from "./TodoComponent/Todos";

export default function App() {
  const onDelete = (todoNew) => {
    setTodos(
      todoTask.filter((e) => {
        return e !== todoNew;
      })
    );
  };
  const [todoTask, setTodos] = useState([
    {
      id: 1,
      task: "Go to the market",
    },
    {
      id: 2,
      task: "Go to the gym",
    },
    {
      id: 3,
      task: "Go to the office",
    },
    {
      id: 4,
      task: "Go to the restaurant",
    },
  ]);
  return (
    <div>
      <Header title="My Todos" />
      {/* <Todos todo={todoTask} /> */}
      {/* {console.log(todoTask)} */}
      <Todos todo={todoTask} onDelete={onDelete} />
    </div>
  );
}
