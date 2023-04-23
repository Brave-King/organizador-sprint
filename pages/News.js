import React from 'react';
import NewsItem from './NewsItem';
import image1 from '../images/ia-videojuegos-001.jpeg';
import image2 from '../images/Amazon-1.jpg';
import image3 from '../images/ChatGPT-1.png';
import image4 from '../images/Lenguajes-4.jpg';
import image5 from '../images/ChatGPT-2.png';
import image6 from '../images/adobe-firefly-4.jpeg';
import image7 from '../images/Twitter-3.png';
import image8 from '../images/Chat-vs-bard-3.jpg';
import image9 from '../images/Apple-4.webp';




const news_1 = [
  {
    id: 1,
    title: 'Inteligencia Artificial y su avance en los videojuegos',
    link: 'Noticia1',
    descripcion: 'Los videojuegos han contado a lo largo de su historia con grandes avances tecnológicos que principalmente llegan a ser notorios en el aspecto visual...',
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Amazon anuncia un recorte masivo de su personal nuevamente',
    link: 'Noticia2',
    descripcion: 'Amazon recortará 9.000 puestos de trabajo más, según anunció este lunes el CEO de la compañía, Andy Jassy, en un memorando enviado al personal...',
    imageUrl: image2,
  },
  {
    id: 3,
    title: 'ChatGPT',
    link: 'Noticia3',
    descripcion: 'ChatGPT: ¿qué es y para qué sirve el chatbot de OpenAI?...',
    imageUrl: image3,
  },
  {
    id: 4,
    title: 'Cómo funcionan y cuales son las limitaciones de los Grandes Modelos de Lenguaje',
    link: 'Noticia4',
    descripcion: 'Hoy en día, la llamada “Inteligencia Artificial” es algo de lo que se escucha todos los días de manera reciente gracias a los avances que los Grandes Modelos de Lenguaje, o LLM...',
    imageUrl: image4,
  },
  {
    id: 5,
    title: 'Microsoft amplía el acceso a ChatGPT ante los rumores de inversión en OpenAI',
    link: 'Noticia5',
    descripcion: 'Microsoft Corp (MSFT.O) dijo el lunes que está ampliando el acceso al software enormemente popular de OpenAI, un startup que está respaldando...',
    imageUrl: image5,
  },
  {
    id: 6,
    title: 'Adobe Firefly y la popularización de la Inteligencia Artificial',
    link: 'Noticia6',
    descripcion: 'En los últimos años la cantidad de avances que se ha realizado en el campo de la llamada “inteligencia artificial” ha mostrado...',
    imageUrl: image6,
  },
  {
    id: 7,
    title: 'Elon Musk utiliza Twitter para humillar a un empleado despedido: El tipo no hizo ningún trabajo real',
    link: 'Noticia7',
    descripcion: 'Musk mantiene una incómoda entrevista pública de salida con Haraldur Thorleifsson, que no estaba seguro de si había sido despedido o no...',
    imageUrl: image7,
  },
  {
    id: 8,
    title: 'Chat GPT vs Bard: Días que han marcado diferencias a favor de Microsoft',
    link: 'Noticia8',
    descripcion: 'Desde que chat-GPT fue anunciado este no ha hecho más que ganar popularidad y a su vez hacer que muchos otros servicios AI también ganen atención...',
    imageUrl: image8,
  },
  {
    id: 9,
    title: 'Hacks y novedades que llegaron con iOS 16.4 y debes conocer',
    link: 'Noticia9',
    descripcion: 'Apple suele romperla con cada actualización o nuevo dispositivo y la llegada de iOS 16 no fue la excepción. Pero comno todo en esta vida se puede mejorar...',
    imageUrl: image9,
  },
];

function News() {
  return (
    <div className="news-grid">
      {news_1.map((item) => (
        <NewsItem
          key={item.id}
          title={item.title}
          descripcion={item.descripcion}
          link={item.link}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default News;
