function Saludo({ nombre }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>¡Hola, {nombre}!</h1>
      <p>Bienvenido a tu primera app con React y Vite 🎉</p>
    </div>
  );
}

export default Saludo;