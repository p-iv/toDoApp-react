import "./TaskList.css";
import Task from "./task/Task";

export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasklist">
      <ul className="tasks">
        {tasks.map((task) => (
          <Task onDeleteTask={onDeleteTask} key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
