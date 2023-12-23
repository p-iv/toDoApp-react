import "./ToDoList.css";
import Header from "../header/Header";
import ToDoForm from "../todoform/ToDoForm";
import TaskList from "../tasklist/TaskList";

export default function ToDoList() {
  return (
    <div className="todolist">
      <Header />
      <ToDoForm />
      <TaskList />
    </div>
  );
}
