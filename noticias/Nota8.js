import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/Chat-vs-bard-4.jpeg';
import image2 from '../images/Chat-vs-bard-3.jpg';
import image3 from '../images/Chat-vs-bard-2.jpg';
import image4 from '../images/Chat-vs-bard-1.png';

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
          Chat GPT vs Bard: Días que han marcado diferencias a favor de Microsoft
          </h1>
          <p className="news-text">Desde que chat-GPT fue anunciado este no ha hecho más que ganar popularidad y a su vez hacer que muchos otros servicios AI también ganen atención como Dalle-2, Mid Journey que generan imágenes, o el nuevo servicio de Google llamado MusicLM que es básicamente un Chat-GPT para generar música, entre otros servicios que forman parte de una lista de nuevas plataformas que van creciendo conforme al paso de los meses.</p>
          <p className="news-text">Pero hablando de Chat-GPT específicamente a Google no le viene nada bien, principalmente porque este servicio hace que las personas realicen menos búsquedas.</p>
          <p className="news-text">Es decir, si chat-GPT ya lo hace por mí, porque tendría que hacerlo yo.</p>
          <p className="news-text"><b>La Guerra de los Chats</b></p>
          <p className="news-text">Aunque no lo parezca empresas muy grandes han entrado en una competencia contra el tiempo acerca de cuál será la plataforma por defecto para hacer preguntas mediante un chat inteligente. de forma similar como paso con la guerra de los navegadores en las que empresas como Netscape y Microsoft competían por ser el navegador más usado, ahora vemos a Microsoft y Google se encuentran en una competencia por ser la plataforma más usada por defecto para realizar consultas. Podríamos decir que nos encontramos en la Guerra de los Chats.</p>
          <p className="news-text">Esto nos lleva a que en una sola semana se han visto varios anuncios relacionados a nuevos servicios que están basados en AI por parte de estas dos empresas.</p>
          <p className="news-text">AL inicio de esta semana, Google lanzo Bard, que es el nuevo chat de Google, el cuál competiría con Chat-GPT, y que está basado en su propio modelo llamado Lamda, que por cierto podemos decir que no le fue muy bien en su presentación ya que arrojó una pregunta errónea haciendo que sus acciones cayeran rápidamente.</p>
          <p className="news-text">A solo un día después de que Microsoft anunció que Chat-GPT estará integrado en su buscador Bing y a su navegador Microsoft Edge, lo que es básicamente un desafío directo al dominio que tiene Google.</p>
          <p className="news-text">Y no es para menos, porque en el nuevo Bing, adicional que puedes hacer búsquedas habituales, ahora hay una pestaña chat, que te permite hacer preguntas relacionadas al tema que has buscado. Es decir, chat-GPT, pero la diferencia principal que tiene este Chat de Bing con chat-GPT es que aquí si puedes hacer preguntas sobre eventos actuales y no eventos que sucedieron hace 2 años.</p>
          <p className="news-text">De hecho, esto de tener información actualizada también es una característica de Bard. Pero algo que deja muy atrás a Google, es el nuevo Edge que ahora tiene integrado también a Chat-GPT, lo que significa que puedes usar prácticamente con cualquier sitio web, red social o plataforma que quieras.</p>
          <p className="news-text">Por ejemplo, que cuando leas archivos como PDFs, el chat pueda darte un resumen de los puntos claves o tú puedes ir preguntándole información, incluso puedes comparar tus archivos con información de otras páginas de la web, O si entras en stack overflow puedes hacer preguntas, o hacer que convierta una porción de código a otro lenguaje. Es decir, puedes tener a GitHub copilot en todos los sitios web; o en redes sociales como Linkedin, puedes decirle que te escriba una publicación, insertando parámetros como los puntos importantes e incluso el tono del mensaje.</p>
          <p className="news-text">Por supuesto estos aún son anuncios así que hay que esperar al acceso público de estas características, pero si quieres usarlas antes, hay una lista de espera a la que puedes unirte gratuitamente.</p>
          <p className="news-text">Además, Microsoft ha extendido su financiación a OpenAI lo que lo lleva a querer integrar chat-GPT en todos los productos de Microsoft, como en Microsoft Teams, que ahora se pueden tomar notas importantes de forma automática en reuniones, los cuáles se pretenden implementar en Azure, lo que significara que cualquier aplicación ahora también puede usar estos servicios, lo que nos llevara a simplemente ver más y más aplicaciones con este tipo de funcionalidades inteligentes.</p>
          <p className="news-text"><b>Estos Chat cambian todo</b></p>
          <p className="news-text">Aunque parecería que solo estamos hablando de Chat, estos en realidad cambian en gran parte la experiencia de como los usuarios navegan y crean la web.</p>
          <p className="news-text">Primero Chat-GPT es muchísimo más avanzado que los asistentes inteligentes que ya hemos visto antes como Google Assistant o Siri, así que quizás eventualmente veamos una mejorar en este tipo de herramientas</p>
          <p className="news-text">¿El SEO morirá?, al usar servicios de chats, ¿Que tan relevante serán los servicios de publicidad?</p>
          <p className="news-text">¿Como se financia la creación de contenido? Gran parte de los artículos, noticias, blogs, tutoriales y contenido en general que se encuentra disponible en la web, es bastante dependiente de los anuncios. Si las Web Ads son irrelevantes y chat-GPT quita las visitas, no se imprimen anuncios. así que si eres creador de contenido, ¿Vale invertir tiempo para poder ganar menos?, las plataformas de anuncios pueden verse muy afectadas. Esto significa que estos chats en un punto tendrán que dar parte de sus ganancias a los sitios de los que extraen el contenido.</p>
          <p className="news-text">Empezaran a marcar contenidos generados por AI. Muchos estudiantes aprovecharon la facilidad de generación de texto y han usado chat-GPS para generar informes, ensayos, incluso para generar tesis. Y ya seria otro tema saber que tan útiles son realmente esas tesis. pero lo cierto es que también necesitaremos identificar que textos son generados por estas AI, y cuales por humanos.</p>
          <p className="news-text">Temas como la generación de contenido autónomo, crear un artículo ahora es prácticamente instantáneo, ya estoy empezando a ver en plataformas como YouTube o tiktok, avatar de AI, con textos generados con chat-GPT, y sintetizadores de voz. aunque las consecuencias de crear contenido con dichas herramientas se podrán ver reflejadas conforme al tiempo.</p>
          <p className="news-text"><b>Conclusión</b></p>
          <p className="news-text">En fin, Microsoft de momento lleva una delantera bastante grande con respecto a Google y no está desaprovechando esta ventaja. Si las cosas siguen así, esto realmente podría significar un golpe muy duro para Google, y sus servicios, e incluso otras empresas del sector como Apple y Amazon, que pueden quedarse atrás.</p>
          <p className="news-text">Así que esperemos cómo funcionan el lanzamiento de estas herramientas y como son aceptadas por el usuario final, pero de momento no luce nada bien para Google.</p>
          <b>- Ricardo Vieyra</b>
          <hr/>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="Noticia7" className="other-news-link">Elon Musk utiliza Twitter para humillar a un empleado despedido: El tipo no hizo ningún trabajo real</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia9" className="other-news-link">Por si ocupas: 7 hacks y novedades que llegaron con iOS 16.4 y debes conocer</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia1" className="other-news-link">Inteligencia Artificial y su avance en los videojuegos</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia2" className="other-news-link">Amazon anuncia un recorte masivo de su personal nuevamente</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
