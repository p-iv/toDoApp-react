import "./TaskList.css";
import Task from "./task/Task";

export default function TaskList({ tasks, onDeleteTask, isBlack }) {
  const bgColor = isBlack ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)";

  const taskListStyle = {
    width: "100%",
    height: "350px",
    borderRadius: "5px 5px 0 0",
    marginTop: "30px",
    backgroundColor: bgColor,
    overflowX: "hidden",
    overflowY: "auto",
    boxShadow: "0 10px 60px -20px #000",
  };
  return (
    <div className="tasklist" style={taskListStyle}>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task
            isBlack={isBlack}
            onDeleteTask={onDeleteTask}
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
}
