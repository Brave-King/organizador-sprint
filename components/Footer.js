import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h4>Contáctanos</h4>
            <ul>
              <li>Teléfono: 123-456-7890</li>
              <li>Email: info@noticiasgeeks.com</li>
              <li>Dirección: 1234 Calle Principal</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-4">
            <h4>Redes Sociales</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-4">
            <h4><a href="/about">Acerca de Nosotros</a></h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p>
              © 2023 Noticias Geeks. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <ul>
              <li><a href="terms">Términos y Condiciones</a></li>
              <li><a href="policy">Política de Privacidad</a></li>
              <li><a href="PolicyCookies">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
