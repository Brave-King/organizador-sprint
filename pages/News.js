import React from 'react';
import NewsItem from './NewsItem';

const news_1 = [
  {
    id: 1,
    title: 'Apple presenta su último iPhone',
    link: 'https://geeks.com/noticia1',
    descripcion: 'La compañía tecnológica Apple presentó hoy su último modelo de iPhone...',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/09/24/08/31/pixel-cells-3699334_1280.png',
  },
  {
    id: 2,
    title: 'Descubren nueva especie de animal marino',
    link: 'https://geeks.com/noticia2',
    descripcion: 'Científicos del Instituto de Oceanografía descubrieron una nueva especie de animal marino en las profundidades del océano Atlántico.',
    imageUrl: 'https://cdn.pixabay.com/photo/2022/10/04/14/27/cat-7498364_1280.jpg',
  },
  {
    id: 3,
    title: 'Noticia 3',
    link: 'https://geeks.com/noticia3',
    descripcion: 'Descripcion 3',
    imageUrl: 'https://cdn.pixabay.com/photo/2022/12/30/17/32/boho-art-7687374_1280.jpg',
  },
  {
    id: 4,
    title: 'Noticia 4',
    link: 'https://geeks.com/noticia4',
    descripcion: 'Descripcion 4',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/09/03/12/06/marvel-1641554_1280.jpg',
  },
  {
    id: 5,
    title: 'Noticia 5',
    link: 'https://geeks.com/noticia5',
    descripcion: 'Descripcion 5',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/07/03/18/08/read-2468469_1280.jpg',
  },
  {
    id: 6,
    title: 'Noticia 6',
    link: 'https://geeks.com/noticia6',
    descripcion: 'Descripcion 6',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/09/16/17/17/geek-1674585_1280.jpg',
  },
  {
    id: 7,
    title: 'Noticia 7',
    link: 'https://geeks.com/noticia7',
    descripcion: 'Descripcion 7',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/05/07/20/03/gamer-4186905_1280.png',
  },
  {
    id: 8,
    title: 'Noticia 8',
    link: 'https://geeks.com/noticia8',
    descripcion: 'Descripcion 8',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/08/26/08/16/mario-3631666_1280.png',
  },
  {
    id: 9,
    title: 'Noticia 9',
    link: 'https://geeks.com/noticia9',
    descripcion: 'Descripcion 9',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_1280.png',
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
