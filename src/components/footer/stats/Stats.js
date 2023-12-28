import "./Stats.css";

export default function Stats({ tasks }) {
  const numTasks = tasks.length;

  return (
    <div className="stats">
      <p>You have {numTasks} items </p>
    </div>
  );
}
