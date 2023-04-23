import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Por favor ingresa tu nombre';
      hasErrors = true;
    }

    if (!formData.email) {
      newErrors.email = 'Por favor ingresa tu correo electrónico';
      hasErrors = true;
    }

    if (!formData.message) {
      newErrors.message = 'Por favor ingresa tu mensaje';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    /* Aun no envio los datos del correo 
    import nodemailer from 'nodemailer';

    // Configura nodemailer para utilizar un servidor SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.google.com',
      port: 587,
      secure: false,
      auth: {
        user: 'usuario@gmail.com',
        pass: 'LACONTRASEÑA',
      },
    });
    // Configura el mensaje del correo electrónico
    const message = {
      from: 'tu_correo@example.com',
      to: 'destinatario@example.com',
      subject: 'Nuevo mensaje de contacto de GEEKS',
      text: `Nombre: ${formData.name}\nCorreo electrónico: ${formData.email}\nMensaje: ${formData.message}`,
    };

    // Envía el correo electrónico utilizando nodemailer
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo enviado: ' + info.response);
      }
    });
    */
    // Imprime los datos del formulario en la consola
    console.log(formData);
  };

  return (
    <div className="container">
      <h2 className="section-title">Contactanos</h2>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>
        <hr />
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <hr />
    </div>
  );
};

export default ContactForm;
