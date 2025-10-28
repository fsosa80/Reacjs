function ListaProductos({ productos }) {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🛒 Lista de productos</h2>
      <ol style={{ listStyleType: "decimal", textAlign: "left", display: "inline-block" }}>
        {productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ol>
    </div>
  );
}

export default ListaProductos;
