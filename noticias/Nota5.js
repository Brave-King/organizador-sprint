import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/ChatGPT-3.png';
import image2 from '../images/ChatGPT-1.png';
import image3 from '../images/ChatGPT-2.png';
import image4 from '../images/ChatGPT-4.png';

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
          Microsoft amplía el acceso a ChatGPT ante los rumores de inversión en OpenAI
          </h1>
          <p className="news-text">Microsoft Corp (MSFT.O) dijo el lunes que está ampliando el acceso al software enormemente popular de OpenAI, un startup que está respaldando cuyo futurista chatbot ChatGPT ha cautivado a Silicon Valley.</p>
          <p className="news-text">Microsoft ha declarado que la tecnología del startup, que hasta ahora sólo se había puesto a disposición de sus clientes de computación en la nube en un programa denominado Azure OpenAI Service, ya está disponible de forma general, una distinción que se espera que traiga consigo una avalancha de nuevos usuarios.</p>
          <p className="news-text">La noticia se produce cuando Microsoft ha considerado agregar a la participación de $ 1 mil millones en OpenAI que anunció en 2019, dos personas familiarizadas con el asunto dijeron previamente a Reuters. El sitio de noticias Semafor informó a principios de este mes que Microsoft podría invertir $10 mil millones; Microsoft se negó a comentar sobre cualquier acuerdo potencial.</p>
          <p className="news-text">El interés público por OpenAI se disparó tras el lanzamiento en noviembre de ChatGPT, un chatbot basado en texto que puede redactar prosa, poesía o incluso código informático a la orden. ChatGPT funciona con inteligencia artificial generativa, que crea nuevos contenidos tras entrenarse con grandes cantidades de datos, una tecnología que Microsoft está permitiendo utilizar a más clientes.</p>
          <p className="news-text">ChatGPT en sí, y no sólo su tecnología subyacente, estará pronto disponible a través de la nube de Microsoft, según se indica en una entrada de blog.</p>
          <p className="news-text">Microsoft afirma que está examinando las aplicaciones de los clientes para mitigar posibles abusos del software, y que sus filtros pueden detectar contenidos nocivos que los usuarios puedan introducir o que la tecnología pueda producir.</p>
          <p className="news-text">El potencial comercial de este tipo de software ha suscitado una inversión masiva de capital riesgo en las nuevas empresas que lo producen, en un momento en que la financiación se ha agotado. Algunas empresas ya han utilizado la tecnología para crear contenidos de marketing o demostrar cómo podría negociar una factura de cable.</p>
          <p className="news-text">Microsoft dijo que CarMax, KPMG y otras empresas estaban utilizando su servicio Azure OpenAI. Su comunicado de prensa citaba a un vicepresidente de Al Jazeera diciendo que el servicio podría ayudar a la organización de noticias a resumir y traducir contenidos.</p>

          <b>- Martin Pizano</b>
          <hr/>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="Noticia4" className="other-news-link">Cómo funcionan y cuales son las limitaciones de los Grandes Modelos de Lenguaje</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia6" className="other-news-link">Adobe Firefly y la popularización de la Inteligencia Artificial</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia7" className="other-news-link">Elon Musk utiliza Twitter para humillar a un empleado despedido: El tipo no hizo ningún trabajo real</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia8" className="other-news-link">Chat GPT vs Bard: Días que han marcado diferencias a favor de Microsoft</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
