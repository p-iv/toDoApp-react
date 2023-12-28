import "./Filter.css";
export default function Filter({ onActive, onAll, onCompleted }) {
  const filterStyle = {
    display: "flex",
    gap: "12px",
  };
  const filterButton = {
    backgroundColor: "hsl(235, 24%, 19%)",
    border: "0",
    color: "hsl(233, 14%, 35%)",
  };

  return (
    <div style={filterStyle} className="filter">
      <button style={filterButton} onClick={onAll}>
        All
      </button>
      <button style={filterButton} onClick={onActive}>
        Active
      </button>
      <button style={filterButton} onClick={onCompleted}>
        Completed
      </button>
    </div>
  );
}
