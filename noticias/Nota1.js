import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/ia-videojuegos-004.jpg';
import image2 from '../images/ia-videojuegos-003.jpg';
import image3 from '../images/ia-videojuegos-002.jpg';
import image4 from '../images/ia-videojuegos-001.jpeg';

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
            Inteligencia Artificial y su avance en los videojuegos
          </h1>
          <p className="news-text">Los videojuegos han contado  a lo largo de su historia con grandes avances tecnológicos que principalmente llegan a ser notorios en el aspecto visual, pero uno de los más importantes ha sido siempre el desarrollo de la inteligencia artificial que se desarrolla para proporcionarle al mundo, obstaculos y enemigos que encontraremos en los mundos virtuales de los videojuegos.</p>
          <p className="news-text">La principal forma de inteligencia artificial con la que nos solemos enfrentar suele ser aquella que determina el comportamiento de los personajes no jugadores,, todo esto dependiendo de las reglas y el género con el que el título a jugar cuente: los personajes no jugadores requieren de diferentes instrucciones y decisiones entre un shooter y un juego de deportes, por lo que los algoritmos desarrollados no contarán con la misma estructura para que estos personajes puedan reaccionar a nuestras acciones.</p>
          <p className="news-text">Entre algunas de las tareas principales con las que un algoritmo o árbol de decisiones debe contar podemos listar la búsqueda de rutas, la navegación por el entorno, equilibrio en la dificultad y la capacidad de aprender, por mencionar algunas.</p>
          <p className="news-text">Este paulatino desarrollo comenzó a mostrar sus primeros avances significativos en los 1980s, cuando juegos como Karate Champ de 1984 le proporcionaba diferentes personalidades a sus luchadores, o First Queen de 1988, que se volvió en el primer juego en contar con personajes no jugadores que seguían al jugador.</p>
          <p className="news-text">Los noventas contaron con un gran salto en este tipo de tecnología, pues la aparición de juegos de estrategia en tiempo real como Commandos, Starcraft o Age of Empires le proporcionaban a los enemigos la habilidad de desarrollar tácticas y estrategias conforme a los movimientos realizados por el jugador, al igual que modular dichas estrategias para proporcionar distintos niveles de dificultad, a la par de usar los recursos dentro del nivel de forma eficiente.</p>
          <p className="news-text">Uno de los títulos más significativos que contribuyó al desarrollo de enemigos con comportamientos más humanos fue el primer título de la ya larga saga de Metal Gear Solid para el PlayStation original en el ya lejano año de 1998, ya que los soldados dentro del juego no seguían una ruta predefinida, además de que abandonaban sus puestos para investigar si escuchaban un ruido extraño, veían huellas o pisadas, entre otras acciones más.</p>
          <p className="news-text">El siguiente paso fue el desarrollo de generación procedural, que se ha utilizado para generar diversas partes del juego de forma automática y aleatoria. Títulos como Daggerfall o Diablo dieron los primeros pasos en 1996, el primero desarrollando varios elementos de su mapeado, NPC’s, misiones y objetos en tiempo real y en 3D, mientras que el segundo generaba algunos contenidos de forma algorítmica, sobre la marcha.</p>
          <p className="news-text">Más destacados resultan títulos como Spore, donde se creaban microorganismos y se generaban galaxias enteras donde crecer y evolucionar como ecosistema, o Minecraft, el título de exploración y creación en donde teóricamente el mapa podría llegar hasta los 4.722.366.482.869.645 Km², un área que seguramente nadie se atrevería a recorrer en su totalidad.</p>
          <p className="news-text">Con el surgimiento de las nuevas tecnologías de inteligencia artificial, se espera que el desarrollo de misiones y submisiones, al igual que el de el diálogo de personajes no jugadores, no solo se agilice, sino que también tenga un desenvolvimiento mucho más natural dentro de los videojuegos, aunque al estar esta tecnología todavía en pleno desarrollo, faltará ver cómo es aplicada está dentro de la industria de los videojuegos, pero no cabe duda que las posibilidades en aplicar la misma se expandirá exponencialmente en tan solo un par de años cuando surjan los primeros ejemplos que se volverán en la nueva referencia a tomar en cuenta.</p>

          <b>- RAMIRO CESAR VARGAS CARDENAS</b>
          <hr/>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="Noticia9" className="other-news-link">Por si ocupas: 7 hacks y novedades que llegaron con iOS 16.4 y debes conocer</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia2" className="other-news-link">Amazon anuncia un recorte masivo de su personal nuevamente</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia3" className="other-news-link">ChatGPT</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia4" className="other-news-link">Cómo funcionan y cuales son las limitaciones de los Grandes Modelos de Lenguaje</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
