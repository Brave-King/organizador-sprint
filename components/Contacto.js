import React from 'react';

function Contacto() {
  return (
    <div>
      <h1>Contáctanos</h1>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
