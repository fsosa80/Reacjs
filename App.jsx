import Saludo from "./components/saludo";
import ListaProductos from "./components/ListaProductos";
import Tarjeta from "./components/Tarjeta";
import Header from './components/Header';  
import Nav from './components/Nav';  
import Main from './components/Main';  
import Gallery from './components/Gallery';  
import Footer from './components/Footer';  

function App() {
  const productos = ["Camiseta", "Pantalón", "Zapatillas", "Gorra"];

  return (
    <div>
      <Saludo nombre="Fanny" />
      <ListaProductos productos={productos} />
            <Header />  
            <Nav />  
            <Main />  
            <Gallery />  
            <Footer /> 
      <Tarjeta
        titulo="Oferta Especial"
        descripcion="Aprovechá un 20% de descuento en toda la tienda hasta el domingo."
        textoBoton="Ver más"
      />
    </div>
  );
}

export default App;
