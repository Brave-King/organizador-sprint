import React from 'react';
//import './Geeks.css';

const Geeks = () => {
  const geeks = [
    {
      id: 1,
      name: 'Elon Musk',
      title: 'CEO de SpaceX y Tesla',
      image: 'https://i.imgur.com/Z1xUxAb.jpg',
      bio: 'Empresario y magnate sudafricano nacionalizado estadounidense. Fundador de SpaceX, Tesla Inc., Neuralink, The Boring Company y Zip2. También fue cofundador de PayPal.',
      social: {
        twitter: 'elonmusk',
        instagram: 'elonmusk',
        linkedin: 'elonmusk'
      }
    },
    {
      id: 2,
      name: 'Ada Lovelace',
      title: 'Primera programadora de la historia',
      image: 'https://i.imgur.com/iCLOwbT.jpg',
      bio: 'Matemática y escritora británica, conocida por su trabajo sobre la máquina analítica de Charles Babbage. Es considerada la primera persona en escribir un algoritmo destinado a ser procesado por una máquina.',
      social: {
        twitter: 'adalovelace',
        instagram: 'adalovelace',
        linkedin: 'adalovelace'
      }
    },
    {
      id: 3,
      name: 'Linus Torvalds',
      title: 'Creador de Linux',
      image: 'https://i.imgur.com/KxX9zJC.jpg',
      bio: 'Ingeniero de software finlandés-estadounidense, conocido por haber iniciado el desarrollo del kernel Linux. También ha creado el sistema de control de versiones Git y ha contribuido a otros proyectos de software libre y de código abierto.',
      social: {
        twitter: 'Linus__Torvalds',
        instagram: 'linustorvalds',
        linkedin: 'linustorvalds'
      }
    }
  ];

  return (
    <div className="geeks-section">
      <div className="container">
        <h2 className="section-title">Conoce a los Geeks más famosos</h2>
        <div className="row">
          {geeks.map((geek) => (
            <div className="col-md-4" key={geek.id}>
              <div className="geek-card">
                <img src={geek.image} alt={geek.name} />
                <div className="geek-details">
                  <h3>{geek.name}</h3>
                  <p className="geek-title">{geek.title}</p>
                  <p className="geek-bio">{geek.bio}</p>
                  <div className="geek-social">
                    <a href={`https://twitter.com/${geek.social.twitter}`} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href={`https://www.instagram.com/${geek.social.instagram}`} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href={`https://www.linkedin.com/in/${geek.social.linkedin}`} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Geeks;
