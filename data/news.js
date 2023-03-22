const news = [
  {
    title: 'Noticia 1',
    url: 'https://www.ejemplo.com/noticia1'
  },
  {
    title: 'Noticia 2',
    url: 'https://www.ejemplo.com/noticia2'
  },
  {
    title: 'Noticia 3',
    url: 'https://www.ejemplo.com/noticia3'
  },
  {
    title: 'Noticia 4',
    url: 'https://www.ejemplo.com/noticia4'
  },
  {
    title: 'Noticia 5',
    url: 'https://www.ejemplo.com/noticia5'
  },
  {
    title: 'Noticia 6',
    url: 'https://www.ejemplo.com/noticia6'
  },
  {
    title: 'Noticia 7',
    url: 'https://www.ejemplo.com/noticia7'
  },
  {
    title: 'Noticia 8',
    url: 'https://www.ejemplo.com/noticia8'
  },
  {
    title: 'Noticia 9',
    url: 'https://www.ejemplo.com/noticia9'
  },
];

function NewsItem({ title, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="news-item">{title}</div>
    </a>
  );
}

function NewsGrid() {
  return (
    <div className="news-grid">
      {news.map(({ title, url }) => (
        <NewsItem title={title} url={url} key={url} />
      ))}
    </div>
  );
}

export default NewsGrid;
