/*
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'geek' && password === 'geek') {
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
        alert('Nombre de usuario correctos');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Usuario" value={username} onChange={handleUsernameChange} required/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
      </Form.Group>
      <hr></hr>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede agregar lógica para enviar los datos del formulario al servidor
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu nombre de Usuario" value={username} onChange={handleUsernameChange} required/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" value={email} onChange={handleEmailChange} required/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
      </Form.Group>
      <hr></hr>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

const LoginRegisterForm = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="container">
      {showLogin ? <LoginForm /> : <RegisterForm />}
      <Button variant="link" onClick={toggleForm}>
        {showLogin ? 'No tienes cuenta? Registrate!' : 'Ya te encuentras registrado?'}
      </Button>
    </div>
  );
};

export default LoginRegisterForm;
*/

import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "check-login",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.valid) {
          // Redirigir a la página correspondiente ESTA PAGINA NO SE REALIZARA EN ESTE MOMENTO
        } else {
          setError("Usuario o contraseña incorrectos");
        }
      } else {
        setError("Hubo un error en la conexión con el servidor");
      }
    } catch (error) {
      setError("Hubo un error en la conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <button type="submit">Ingresar</button>
        )}
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
