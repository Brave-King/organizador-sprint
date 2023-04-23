import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/Twitter-4.jpg';
import image2 from '../images/Twitter-3.png';
import image3 from '../images/Twitter-2.jpg';
import image4 from '../images/Twitter-1.png';

const Home = () => {
  const images = [
    { src: image1, alt: 'Imagen 1' },
    { src: image2, alt: 'Imagen 2' },
    { src: image3, alt: 'Imagen 3' },
    { src: image4, alt: 'Imagen 4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <hr></hr>
      <br />
      <div className="row">
        <div className="col-md-8">
          <img
            className="news-image"
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
          />
          <h1 className="news-title">
          Elon Musk utiliza Twitter para humillar a un empleado despedido: El tipo no hizo ningún trabajo real
          </h1>
          <p className="news-text">Musk mantiene una incómoda entrevista pública de salida con Haraldur Thorleifsson, que no estaba seguro de si había sido despedido o no. En un momento dado, Musk le respondió con emojis de risa.</p>
          <p className="news-text">Así sucedió: Un empleado de Twitter que no estaba seguro de si había sido despedido o no recurrió a tuitear al CEO Elon Musk el lunes por la noche, quien respondió realizando una entrevista pública de salida durante la cual se burló del ex-empleado y trató de justificar el no pagarle.</p>
          <p className="news-text">Después de que el hilo cobrará fuerza, Musk tuiteó: "¿Pero fue despedido? No, ¡no puedes ser despedido si no estabas trabajando en primer lugar!".</p>
          <p className="news-text">El exempleado, Haraldur Thorleifsson, reside en Islandia y empezó a trabajar en Twitter en 2021, después de que la plataforma de medios sociales comprara su empresa Ueno para ayudarle a diseñar nuevos productos. Pero hace más de una semana, el acceso corporativo de Thorleifsson a Twitter se cortó después de que la compañía llevará a cabo otra serie de despidos. </p>
          <p className="news-text">¿El único problema? Thorleifsson dijo que el departamento de recursos humanos de Twitter no podía confirmar si seguía trabajando en la empresa, por lo que no estaba claro si había sido despedido o no. Así que el lunes tuiteó a Musk, esperando una respuesta.</p>
          <p className="news-text">En su respuesta, Musk preguntó a Thorleifsson qué hacía en la empresa. Thorleifsson enumeró entonces todos sus esfuerzos por mejorar el diseño en Twitter y reducir costes. Musk, sin embargo, se mostró escéptico y desdeñoso. En un momento dado, respondió con emojis de risas llorosas. En otra respuesta, Musk publicó una escena de la película de 1999 Office Space, que muestra a dos consultores entrevistando a un empleado que lucha por justificar su puesto en la empresa.</p>
          <p className="news-text">En medio de estas idas y venidas, el departamento de RRHH de Twitter se puso en contacto con Thorleifsson para confirmarle que, efectivamente, había sido despedido, dice Thorleifsson.</p>
          <p className="news-text">"Lo cual está bien y ocurre todo el tiempo. Las empresas despiden a la gente, están en su derecho", escribió. Sin embargo, Thorleifsson se pregunta ahora si Twitter le pagará lo que le debe de su contrato. "O, ¿intentará @elonmusk, una de las personas más ricas del mundo, evitar pagar?". añadió Thorleifsson.</p>
          <p className="news-text">Musk se inclina por lo segundo. "La realidad es que este tipo (que es rico de forma independiente) no hizo ningún trabajo real, alegó como excusa que tenía una discapacidad que le impedía teclear, y sin embargo estaba tuiteando simultáneamente como una tormenta. No puedo decir que le tenga mucho respeto", tuiteó Musk.</p>

          <b>- Martin Pizano</b>
          <hr/>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="Noticia6" className="other-news-link">Inteligencia Artificial y su avance en los videojuegos</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia8" className="other-news-link">Chat GPT vs Bard: Días que han marcado diferencias a favor de Microsoft</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia9" className="other-news-link">Por si ocupas: 7 hacks y novedades que llegaron con iOS 16.4 y debes conocer</a>
            </li>
            <a href="Noticia1" className="other-news-link">Inteligencia Artificial y su avance en los videojuegos</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
