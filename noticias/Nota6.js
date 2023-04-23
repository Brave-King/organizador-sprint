import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/adobe-firefly-4.jpeg';
import image2 from '../images/adobe-firefly-3.jpeg';
import image3 from '../images/adobe-firefly-2.jpeg';
import image4 from '../images/adobe-firefly-1.png';

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
          Adobe Firefly y la popularización de la Inteligencia Artificial.
          </h1>
          <p className="news-text">En los últimos años la cantidad de avances que se ha realizado en el campo de la llamada “inteligencia artificial” ha mostrado una cantidad enorme de avances, desde modelos de lenguaje en chat a la generación de arte vía texto, e incluso también dando paso a algunas herramientas para la creación de música o video, por mencionar algunos.</p>
          <p className="news-text">Y si bien varias de estas herramientas contaban ya sea con sus modelos de código abierto, plataformas en línea y distintos modelos de comercialización, la mayoría de ellos contando con versiones gratuitas y de paga, la implementación de este tipo de herramientas por parte de Adobe, una de las más grandes compañías en el campo de la producción visual, tanto en formato de imágenes como de audio y videos es un paso que seguro catapultara el uso e implementación de esta tecnología a pasos agigantados en los siguientes años.</p>
          <p className="news-text">En comparación a otros modelos de Inteligencia Artificial dedicados a la creación de arte, Firefly de Adobe implementa un par de herramientas de edición más tradicionales de los programas de foto-edición y manipulación digital, como pinceles digitales, selectores y herramientas de borrado, que agregado al dinamismo de la generación de imagen por texto expande las posibilidades de los editores digitales en gran medida.</p>
          <p className="news-text">Más herramientas como extensión de imágen, 3d a imagen, texto a patrón, texto a pincel son algunas de las innovaciones en las que se encuentra trabajando en estos momentos mientras que Firefly se encuentra en periodo beta. El fin de este modelo de inteligencia artificial está planeado para integrarse a las herramientas de la familia Adobe, desde sus herramientas de edición de imágenes, fotografías y vectores como Photoshop e Illustrator, a las de vídeo como Premiere Pro o After Effects.</p>
          <p className="news-text">El aspecto más atractivo de este anuncio es la implementación de una interfaz mucho más amigable e intuitiva para aquellas personas que estén ya familiarizadas con los softwares de Adobe, algo que deja ver en claro que esta herramienta está pensada para trabajar con todos los programas de la familia Adobe en un futuro no muy lejano, y que seguramente es algo que veremos a otras compañías implementar pronto en herramientas similares o incluso en otro tipo de programas y paqueterías.</p>
          <p className="news-text">Mientras que Firefly al momento se encuentra en su periodo beta, no cabe duda de que en un futuro cercano otras compañías implementarán modelos de inteligencia artificial similares, aplicados a su ramo específico, ya sea edición de texto, audio, videos, efectos especiales y animación, por mencionar algunas de las más evidentes.</p>

          <b>- RAMIRO CESAR VARGAS CARDENAS</b>
          <hr/>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="Noticia5" className="other-news-link">Microsoft amplía el acceso a ChatGPT ante los rumores de inversión en OpenAI</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia7" className="other-news-link">Elon Musk utiliza Twitter para humillar a un empleado despedido: El tipo no hizo ningún trabajo real</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia8" className="other-news-link">Chat GPT vs Bard: Días que han marcado diferencias a favor de Microsoft</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia9" className="other-news-link">Por si ocupas: 7 hacks y novedades que llegaron con iOS 16.4 y debes conocer</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
