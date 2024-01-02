import "./Filter.css";
export default function Filter({
  onActive,
  onAll,
  onCompleted,
  bgColor,
  color,
}) {
  const filterStyle = {
    display: "flex",
    gap: "12px",
  };
  const filterButton = {
    backgroundColor: bgColor,
    border: "0",
    color: color,
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
