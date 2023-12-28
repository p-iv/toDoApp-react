import { useState } from "react";
import "./Task.css";

export default function Task({ task, onDeleteTask, isBlack }) {
  const [checked, setChecked] = useState(false);
  function handleToggleCheck() {
    setChecked(() => !checked);
  }
  if (checked === false) {
    task.checked = false;
  } else {
    task.checked = true;
  }

  const borderColor = isBlack ? "hsl(237, 14%, 26%)" : "hsl(233, 11%, 84%)";
  const color = isBlack ? "hsl(234, 39%, 85%)" : "hsl(235, 24%, 19%)";
  const checkColor = isBlack ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)";

  const taskStyle = {
    width: "100%",
    height: "65px",
    borderBottom: ` 1px solid ${borderColor}`,
    display: " flex",
    alignItems: "center",
    color: color,
    position: "relative",
  };
  const checkStyle = {
    appearance: "none",
    width: "1.5rem",
    height: "1.5rem",
    border: `2px solid ${borderColor}`,
    borderRadius: "50%",
    background: checkColor,
    cursor: "pointer",
    margin: "0 20px 0 20px",
  };
  return (
    <li className="task" style={taskStyle}>
      <input
        className="check"
        style={checkStyle}
        type="checkbox"
        onClick={handleToggleCheck}
      />
      <span style={task.checked ? { textDecoration: "line-through" } : {}}>
        {task.task}
      </span>
      <svg
        className="close"
        onClick={() => onDeleteTask(task.id)}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </li>
  );
}
