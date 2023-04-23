import React, { useState, useEffect } from 'react';
import '../css/Noticias.css';
import image1 from '../images/ChatGPT-4.png';
import image2 from '../images/ChatGPT-3.png';
import image3 from '../images/ChatGPT-2.png';
import image4 from '../images/ChatGPT-1.png';

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
          ChatGPT
          </h1>
          <p className="news-text"><b>Explicador: ChatGPT: ¿qué es y para qué sirve el chatbot de OpenAI?</b></p>
          <p className="news-text">Una ilustración proyectada en una pantalla muestra una mano robótica y una humana moviéndose la una hacia la otra durante la Cumbre Global "AI for Good" en la Unión Internacional de Telecomunicaciones (UIT) en Ginebra, Suiza, 7 de junio de 2017. REUTERS/Denis Balibouse/File Photo</p>
          <p className="news-text">5 dic (Reuters) - El uso de la inteligencia artificial (IA) en las tecnologías emergentes sigue avanzando rápidamente. OpenAI, con sede en San Francisco, puso su última creación, el chatbot ChatGPT, a disposición del público para su prueba gratuita el 30 de noviembre. Un chatbot es una aplicación de software diseñada para imitar una conversación humana a partir de las instrucciones del usuario.</p>
          <p className="news-text">Una semana después de la presentación de ChatGPT, más de un millón de usuarios habían intentado hacer hablar a la herramienta, según Sam Altman, cofundador y consejero delegado de OpenAI.</p>
          <p className="news-text"><b>¿QUIÉN ES EL PROPIETARIO DE OPENAI Y ESTÁ INVOLUCRADO ELON MUSK?</b></p>
          <p className="news-text">OpenAI, una empresa de investigación y desarrollo, fue fundada como una organización sin fines de lucro en 2015 por el inversor de Silicon Valley Sam Altman y el multimillonario Elon Musk, y atrajo financiación de varios otros, incluido el capitalista de riesgo Peter Thiel. En 2019, el grupo creó una entidad con ánimo de lucro relacionada para acoger inversiones externas.</p>
          <p className="news-text">Musk, que sigue inmerso en su revisión de la red social Twitter, abandonó el consejo de OpenAI en 2018, pero intervino con su opinión sobre el fenómeno viral, calificándolo de "aterradoramente bueno".</p>
          <p className="news-text">Musk tuiteó más tarde que estaba pausando el acceso de OpenAI a la base de datos de Twitter después de enterarse de que la firma la estaba usando para "entrenar" la herramienta.</p>
          <p className="news-text"><b>CÓMO FUNCIONA EL CHATGPT DE OPENAI</b></p>
          <p className="news-text">OpenAI afirma que su modelo ChatGPT, entrenado mediante una técnica de aprendizaje automático llamada Reinforcement Learning from Human Feedback (RLHF), puede simular el diálogo, responder a preguntas de seguimiento, admitir errores, cuestionar premisas incorrectas y rechazar peticiones inapropiadas.</p>
          <p className="news-text">En el desarrollo inicial, los instructores humanos de IA proporcionaron al modelo conversaciones en las que interpretaban a ambas partes: el usuario y un asistente de IA. La versión del robot disponible para pruebas públicas intenta entender las preguntas de los usuarios y responde con respuestas detalladas que se asemejan a un texto escrito por humanos en formato conversacional.</p>
          <p className="news-text"><b>¿PARA QUÉ PUEDE SERVIR?</b></p>
          <p className="news-text">Una herramienta como ChatGPT podría utilizarse en aplicaciones reales como el marketing digital, la creación de contenidos en línea, la respuesta a consultas de atención al cliente o, como han descubierto algunos usuarios, incluso para ayudar a depurar código.</p>
          <p className="news-text">El bot puede responder a una gran variedad de preguntas imitando el estilo de habla humano.</p>
          <p className="news-text"><b>¿ES PROBLEMÁTICO?</b></p>
          <p className="news-text">Como ocurre con muchas innovaciones basadas en la IA, ChatGPT no está exenta de dudas. OpenAI ha reconocido la tendencia de la herramienta a responder con "respuestas plausibles pero incorrectas o sin sentido", un problema que considera difícil de solucionar.</p>
          <p className="news-text">La tecnología de IA también puede perpetuar prejuicios sociales como los relacionados con la raza, el género y la cultura. Gigantes de la tecnología como Google (GOOGL.O), de Alphabet Inc, y Amazon.com (AMZN.O) han reconocido anteriormente que algunos de sus proyectos de experimentación con IA eran "éticamente peligrosos" y que no se habían llevado a cabo.</p>
          <b>- Martin Pizano</b>
          <hr/>

        </div>
        <div className="col-md-4">
          <h2 className="other-news-title">Otras noticias</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="Noticia2" className="other-news-link">Amazon anuncia un recorte masivo de su personal nuevamente</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia4" className="other-news-link">Cómo funcionan y cuales son las limitaciones de los Grandes Modelos de Lenguaje</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia5" className="other-news-link">Microsoft amplía el acceso a ChatGPT ante los rumores de inversión en OpenAI</a>
            </li>
            <li className="list-group-item">
              <a href="Noticia6" className="other-news-link">Adobe Firefly y la popularización de la Inteligencia Artificial</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
