/*
import React from 'react';

const Home = () => {
  return (
    <div id="actividades">
      <h1>Actividades</h1>
      <p className="text-justify">¡No te pierdas las últimas actividades para geeks! Aquí te presentamos una lista de eventos interesantes en los que podrías estar interesado:</p>
      <div className="card">
        <img src="./imagen.jpg" className="card-img-top" alt="Descripción de la imagen" />
        <div className="card-title">
          Conferencia de tecnología de vanguardia
        </div>
        <div className="card-body">
          <p>¡No te Conferencia</p>
        </div>
      </div>

      <div className="card">
        <img src="./imagen.jpg" className="card-img-top" alt="Descripción de la imagen" />
        <div className="card-title">
          Hackathon de inteligencia artificial
        </div>
        <div className="card-body">
          <p>No te Hackathon</p>
          <p>Fecha:<br></br>
          Lugar:<br></br></p>
        </div>
      </div>

      <div className="card">
        <img src="./imagen.jpg" className="card-img-top" alt="Descripción de la imagen" />
        <div className="card-title">
        Competencia de videojuegos
        <p>Fecha:<br></br>
          Lugar:<br></br></p>
        </div>
        <div className="card-body">
          <p>No te Competencia de videojuegos</p>
          <p>Fecha:<br></br>
          Lugar:<br></br></p>
        </div>
      </div>

      <ol>
        <ul>
          <h3>Conferencia de tecnología de vanguardia</h3>
          <p>¿Eres fanático de la tecnología de vanguardia? ¡Entonces no te pierdas esta conferencia! Aquí podrás conocer las últimas innovaciones tecnológicas y aprender de expertos en la materia. Fecha: 15 de mayo de 2022. Lugar: Centro Universitario de Ciencias Económico Administrativas de la Universidad de Guadalajara.</p>
        </ul>
        <ul>
          <h3>Hackathon de inteligencia artificial</h3>
          <p>Si eres un apasionado de la inteligencia artificial, ¡este evento es para ti! Participa en el hackathon de IA y comparte tus ideas con otros geeks. Fecha: 1 y 2 de junio de 2022. Lugar: Sistema de Universidad Virtual, Universidad de Guadalajara.</p>
        </ul>
        <ul>
          <h3>Competencia de videojuegos</h3>
          <p>¿Eres un gamer apasionado? Demuestra tus habilidades en la competencia de videojuegos. Habrá varios juegos disponibles, desde clásicos hasta los últimos lanzamientos. ¡La diversión está garantizada! Fecha: 20 de julio de 2022. Lugar: Paraninfo de la Universidad de Guadalajara.</p>
        </ul>
        <ul>
          <h3>Feria de tecnología</h3>
          <p>La feria de tecnología es un evento que no te puedes perder. Podrás conocer las últimas tendencias en tecnología y probar los productos más nuevos en el mercado. Además, habrá charlas y talleres de expertos en el área. Fecha: 25 al 27 de agosto de 2022. Lugar: Expo Guadalajara.</p>
        </ul>
        <ul>
          <h3>Conferencia de ciberseguridad</h3>
          <p>La seguridad en línea es cada vez más importante, y esta conferencia te ayudará a estar al día en las últimas tendencias y soluciones de ciberseguridad. Expertos en la materia compartirán sus conocimientos y mejores prácticas. Fecha: 10 de septiembre de 2022. Lugar: Por Confirmar.</p>
        </ul>
      </ol>

    </div>
  );
};

export default Home;
*/
/*
import React from 'react';

const activities = [
  {
    title: 'Conferencia de tecnología de vanguardia',
    description: '¡No te pierdas esta conferencia!',
    image: './imagen.jpg',
  },
  {
    title: 'Hackathon de inteligencia artificial',
    description: '¡Participa en este hackathon!',
    image: './imagen.jpg',
    date: 'Fecha',
    location: 'Lugar',
  },
  {
    title: 'Competencia de videojuegos',
    description: '¡Demuestra tus habilidades en esta competencia!',
    image: './imagen.jpg',
    date: 'Fecha',
    location: 'Lugar',
  },
];

const ActivityCard = ({ activity }) => {
  return (
    <div className="card">
      <img src={activity.image} className="card-img-top" alt="Descripción de la imagen" />
      <div className="card-title">
        {activity.title}
      </div>
      <div className="card-body">
        <p>{activity.description}</p>
        {activity.date && <p>Fecha: {activity.date}</p>}
        {activity.location && <p>Lugar: {activity.location}</p>}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div id="actividades">
      <h1>Actividades</h1>
      <p className="text-justify">¡No te pierdas las últimas actividades para geeks! Aquí te presentamos una lista de eventos interesantes en los que podrías estar interesado:</p>
      {activities.map(activity => <ActivityCard key={activity.title} activity={activity} />)}
    </div>
  );
};

export default Home;
*/
import React, { useState } from 'react';
import image1 from '../images/Actividades-1.jpg';
import image2 from '../images/Actividades-2.jpg';
import image3 from '../images/Actividades-3.jpg';
import image4 from '../images/Actividades-4.jpg';
import image5 from '../images/Actividades-5.jpg';
const activities = [
  {
    id: 1,
    title: 'Conferencia de tecnología de vanguardia',
    description: '¿Eres fanático de la tecnología de vanguardia? ¡Entonces no te pierdas esta conferencia! Aquí podrás conocer las últimas innovaciones tecnológicas y aprender de expertos en la materia.',
    date: '25 de mayo de 2023',
    location: 'Centro Universitario de Ciencias Económico Administrativas de la Universidad de Guadalajara',
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Hackathon de inteligencia artificial',
    description: 'Si eres un apasionado de la inteligencia artificial, ¡este evento es para ti! Participa en el hackathon de IA y comparte tus ideas con otros geeks.',
    date: '1 y 2 de junio de 2023',
    location: 'Sistema de Universidad Virtual, Universidad de Guadalajara',
    imageUrl: image3,
  },
  {
    id: 3,
    title: 'Competencia de videojuegos',
    description: '¿Eres un gamer apasionado? Demuestra tus habilidades en la competencia de videojuegos. Habrá varios juegos disponibles, desde clásicos hasta los últimos lanzamientos. ¡La diversión está garantizada!',
    date: '20 de julio de 2023',
    location: 'Paraninfo de la Universidad de Guadalajara',
    imageUrl: image2,
  },
  {
    id: 4,
    title: 'Feria de tecnología',
    description: 'La feria de tecnología es un evento que no te puedes perder. Podrás conocer las últimas tendencias en tecnología y probar los productos más nuevos en el mercado. Además, habrá charlas y talleres de expertos en el área.',
    date: '25 al 27 de agosto de 2023',
    location: 'Expo Guadalajara',
    imageUrl: image4,
  },
  {
    id: 5,
    title: 'Conferencia de ciberseguridad',
    description: 'La seguridad en línea es cada vez más importante, y esta conferencia te ayudará a estar al día en las últimas tendencias y soluciones de ciberseguridad. Expertos en la materia compartirán sus conocimientos y mejores prácticas.',
    date: '10 de septiembre de 2023',
    location: 'Por Confirmar',
    imageUrl: image5,
  },
  
];

const ActivityCard = ({ activity }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleRegister = () => {
    alert('Te has registrado en el evento ' + activity.title);
  };

  return (
    <div className="card">
      <img src={activity.imageUrl} className="card-img-top" alt="Descripción de la imagen" />
      <div className="card-title">
        {activity.title}
      </div>
      <div className="card-body">
        <p className='text-justify'>{activity.description}</p>
        {showDetails && (
          <div>
            <p><b>Fecha:</b> {activity.date}</p>
            <p><b>Lugar:</b> {activity.location}</p>
            <button onClick={handleRegister}>Registrarse</button>
          </div>
        )}
        <button className='btn_actividades' onClick={handleToggleDetails}>{showDetails ? 'Ocultar detalles' : 'Mostrar detalles'}</button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container">
    <h1 className="title">Actividades</h1>
      <p className="text-justify">¡No te pierdas las últimas actividades para geeks! Aquí te presentamos una lista de eventos interesantes en los que podrías estar interesado:</p>
      <div className="card-container">
      {activities.map(activity => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
    </div>
  );
};

export default Home;
