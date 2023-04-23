import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/terms.css';

const Terms = () => {

    const termsList = [
        {
            id: 1,
            title: "Propiedad intelectual",
            description: "Todos los contenidos del sitio web, incluyendo, entre otros, textos, imágenes, vídeos, gráficos, logotipos, marcas registradas y otros materiales, están protegidos por leyes de propiedad intelectual y son propiedad exclusiva de noticias geeks o de terceros proveedores de contenido. El uso no autorizado de estos contenidos puede violar las leyes de propiedad intelectual.",
        },
        {
            id: 2,
            title: "Responsabilidad del usuario",
            description: "El usuario es el único responsable del uso del sitio web y de los contenidos que publica en el mismo. El usuario se compromete a no utilizar el sitio web para fines ilegales o fraudulentos, ni para difundir información falsa o engañosa. El usuario se compromete a respetar los derechos de propiedad intelectual de noticias geeks y de terceros proveedores de contenido.",
        },
        {
            id: 3,
            title: "Política de privacidad",
            description: "El usuario reconoce haber leído y aceptado nuestra política de privacidad, la cual describe cómo recopilamos, utilizamos y protegemos sus datos personales.",
        },
        {
            id: 4,
            title: "Enlaces a terceros",
            description: "El sitio web puede contener enlaces a sitios web de terceros. noticias geeks no es responsable de los contenidos de estos sitios web ni de las prácticas de privacidad de sus propietarios. El usuario accede a estos sitios web por su cuenta y riesgo.",
        },
        {
            id: 5,
            title: "Modificaciones",
            description: "Noticias Geeks se reserva el derecho de modificar estas condiciones de uso en cualquier momento y sin previo aviso. El uso continuado del sitio web después de cualquier modificación constituirá la aceptación de las nuevas condiciones de uso.",
        },
        {
            id: 6,
            title: "Limitación de responsabilidad",
            description: "Noticias Geeks no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso del sitio web o de la imposibilidad de usarlo, incluyendo, entre otros, pérdida de beneficios, interrupción de negocios o pérdida de información.",
        },
        {
            id: 7,
            title: "Resolución de conflictos",
            description: "Cualquier conflicto que surja del uso del sitio web será resuelto mediante el arbitraje de acuerdo con las reglas de arbitraje de la Asociación Americana de Arbitraje. La ley aplicable será la de México.",
        }
    ];
    const conditionsList = [
        {
            id: 1,
            title: "Objeto",
            description: "Los presentes términos y condiciones establecen las condiciones de uso del sitio web de noticias geeks. El sitio web tiene como objetivo ofrecer información sobre noticias, tendencias y novedades relacionadas con la tecnología y el mundo geek.",
        },
        {
            id: 2,
            title: "Acceso y uso del sitio web",
            description: "El acceso y uso del sitio web es gratuito y no requiere registro. No obstante, noticias geeks se reserva el derecho de restringir el acceso a ciertas secciones o funcionalidades del sitio web a usuarios registrados.<br />El usuario se compromete a utilizar el sitio web de forma lícita, respetando los derechos de propiedad intelectual de noticias geeks y de terceros proveedores de contenido. El usuario se compromete a no difundir contenidos ilegales, ofensivos o perjudiciales para terceros.<br />El usuario es el único responsable de la información que publica en el sitio web. noticias geeks se reserva el derecho de retirar cualquier contenido que considere inapropiado o que incumpla estas condiciones de uso.",
        },
        {
            id: 3,
            title: "Propiedad intelectual",
            description: "Todos los contenidos del sitio web, incluyendo, entre otros, textos, imágenes, vídeos, gráficos, logotipos, marcas registradas y otros materiales, están protegidos por leyes de propiedad intelectual y son propiedad exclusiva de noticias geeks o de terceros proveedores de contenido. El uso no autorizado de estos contenidos puede violar las leyes de propiedad intelectual.<br />El usuario reconoce que no adquiere ningún derecho de propiedad intelectual sobre los contenidos del sitio web al utilizarlo.",
        },
        {
            id: 4,
            title: "Política de privacidad",
            description: "El usuario reconoce haber leído y aceptado nuestra política de privacidad, la cual describe cómo recopilamos, utilizamos y protegemos sus datos personales.",
        },
        {
            id: 5,
            title: "Ley aplicable y jurisdicción",
            description: "Estos términos y condiciones se regirán e interpretarán de acuerdo con la ley de México.",
        }
    ];

    return (
        <Container>
            <Row className="justify-content-center">
                <Col sm={12} md={12} lg={12}>
                    <hr></hr>
                    <h1 className="text-center my-4">Condiciones de uso del sitio web</h1>
                    <div className="mb-12">
                        <div className="card-container">
                            {termsList.map((q) => (
                                <div className="card" key={q.id}>
                                    <div className="card-header">
                                        <h2 className="card-title">{q.title}</h2>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text text-justify">{q.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr></hr>
                    <h1 className="text-center my-4">Terminos de uso del sitio web</h1>                    <div className="mb-12">
                        <div className="card-container">
                            {conditionsList.map((q) => (
                                <div className="card" key={q.id}>
                                    <div className="card-header">
                                        <h2 className="card-title">{q.title}</h2>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text text-justify">{q.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-justify">
                        Cualquier conflicto que surja del uso del sitio web será resuelto mediante el arbitraje de acuerdo con las reglas de arbitraje de la Asociación Americana de Arbitraje. La ley aplicable será la de México.
                    </p>
                    <p className="text-justify">
                        Si no estás de acuerdo con estas condiciones de uso, no utilices nuestro sitio web.
                    </p>
                    <h3 className="text-center mt-4 mb-0">¡Gracias por visitarnos!</h3>
                    <hr></hr>
                </Col>
            </Row>
        </Container>
    );
};

export default Terms;
