import "./ToDoList.css";

export default function ToDoList({ onAddTask, tasks, children }) {
  return <div className="todolist">{children}</div>;
}
