/*import React from 'react';

function NewsItem({ title, link, imageUrl }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="news-item">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </div>
    </a>
  );
}

export default NewsItem;
*/

import React from 'react';

function NewsItem(props) {
  return (
    <div className="news-item">
      <div className="news-item-image">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="news-item-content">
        <h2>{props.title}</h2>
        <p>{props.descripcion}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">Leer más</a>
      </div>
    </div>
  );
}

export default NewsItem;
