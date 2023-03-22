/*
import React from 'react';
import Navbar from './components/Navbar';
import NewsGrid from './components/NewsGrid';
import './css/NewsGrid.css';

function App() {
  return (
    <div className="app">
      <NewsGrid />
    </div>
  );
}

export default App;
*/

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
