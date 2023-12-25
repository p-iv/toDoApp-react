import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import Header from "./components/header/Header";
import ToDoForm from "./components/todoform/ToDoForm";
import TaskList from "./components/tasklist/TaskList";
import Footer from "./components/footer/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }
  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <ToDoList>
        <Header />
        <ToDoForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        <Footer />
      </ToDoList>
    </div>
  );
}

export default App;
