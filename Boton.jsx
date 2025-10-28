// src/components/Boton.jsx
function Boton({ texto, color, onClick }) {
  const estilos = {
    backgroundColor: color || "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  };

  return (
    <button
      style={estilos}
      onClick={onClick}
      onMouseOver={(e) => (e.target.style.opacity = "0.8")}
      onMouseOut={(e) => (e.target.style.opacity = "1")}
    >
      {texto}
    </button>
  );
}

export default Boton;
