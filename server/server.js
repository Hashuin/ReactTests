const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Inicializamos un array para almacenar los usuarios.
const users = [
  { username: 'Jossyr', password: 'hola' },
];

// Ruta de registro
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Verifica si el usuario ya existe en la lista de usuarios de prueba.
  const userExists = users.some((u) => u.username === username);

  if (userExists) {
    res.status(400).json({ message: 'El usuario ya existe' });
  } else {
    // Agrega el nuevo usuario al array de usuarios.
    users.push({ username, password });
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  }
});

// Ruta de autenticación
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Verifica si el usuario existe en la lista de usuarios.
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Autenticación Exitosa' });
  } else {
    res.status(401).json({ message: 'Credenciales Incorrectas' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
