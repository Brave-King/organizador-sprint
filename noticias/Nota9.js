import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/Apple-4.webp';
import image2 from '../images/Apple-3.webp';
import image3 from '../images/Apple-2.webp';
import image4 from '../images/Apple-1.webp';

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
          Por si ocupas: Hacks y novedades que llegaron con iOS 16.4 y debes conocer
          </h1>
          <p className="news-text">Apple suele romperla con cada actualización o nuevo dispositivo y la llegada de iOS 16 no fue la excepción. Pero comno todo en esta vida se puede mejorar, sus versiones siguientes como iOS 16.4 trajeron aún más hacks y novedades para sacarle el mayor provecho posible a tu iPhone.</p>
          <p className="news-text">Acá en Sopitas.com ya te hemos hablado de 10 hacks de iOS 16 y cómo activarlos en tu dispositivo, así que ahora traemos algunas novedades que llegaron con iOS 16.4 para que también las utilices desde ya.</p>
          <p className="news-text">De acuerdo, iOS 16.4 no representa EL cambio porque no es una versión completa, sino una actualización de iOS 16. Pero como decíamos, trajo consigo algunas mejoras, correcciones y nuevas funciones interesantes que debes conocer y a continuación te enlistamos algunas.</p>
          <p className="news-text">Si tienes un iPhone es probable que conozcas la función de Aislamiento de voz, una novedad que (como dice el nombre) aisla tu voz de los ruidos ambientales en una llamada de FaceTime para evitar interrupciones y molestias. Bueno, iOS 16.4 ya implementa eso también en llamadas telefónicas.</p>
          <p className="news-text">El hack para activar esta nueva función es simple: nomás inicias la llamada y deslizas para abrir el Centro de Control; seleccionas el micrófono y ahí debe estar la opción Aislamiento de voz.</p>
          <p className="news-text">Con iOS 16.4 puedes recibir notificaciones de las páginas web de tu interés en el iPhone tal como ocurre con tu Mac. Únicamente debes agregar la página de la que quieras recibir las notificaciones push a tu pantalla de inicio.</p>
          <p className="news-text">Desde un burro, pasando por un alce, un corazón gris, una flauta, alas de ángel y hasta un abanico. iOS 16.4 presentó 21 nuevos emojis bastante chidos y pues acá no hay mayor secreto, están disponibles desde que actualizas tu iPhone a esta versión.</p>
          <p className="news-text">HomeKit, también conocida como app Casa (para interactuar desde el iPhone con diferentes aparatos domésticos del hogar), presentó varios problemas con iOS 16 y 16.2 que la versión 16.4 corrige y mejora con un rediseño de su arquitectura para hacer la app más fiable, veloz y fácil de usar.</p>
          <p className="news-text">Desde colores únicos para cada ícono, más cámaras para ver tu casa completa en cualquier momento, nuevas categorías en la parte superior y un acceso directo desde el Centro de Control, la app promete bastante.</p>
          <p className="news-text">Los modos de concentración son muy útiles para evitar notificaciones o cualquier interrupción al estar trabajando, descansando o en tu tiempo libre. Con la actualización de iOS 16.4 podrás elegir si deseas mantener la pantalla siempre encedida o no cuando actives alguno. Te aparece la opción al intentar elegirlos.</p>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
          <li className="list-group-item">
              <a href="Noticia8" className="other-news-link">Chat GPT vs Bard: Días que han marcado diferencias a favor de Microsoft</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia1" className="other-news-link">Inteligencia Artificial y su avance en los videojuegos</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia2" className="other-news-link">Amazon anuncia un recorte masivo de su personal nuevamente</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia3" className="other-news-link">ChatGPT</a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
