import Login from "./Pages/Login"
import { Route, Routes} from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Mesas from "./Pages/Mesas";
import Menu from "./Pages/Menu";
import Pedidos from "./Pages/Pedidos";
import Pagos from "./Pages/Pagos";
import Empleados from "./Pages/Empleados";
import Categoria from "./Pages/Categoria";
import Usuarios from "./Pages/Usuarios";

function App() {

  return (
    <>
    <HashRouter>
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Mesas" element={<Mesas/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Pedidos" element={<Pedidos/>}/>
        <Route path="/Pagos" element={<Pagos/>}/>
        <Route path="/Empleados" element={<Empleados/>}/>
        <Route path="/Categorias" element={<Categoria/>}/>
        <Route path="/Usuarios" element={<Usuarios/>}/>

      </Routes>
      
    </HashRouter>
      
    </>
  )
}

export default App
