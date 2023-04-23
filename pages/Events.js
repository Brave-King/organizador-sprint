import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/Events.css';
import image1 from '../images/Eventos-1.jpg';
import image2 from '../images/Eventos-2.jpg';
import image3 from '../images/Eventos-3.jpg';
import image4 from '../images/Eventos-4.jpg';

const conferencias = [
  {
    id: 1,
    titulo: 'E3 2023',
    descripcion: 'La Electronic Entertainment Expo (E3) es un evento anual de la industria de los videojuegos que se lleva a cabo en Los Ángeles...',
    imagenUrl: image1,
  },
  {
    id: 2,
    titulo: 'CES 2023',
    descripcion: 'El Consumer Electronics Show (CES) es una feria anual de electrónica de consumo que se lleva a cabo en Las Vegas...',
    imagenUrl: image2,
  }
];

const novedades = [
  {
    id: 1,
    titulo: 'Samsung Galaxy S22',
    descripcion: 'El Samsung Galaxy S22 es el próximo teléfono móvil de la serie Samsung Galaxy S, que se espera sea lanzado en 2023...',
    imagenUrl: image4,
  },
  {
    id: 2,
    titulo: 'Windows 11',
    descripcion: 'Windows 11 es la próxima versión del sistema operativo Windows de Microsoft que se espera sea lanzada en 2022...',
    imagenUrl: image3,
  }
];

const NoticiasListado = ({ noticias }) => {
  return (
    <Container>
      <Row className="row">
        {noticias.map((noticia) => (
          <Col key={noticia.id} sm={12} md={6} lg={6} xl={6} className="col">
            <Card className="card">
              <Card.Img variant="top" src={noticia.imagenUrl} className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">{noticia.titulo}</Card.Title>
                <Card.Text className="card-text">{noticia.descripcion}</Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h2>Conferencias de tecnología y videojuegos</h2>
        <NoticiasListado noticias={conferencias} />
      </div>
      <div>
        <h2>Novedades en tecnología</h2>
        <NoticiasListado noticias={novedades} />
      </div>
    </div>
  );
};

export default App;
