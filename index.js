
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