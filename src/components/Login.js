import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    // Redireccionar al usuario a la página principal si ya está autenticado
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);
  

    const navigate = useNavigate();

    const handleLogin = async () => {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ username, password }),
      };
    
      const response = await fetch(`http://localhost:3000/api/auth`, requestOptions);
      const data = await response.json();
    
      if (data.message === "Autenticación Exitosa") {
        localStorage.setItem("token", JSON.stringify(data));
        setUsername("");
        setPassword("");
        navigate("/");
      } else {
        alert("Credenciales incorrectas");
      }
    };
    

    function Login() {
      return (
        <div>
          <h1>Inicio de sesión</h1>
          <input
            type="text"
            placeholder="Nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      );
    }
    
    
}

export default Login;
