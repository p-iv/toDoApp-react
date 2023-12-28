export default function Footer({ children, bgColor, borderColor }) {
  const footerStyle = {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: bgColor,
    boxShadow: "0 10px 60px -20px #000",
    borderTop: `1px solid ${borderColor}`,
    borderRadius: "0 0 5px 5px",
  };
  return <div style={footerStyle}>{children}</div>;
}
