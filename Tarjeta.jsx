// src/components/Tarjeta.jsx
function Tarjeta({ titulo, descripcion, textoBoton }) {
  return (
    <div
      style={{
        border: "2px solid #4caf50",
        borderRadius: "12px",
        padding: "20px",
        width: "280px",
        margin: "20px auto",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <button
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
        onClick={() => alert(`Hiciste clic en "${titulo}"`)}
      >
        {textoBoton}
      </button>
    </div>
  );
}

export default Tarjeta;
