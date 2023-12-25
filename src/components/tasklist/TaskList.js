import "./TaskList.css";
import Task from "./task/Task";

export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasklist">
      <ul className="tasks">
        {tasks.map((todo) => (
          <Task onDeleteTask={onDeleteTask} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
