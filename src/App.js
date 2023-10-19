import React, { useState, useEffect } from "react";
import { Register } from "./components/";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Redireccionar al usuario a la página principal si ya está autenticado
    if (localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]); // Agrega la dependencia `navigate` al final del arreglo de dependencias

  return (
    <div>
      {isAuthenticated && <h1>Bienvenido!</h1>}
      {!isAuthenticated && <Register />}
      <button onClick={() => setIsAuthenticated(false)}>Cerrar sesión</button>
    </div>
  );
}

export default App;
