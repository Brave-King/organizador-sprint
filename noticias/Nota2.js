import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/Amazon-4.jpg';
import image2 from '../images/Amazon-3.jpg';
import image3 from '../images/Amazon-2.jpg';
import image4 from '../images/Amazon-1.jpg';

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
          Amazon anuncia un recorte masivo de su personal nuevamente
          </h1>
          <p className="news-text">Amazon recortará 9.000 puestos de trabajo más, según anunció este lunes el CEO de la compañía, Andy Jassy, en un memorando enviado al personal.</p>
          <p className="news-text">Los últimos recortes se producen después de que la empresa anunciara a principios de este año que eliminaría unos 18.000 puestos como parte de un importante intento de reducción de costos del gigante del comercio electrónico. Jassy dijo que la nueva ronda de recortes de empleo tendrá lugar en las próximas semanas y afectará principalmente a las personas que trabajan en las divisiones Amazon Web Services, People Experience and Technology (PXT), publicidad y Twitch.</p>
          <p className="news-text">Así mismo, Meta, matriz de Facebook, planea despedir a otros 10.000 empleados</p>
          <p className="news-text">“Esta fue una decisión difícil, pero creemos que es lo mejor para la empresa a largo plazo”, escribió Jassy en el memorando. Algunos pueden preguntarse por qué no incluimos estas reducciones de puestos en los anuncios de hace un par de meses”, agregó Jassy. “</p>
          <p className="news-text">“La respuesta breve es que no todos los equipos terminaron sus análisis a fines del otoño; y en lugar de apresurarnos a realizar estas evaluaciones sin la diligencia adecuada, decidimos compartir estas decisiones tal como las tomamos para que las personas tuvieran la información lo antes posible”.</p>
          <p className="news-text">Los últimos despidos en Amazon se producen en medio de una serie de recortes de empleos en la industria de la tecnología en los últimos meses, ya que el sector enfrenta un latigazo en la demanda de bienes y servicios digitales inducida por la pandemia y una incertidumbre macroeconómica más amplia.</p>
          <p className="news-text">Amazon, al igual que otras empresas de Big Tech, también aumentó rápidamente su plantilla durante los primeros días de la pandemia. Jassy escribió este lunes que la contratación “tenía sentido dado lo que estaba sucediendo en nuestros negocios y en la economía en general”.</p>
          <p className="news-text">“Sin embargo, dada la economía incierta en la que vivimos y la incertidumbre que existe sobren el futuro cercano, hemos optado por ser más eficientes con nuestros costos y personal”, agregó.</p>
          <p className="news-text">La semana pasada, Meta, matriz de Facebook, anunció que despediría a otros 10.000 trabajadores, además de los 11.000 recortes de empleo anunciados a fines del año pasado.</p>

          <b>- Ricardo Vieyra</b>
          <hr/>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="Noticia1" className="other-news-link">Inteligencia Artificial y su avance en los videojuegos</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia3" className="other-news-link">ChatGPT</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia4" className="other-news-link">Cómo funcionan y cuales son las limitaciones de los Grandes Modelos de Lenguaje</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia5" className="other-news-link">Microsoft amplía el acceso a ChatGPT ante los rumores de inversión en OpenAI</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
