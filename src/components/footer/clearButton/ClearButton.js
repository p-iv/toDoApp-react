import "./ClearButton.css";

export default function ClearButton({ onClear }) {
  return (
    <button onClick={onClear} className="clearbutton">
      Clear list
    </button>
  );
}
