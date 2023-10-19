/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  

  
  const navigate = useNavigate();
  const handleRegister = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ username, password, email }),
    };

    useEffect(() => {
      // Redireccionar al usuario a la página principal si ya está autenticado
      if (localStorage.getItem("token")) {
        navigate("/login");
      }
    }, [navigate]);
  
    const response = await fetch(`http://localhost:3000/api/users`, requestOptions);
    const data = await response.json();
  
    if (data.message === "Registro exitoso") {
      alert("Usuario registrado correctamente");
      navigate("/login");
    } else {
      alert("Error al registrar usuario");
    }
  };

  return (
    <div>
      <h1>Registro</h1>
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
      <input
        type="email"
        placeholder="Correo electrónico"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <button onClick={() => navigate("/login")}>Ya estoy registrado</button>
    </div>
  );
  
}

export default Register;
