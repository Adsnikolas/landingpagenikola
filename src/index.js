import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Element } from 'react-scroll';

import './index.css';
import Navbar from './header';
import Inicio from './inicio';
import Servicos from './servicos';
import Qualidades from './qualidades';
import SobreMim from './sobremin';
import ContrateNos from './contratenos';




const App = () => {
  return (

    <React.StrictMode>

      <Navbar />
      <Link to="inicio" smooth={true} duration={500}>
      </Link>

      <Link to="servicos" smooth={true} duration={500}>
      </Link>

      <Link to="qualidades" smooth={true} duration={500}>
      </Link>

      <Link to="sobremim" smooth={true} duration={500}>
      </Link>

      <Link to="contratenos" smooth={true} duration={500}>
      </Link>


      <Element name="inicio" className="section">
        <Inicio />
      </Element>

      <Element name="servicos" className="section">
        <Servicos />
      </Element>

      <Element name="qualidades" className="section">
        <Qualidades />
      </Element>

      <Element name="sobremim" className="section">
        <SobreMim />
      </Element>

      <Element name="contratenos" className="section">
        <ContrateNos />
      </Element>

    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
