import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function AddTodo() {
  const task = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("All");
  const filteredTask =
    filter === "Done"
      ? task.filter((task) => task.isDone)
      : filter === "Not Done"
      ? task.filter((task) => !task.isDone)
      : task;
  return (
    <div>
      <div>
        <button onClick={() => setFilter("Done")}>Done</button>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Not Done")}>Not Done</button>
      </div>
      {filteredTask.map((e) => (
        <Task key={e.id} task={e} />
      ))}
    </div>
  );
}

export default AddTodo;