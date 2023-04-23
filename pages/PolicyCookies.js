import React from 'react';


const policycookiesList = [
    {
        id: 1,
        title: '¿Qué son las cookies?',
        description: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estos archivos permiten que el sitio web recuerde tus preferencias y te ofrezca una experiencia personalizada.',
    },
    {
        id: 2,
        title: '¿Qué tipos de cookies utilizamos?',
        description: 'Utilizamos los siguientes tipos de cookies en nuestro sitio web:<br/><ol><li>Cookies técnicas: estas cookies son necesarias para el funcionamiento del sitio web y nos permiten ofrecerte servicios esenciales, como la autenticación y la seguridad.</li><li>Cookies de análisis: utilizamos cookies de análisis para recopilar información sobre cómo utilizas nuestro sitio web y mejorar su funcionamiento.</li><li>Cookies de publicidad: utilizamos cookies de publicidad para mostrar anuncios relevantes y personalizados en nuestro sitio web y en otros sitios web.</li></ol>',
    },
    {
        id: 3,
        title: '¿Cómo puedes controlar el uso de cookies?',
        description: 'Puedes configurar tu navegador para que te informe cuando se estén utilizando cookies y para que las rechace. También puedes eliminar las cookies existentes en tu dispositivo en cualquier momento.<br />Ten en cuenta que algunas partes de nuestro sitio web pueden no funcionar correctamente si desactivas las cookies. Además, la desactivación de las cookies de publicidad no significa que no recibirás anuncios, sino que los anuncios que recibas serán menos relevantes para ti.',
    },
    {
        id: 4,
        title: '¿Cómo puedes obtener más información sobre las cookies?',
        description: 'Si deseas obtener más información sobre las cookies y cómo funcionan, te recomendamos visitar sitios web especializados como <a href="www.aboutcookies.org" target="_blank">www.aboutcookies.org</a> o <a href="www.allaboutcookies.org" target="_blank">www.allaboutcookies.org</a>.<br />Si tienes alguna pregunta o inquietud sobre nuestra política de cookies, no dudes en contactarnos a través de los medios de contacto proporcionados en nuestra política de privacidad.',
    },
];

const PolicyCookies = () => {
    return (
        <div className="container">
            <hr />
            <h1 className="title">Política de cookies del sitio web</h1>
            <p className="text-justify">En noticias geeks, utilizamos cookies y otras tecnologías similares para mejorar la experiencia de navegación de nuestros usuarios y ofrecer servicios personalizados. A continuación, te explicamos cómo utilizamos estas tecnologías y cómo puedes controlar su uso.</p>
            <div className="card-container">
                {policycookiesList.map((q) => (
                    <div className="card" key={q.id}>
                        <div className="card-header">
                            <h2 className="card-title">{q.title}</h2>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-justify" dangerouslySetInnerHTML={{ __html: q.description }}></p>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default PolicyCookies;
