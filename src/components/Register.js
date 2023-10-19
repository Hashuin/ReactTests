/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        password,
      });

      if (response.status === 201) {
        // Registro exitoso, redirige al usuario a la página de inicio de sesión.
        history.push('/login');
      } else {
        // Mostrar mensaje de error al usuario.
      }
    } catch (error) {
      // Manejo de errores
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}

export default Register;
