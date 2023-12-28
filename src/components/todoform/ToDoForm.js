import { useState } from "react";
import "./ToDoForm.css";

export default function ToDoForm({ onAddTask, isBlack }) {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newTask = {
      task,
      checked: false,
      id: Date.now(),
    };

    onAddTask(newTask);

    setTask("");
  }

  const bgColor = isBlack ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)";
  const color = isBlack ? "hsl(234, 39%, 85%)" : "hsl(235, 24%, 19%)";
  const todoformStyle = {
    width: "100%",
    height: "65px",
    backgroundColor: bgColor,
    display: "flex",
    borderRadius: "5px",
    marginTop: "48px",
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: bgColor,
    border: "0",
    borderRadius: "5px",
    marginLeft: "32px",
    color: color,
    fontSize: "18px",
  };
  return (
    <form style={todoformStyle} className="todoform" onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        type="text"
        placeholder="Add your task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
    </form>
  );
}
