import { useState } from "react";
import "./ToDoForm.css";

export default function ToDoForm({ onAddTask }) {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newTask = { task, checked: false, id: Date.now() };
    console.log(newTask);

    onAddTask(newTask);

    setTask("");
  }

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
    </form>
  );
}
