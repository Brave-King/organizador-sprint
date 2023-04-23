import React from 'react';


const policyList = [
    {
        id: 1,
        title: 'Recopilación de datos personales',
        description: 'Cuando accedes y utilizas nuestro sitio web, podemos recopilar los siguientes datos personales:<br/><ul><li>Información de contacto: tu nombre, dirección de correo electrónico y otros datos de contacto que decidas proporcionarnos.</li><li>Información demográfica: tu edad, género y ubicación geográfica.</li><li>Información de uso: información sobre tu navegación en nuestro sitio web, incluyendo las páginas que visitas y el tiempo que pasas en cada una.</li></ul><br />Toda la información recopilada se almacena de forma segura y se utiliza únicamente para los fines descritos en esta política de privacidad.',
    },
    {
        id: 2,
        title: 'Uso de los datos personales',
        description: 'Utilizamos los datos personales recopilados para los siguientes fines:<br/><ul><li>Para ofrecerte una experiencia personalizada en nuestro sitio web, mostrándote contenido relevante y adaptado a tus intereses.</li><li>Para enviar comunicaciones de marketing y promociones relacionadas con noticias geeks y sus servicios.</li><li>Para mejorar nuestro sitio web y servicios, basándonos en la retroalimentación de los usuarios.</li><li>Para cumplir con nuestras obligaciones legales y fiscales.</li></ul>',
    },
    {
        id: 3,
        title: 'Compartición de datos personales',
        description: 'Podemos compartir tus datos personales con terceros proveedores de servicios que nos ayudan a ofrecer nuestro sitio web y servicios. Estos proveedores de servicios solo tienen acceso a los datos personales necesarios para realizar su trabajo y se comprometen a utilizarlos únicamente para los fines descritos en esta política de privacidad.<br />También podemos compartir tus datos personales cuando así lo exige la ley o en caso de una investigación policial o judicial.',
    },
    {
        id: 4,
        title: 'Cookies y tecnologías similares',
        description: 'Utilizamos cookies y otras tecnologías similares para recopilar información sobre el uso de nuestro sitio web. Estas tecnologías nos permiten ofrecer una experiencia personalizada en nuestro sitio web y mejorar nuestros servicios.<br />Puedes configurar tu navegador para que te informe cuando se estén utilizando cookies y para que las rechace. Ten en cuenta que algunas partes de nuestro sitio web pueden no funcionar correctamente si desactivas las cookies.',
    },
    {
        id: 5,
        title: 'Seguridad de los datos personales',
        description: 'Tomamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos personales contra el acceso no autorizado, la divulgación, la alteración o la destrucción.',
    },
    {
        id: 6,
        title: 'Derechos de los titulares de datos personales',
        description: 'Los titulares de datos personales tienen los siguientes derechos:<br /><ul><li> <b>Derecho de acceso:</b> el derecho a obtener información sobre los datos personales que recopilamos y utilizamos.</li><li><b>Derecho de rectificación:</b> el derecho a corregir datos personales inexactos o incompletos.</li><li><b>Derecho de supresión:</b> el derecho a solicitar la eliminación de los datos personales.</li><li><b>Derecho de oposición:</b> el derecho a oponerse al uso de los datos personales para ciertos fines.</li><li><b>Derecho de portabilidad:</b> el derecho a recibir los datos personales en un formato estructurado y legible por máquina.</li></ul><br />Para ejercer estos derechos, puedes contactarnos a través de los medios de contacto, enlistados en el footer de la página.',
    },
];

const Policy = () => {
    return (
        <div className="container">
            <hr />
            <h1 className="title">Política de Privacidad</h1>
            <div className="card-container">
                {policyList.map((q) => (
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
        </div>
    );
};

export default Policy;
