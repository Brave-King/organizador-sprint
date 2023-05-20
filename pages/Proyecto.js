import React, { useState } from 'react';
import pdf1 from '../pdf/Actividad1.pdf';
import pdf2 from '../pdf/Actividad2.pdf';
import pdf3 from '../pdf/Actividad3.pdf';
import pdf4 from '../pdf/Actividad4.pdf';
import pdf5 from '../pdf/Actividad5.pdf';
import pdf6 from '../pdf/Actividad6.pdf';
import pdf7 from '../pdf/Actividad7.pdf';
import pdf8 from '../pdf/Actividad8.pdf';
import pdf9 from '../pdf/Actividad9.pdf';
import pdf10 from '../pdf/Actividad10.pdf';
import pdf11 from '../pdf/Actividad11.pdf';
import pdf12 from '../pdf/Actividad12.pdf';
import pdf13 from '../pdf/Actividad13.pdf';
import pdf14 from '../pdf/Actividad14.pdf';
import pdf15 from '../pdf/Actividad15.pdf';
import { Modal } from 'react-bootstrap';

const ProyectosList = [
  { name: "Actividad preliminar. ¡Compartamos!", pdf: pdf1 },
  { name: "Actividad 1.1 Metodología ágil SCRUM", pdf: pdf2 },
  { name: "Actividad 1.2 El product backlog", pdf: pdf3 },
  { name: "Actividad integradora Sprint, el corazón de SCRUM", pdf: pdf4 },
  { name: "Actividad 2.1 Aplicación de SCRUM", pdf: pdf5 },
  { name: "Actividad 2.2 El sprint Shedule", pdf: pdf6 },
  { name: "Actividad integradora El backlog y el sprint Schedule del proyecto", pdf: pdf7 },
  { name: "Actividad preliminar. Retomando mi primer sprint", pdf: pdf8 },
  { name: "Actividad 3.1 Primera fase de desarrollo, revisión y ajuste de los Sprints", pdf: pdf9 },
  { name: "Actividad 3.2 Segunda fase de desarrollo, revisión y ajuste de los Sprints y el backlog", pdf: pdf10 },
  { name: "Actividad 3.3 Tercera fase de desarrollo, revisión y ajuste de los Sprints y el backlog", pdf: pdf11 },
  { name: "Actividad integradora. Producto final U3", pdf: pdf12 },
  { name: "Actividad 4.1 Reunión de revisión inicial", pdf: pdf13 },
  { name: "Actividad 4.2 Reunión para revisión de modificaciones", pdf: pdf14 },
  { name: "Producto integrador El final del proceso", pdf: pdf15 }
];

const Proyectos = () => {
  const [Proyectos, setProyectos] = useState(ProyectosList);
  const [showModal, setShowModal] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('');
  const zipFileUrl = '../files/src.zip';
  const handleDownload = (pdf) => {
    setPdfSrc(pdf);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Listado de Actividades</h1>
      <div className="row">
        <div className="col">
          <ul className="activity-list">
            {Proyectos.map(activity => (
              <li key={activity.name} className="list-group-item d-flex justify-content-between align-items-center activity-item">
                {activity.name}
                <button className="btn btn-primary download-btn" onClick={() => handleDownload(activity.pdf)}>Descargar</button>
              </li>
            ))}
          </ul>
          <Modal show={showModal} onHide={handleCloseModal} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>PDF</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe src={pdfSrc} width="100%" height="500px"></iframe>
            </Modal.Body>
          </Modal>
          <a className="download-zip btn btn-success btn-lg" href={zipFileUrl} download>
            Código del Sistema
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
