/* eslint-disable no-restricted-globals */
import React, {useState} from "react";
import axios from 'axios';


function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/login', {
            username,
            password,
          });
      
          if (response.status === 200) {
            // Autenticación exitosa, redirige al usuario a la página de inicio.
            history.push('/dashboard');
          } else {
            // Mostrar mensaje de error al usuario.
          }
        } catch (error) {
          // Manejo de errores
        }   

    };

    return(
        <div>
            <h2>Login</h2>
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
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;