import "./TaskList.css";
import Task from "./task/Task";

export default function TaskList({
  tasks,
  onDeleteTask,
  bgColor,
  color,
  borderColor,
}) {
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
            onDeleteTask={onDeleteTask}
            key={task.id}
            task={task}
            color={color}
            borderColor={borderColor}
          />
        ))}
      </ul>
    </div>
  );
}
