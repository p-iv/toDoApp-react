import "./ToDoList.css";
import Header from "../header/Header";
import ToDoForm from "../todoform/ToDoForm";
import TaskList from "../tasklist/TaskList";
import Footer from "../footer/Footer";

export default function ToDoList({ onAddTask, tasks, children }) {
  return <div className="todolist">{children}</div>;
}
