import "./Filter.css";

export default function Filter({ onActive, onAll, onCompleted }) {
  return (
    <div className="filter">
      <button onClick={onAll}>All</button>
      <button onClick={onActive}>Active</button>
      <button onClick={onCompleted}>Completed</button>
    </div>
  );
}
