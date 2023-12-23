import "./TaskList.css";
import Task from "./task/Task";

const todoestest = [
  {
    id: 1,
    task: "Check test",
  },
  {
    id: 2,
    task: "Check test2",
  },
];

export default function TaskList() {
  return (
    <div className="tasklist">
      <ul className="tasks">
        {todoestest.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
