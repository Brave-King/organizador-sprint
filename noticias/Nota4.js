import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/Lenguajes-4.jpg';
import image2 from '../images/Lenguajes-3.jpg';
import image3 from '../images/Lenguajes-2.png';
import image4 from '../images/Lenguajes-1.jpg';

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
          Cómo funcionan y cuales son las limitaciones de los Grandes Modelos de Lenguaje
          </h1>
          <p className="news-text">Hoy en día, la llamada “Inteligencia Artificial” es algo de lo que se escucha todos los días de manera reciente gracias a los avances que los Grandes Modelos de Lenguaje, o LLMs por sus siglas en inglés, han realizado en el mundo tecnológico en los últimos años. Y si bien en general estas noticias se enfocan en los avances realizados en este ámbito, poco se habla de las limitaciones de la llamada “Inteligencia Artificial” y la tecnología detrás de los Grandes Modelos de Lenguaje que dan pie a esta área tecnológica.</p>
          <p className="news-text">Pero para poder entender dichas limitaciones, primero tenemos que saber al menos las bases de cómo es que estos modelos funcionan. Los grandes modelos de lenguaje están diseñados para aprender el lenguaje humano a través de grandes cantidades de datos de texto. Estos modelos utilizan técnicas de aprendizaje automático, en particular el aprendizaje profundo, para aprender patrones y estructuras lingüísticas en el texto y luego generar texto de manera autónoma.</p>
          <p className="news-text">Los grandes modelos de lenguaje funcionan a través de una arquitectura en la que se alimenta una gran cantidad de datos de texto sin procesar, como libros, artículos, publicaciones en redes sociales, entre otros, al modelo. El modelo utiliza técnicas de procesamiento del lenguaje natural para analizar los datos y aprender patrones de lenguaje en el texto, como la gramática, el vocabulario y la sintaxis. Una vez que el modelo ha aprendido estos patrones, se puede utilizar para generar texto nuevo, responder preguntas, realizar traducciones y completar tareas similares.</p>
          <p className="news-text">Podemos ilustrar la manera en cómo estos modelos de lenguaje trabajan con la labor de las abejas en los panales al recoger el polen de las flores, de cómo intercambian información sobre la ubicación de las flores y la calidad del polen, y con la capacidad de producir miel de alta calidad y en grandes cantidades.</p>
          <p className="news-text">Los modelos más avanzados, como GPT-3 (Generative Pre-trained Transformer 3), pueden incluso generar texto coherente y convincente en una amplia variedad de géneros y estilos, como noticias, ficción, poesía, entre otros, y también pueden realizar tareas más complejas, como la traducción de idiomas y la respuesta a preguntas complejas.</p>
          <p className="news-text">Pero a pesar de dichos avances, hay que tener en cuenta también las limitaciones con las que esta tecnología cuenta en la actualidad, el acceso limitado a la información en lenguajes de recursos limitados, se puede deber a la poca investigación realizada o incluso traducida a un idioma en específico, o en áreas o temas nichos o muy especializados. Modelos entrenados en el idioma inglés pueden no funcionar en otros idiomas con las limitaciones anteriormente mencionadas, o ciertos modelos entrenados en textos generales de internet pueden no contar con el conocimiento adecuado para responder preguntas concretas a un área especializada, como las finanzas o la biología.</p>
          <p className="news-text">De igual manera, hay que tener en cuenta que estos modelos no pueden entender por completo el contexto y significado de las palabras que procesan, ya que estos están basados en patrones de información, y no pueden inferir o razonar de la misma manera de cómo una persona lo hace en el mundo real. Esto puede generar errores o respuestas inapropiadas o incorrectas al enfrentarse a un escenario inesperado.</p>
          <p className="news-text">Otros factores que limitan de gran manera a estos modelos, es que resultan costosos de entrenar y correr, pues los requerimientos computacionales suelen ser significativos, y suelen requerir de grandes cantidades de poder computacional, motivo que los vuelve también intensivos en su gasto de energía, además de que los con la que estos modelos está entrenada cuenta con sus correspondientes sesgos de información.</p>

          <b>- RAMIRO CESAR VARGAS CARDENAS</b>
          <hr/>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="Noticia3" className="other-news-link">ChatGPT</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia5" className="other-news-link">Microsoft amplía el acceso a ChatGPT ante los rumores de inversión en OpenAI</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia6" className="other-news-link">Adobe Firefly y la popularización de la Inteligencia Artificial</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia7" className="other-news-link">Elon Musk utiliza Twitter para humillar a un empleado despedido: El tipo no hizo ningún trabajo real</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
