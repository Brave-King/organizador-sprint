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
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Geeks from './pages/Geeks';
import About from './pages/About';
import Activities from './pages/Activities';
import News from './pages/News';
import Events from './pages/Events';
import FAQs from './pages/Faqs';
import SignIn from './pages/Login';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/geeks" component={Geeks} />
          <Route path="/about" component={About} />
          <Route path="/actividades" component={Activities} />
          <Route path="/news" component={News} />
          <Route path="/eventos" component={Events} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
