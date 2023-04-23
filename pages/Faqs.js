/*import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>FAQs</h1>
      <p><b>¿Cómo contacto al equipo de soporte técnico si tengo algún problema?</b></p>
      <p className="text-justify">Puedes contactar a nuestro equipo de soporte técnico enviando un correo electrónico a [dirección de correo electrónico] o utilizando el formulario de contacto en nuestra página web. También puedes llamar a nuestro número de atención al cliente [número de teléfono].</p>
      <p><b>¿Cuáles son los métodos de pago que aceptan?</b></p>
      <p className="text-justify">Aceptamos los siguientes métodos de pago: [lista de métodos de pago aceptados].</p>
      <p><b>¿Cuál es su política de devoluciones?</b></p>
      <p className="text-justify">Si no estás satisfecho con tu compra, puedes devolver el artículo dentro de los [número de días] días posteriores a la entrega para obtener un reembolso completo. Por favor, consulta nuestra política de devoluciones detallada en nuestra página web para obtener más información.</p>
      <p><b>¿Cómo puedo hacer seguimiento a mi pedido?</b></p>
      <p className="text-justify">Puedes hacer seguimiento a tu pedido en nuestra página web utilizando el número de seguimiento que te enviamos por correo electrónico.</p>
      <p><b>¿Tienen algún programa de lealtad o descuentos para clientes frecuentes?</b></p>
      <p className="text-justify">Sí, ofrecemos un programa de lealtad para clientes frecuentes. Los clientes que se inscriben en nuestro programa de lealtad obtienen [lista de beneficios y descuentos].</p>
      <p><b>¿Cómo protegen la privacidad y seguridad de mis datos?</b></p>
      <p className="text-justify">Protegemos tu privacidad y seguridad mediante el uso de medidas de seguridad avanzadas, como el cifrado SSL y el cumplimiento de las regulaciones de protección de datos.</p>
      <p><b>¿Cómo puedo actualizar mi información de cuenta?</b></p>
      <p className="text-justify">Puedes actualizar tu información de cuenta iniciando sesión en nuestra página web y yendo a la sección de "Mi cuenta" o "Configuración de cuenta".</p>
      <p><b>¿Cómo puedo cancelar mi suscripción?</b></p>
      <p className="text-justify">Puedes cancelar tu suscripción en cualquier momento iniciando sesión en nuestra página web y yendo a la sección de "Suscripciones" o enviando un correo electrónico a [dirección de correo electrónico].</p>
      <p><b>¿Cómo puedo acceder a mi historial de pedidos?</b></p>
      <p className="text-justify">Puedes acceder a tu historial de pedidos iniciando sesión en nuestra página web y yendo a la sección de "Mis pedidos" o "Historial de pedidos".</p>
      <p><b>¿Qué debo hacer si olvidé mi contraseña?</b></p>
      <p className="text-justify">Si olvidaste tu contraseña, puedes restablecerla haciendo clic en "¿Olvidaste tu contraseña?" en la página de inicio de sesión y siguiendo los pasos que se indican. También puedes contactar a nuestro equipo de soporte técnico para obtener ayuda en la recuperación de tu contraseña.</p>
     </div>
  );
};

export default Home;
*/
import React from 'react';


const questions = [
  {
    id: 1,
    question: '¿Cómo contacto al equipo de soporte técnico si tengo algún problema?',
    answer: 'Puedes contactar a nuestro equipo de soporte técnico enviando un correo electrónico a [dirección de correo electrónico] o utilizando el formulario de contacto en nuestra página web. También puedes llamar a nuestro número de atención al cliente [número de teléfono].',
  },
  {
    id: 2,
    question: '¿Cuáles son los métodos de pago que aceptan?',
    answer: 'Aceptamos los siguientes métodos de pago: [lista de métodos de pago aceptados].',
  },
  {
    id: 3,
    question: '¿Cuál es su política de devoluciones?',
    answer: 'Si no estás satisfecho con tu compra, puedes devolver el artículo dentro de los [número de días] días posteriores a la entrega para obtener un reembolso completo. Por favor, consulta nuestra política de devoluciones detallada en nuestra página web para obtener más información.',
  },
  {
    id: 4,
    question: '¿Cómo puedo hacer seguimiento a mi pedido?',
    answer: 'Puedes hacer seguimiento a tu pedido en nuestra página web utilizando el número de seguimiento que te enviamos por correo electrónico.',
  },
  {
    id: 5,
    question: '¿Tienen algún programa de lealtad o descuentos para clientes frecuentes?',
    answer: 'Sí, ofrecemos un programa de lealtad para clientes frecuentes. Los clientes que se inscriben en nuestro programa de lealtad obtienen [lista de beneficios y descuentos].',
  },
  {
    id: 6,
    question: '¿Cómo protegen la privacidad y seguridad de mis datos?',
    answer: 'Protegemos tu privacidad y seguridad mediante el uso de medidas de seguridad avanzadas, como el cifrado SSL y el cumplimiento de las regulaciones de protección de datos.',
  },
  {
    id: 7,
    question: '¿Cómo puedo actualizar mi información de cuenta?',
    answer: 'Puedes actualizar tu información de cuenta iniciando sesión en nuestra página web y yendo a la sección de "Mi cuenta" o "Configuración de cuenta".',
  },
  {
    id: 8,
    question: '¿Cómo puedo cancelar mi suscripción?',
    answer: 'Puedes cancelar tu suscripción en cualquier momento iniciando sesión en nuestra página web y yendo a la sección de "Suscripciones" o enviando un correo electrónico a [dirección de correo electrónico].',
  },
  {
    id: 9,
    question: '¿Cómo puedo acceder a mi historial de pedidos?',
    answer: 'Puedes acceder a tu historial de pedidos iniciando sesión en nuestra página web y yendo a la sección de "Mis pedidos" o "Historial de pedidos".',
  },
  {
    id: 10,
    question: '¿Qué debo hacer si olvidé mi contraseña?',
    answer: 'Si olvidaste tu contraseña, puedes restablecerla haciendo clic en "¿Olvidaste tu contraseña?" en la página de inicio de sesión y siguiendo los pasos que se indican. También puedes contactar a nuestro equipo de soporte técnico para obtener ayuda en la recuperación de tu contraseña".',
  },

];

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">FAQs</h1>
      <div className="card-container">
        {questions.map((q) => (
          <div className="card" key={q.id}>
            <div className="card-header">
              <h2 className="card-title">{q.question}</h2>
            </div>
            <div className="card-body">
              <p className="card-text text-justify">{q.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
