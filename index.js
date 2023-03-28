/*
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NewsGrid from './components/NewsGrid.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
     <Navbar />
      <NewsGrid />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
import React from 'react';
import './App.css';
import NewsGrid from './components/NewsGrid';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsGrid />
      <Footer />
    </div>
  );
}

export default App;
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importamos las librerías de Bootstrap y jQuery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
