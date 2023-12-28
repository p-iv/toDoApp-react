import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import Header from "./components/header/Header";
import ToDoForm from "./components/todoform/ToDoForm";
import TaskList from "./components/tasklist/TaskList";
import Footer from "./components/footer/Footer";
import Stats from "./components/footer/stats/Stats";
import Filter from "./components/footer/filter/Filter";
import ClearButton from "./components/footer/clearButton/ClearButton";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isBlack, setIsBlack] = useState(true);

  let newTasks;
  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleAll() {
    setTasks(tasks);
  }

  function handleActive() {
    newTasks = tasks.filter((task) => task.checked === false);
    setTasks(newTasks);
  }

  function handleCompleted() {
    newTasks = tasks.filter((task) => task.checked === true);
    setTasks(newTasks);
  }

  function handleClear() {
    setTasks([]);
  }

  function handleToggleTheme() {
    setIsBlack(() => !isBlack);
  }

  const bgColor = isBlack ? "hsl(235, 21%, 11%)" : "hsl(236, 33%, 92%)";

  const appStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor,
  };

  return (
    <div style={appStyle}>
      <ToDoList>
        <Header onToggleTheme={handleToggleTheme} isBlack={isBlack} />

        <ToDoForm isBlack={isBlack} onAddTask={handleAddTask} />
        <TaskList
          isBlack={isBlack}
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
        />

        <Footer>
          <Stats tasks={tasks} />
          <Filter
            onActive={handleActive}
            onAll={handleAll}
            onCompleted={handleCompleted}
          />
          <ClearButton onClear={handleClear} />
        </Footer>
      </ToDoList>
    </div>
  );
}

export default App;
