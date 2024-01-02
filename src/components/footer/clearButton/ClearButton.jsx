import "./ClearButton.css";

export default function ClearButton({ onClear, color, bgColor }) {
  const clearButtonStyle = {
    backgroundColor: bgColor,
    border: "0",
    color: color,
    marginRight: "20px",
  };
  return (
    <button onClick={onClear} className="clearbutton" style={clearButtonStyle}>
      Clear list
    </button>
  );
}
