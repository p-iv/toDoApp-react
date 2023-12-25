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

  return (
    <div className="App">
      <ToDoList>
        <Header />
        <ToDoForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} />
        <Footer />
      </ToDoList>
    </div>
  );
}

export default App;
