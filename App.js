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
import ContactForm from './components/Contacto';
import Home from './pages/Home';
import Geeks from './pages/Geeks';
import About from './pages/About';
import Activities from './pages/Activities';
import News from './pages/News';
import Events from './pages/Events';
import FAQs from './pages/Faqs';
import SignIn from './pages/Login';
import Newsletter from './pages/Newsletter';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import PolicyCookies from './pages/PolicyCookies';
import Noticia1 from './noticias/Nota1';
import Noticia2 from './noticias/Nota2';
import Noticia3 from './noticias/Nota3';
import Noticia4 from './noticias/Nota4';
import Noticia5 from './noticias/Nota5';
import Noticia6 from './noticias/Nota6';
import Noticia7 from './noticias/Nota7';
import Noticia8 from './noticias/Nota8';
import Noticia9 from './noticias/Nota9';
import Proyecto from './pages/Proyecto';

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
          <Route path="/Newsletter" component={Newsletter} />
          <Route path="/Terms" component={Terms} />
          <Route path="/Policy" component={Policy} />
          <Route path="/PolicyCookies" component={PolicyCookies} />
          <Route path="/Proyecto" component={Proyecto} />
          <Route path="/Contact" component={ContactForm} />
          <Route path="/Noticia1" component={Noticia1} />
          <Route path="/Noticia2" component={Noticia2} />
          <Route path="/Noticia3" component={Noticia3} />
          <Route path="/Noticia4" component={Noticia4} />
          <Route path="/Noticia5" component={Noticia5} />
          <Route path="/Noticia6" component={Noticia6} />
          <Route path="/Noticia7" component={Noticia7} />
          <Route path="/Noticia8" component={Noticia8} />
          <Route path="/Noticia9" component={Noticia9} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
