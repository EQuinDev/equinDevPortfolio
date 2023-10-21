import React from 'react';
import fotoLinkedin from '../images/icons/linkedin.svg';
import fotoGitHub from '../images/icons/github.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>Todos los derechos reservados | Año 2023</p>
        <div className="flex space-x-4">
          <img
            src={fotoLinkedin} 
            alt="Logo de LinkedIn"
            className="h-12"
          />
          <img
            src={fotoGitHub} 
            alt="Logo de GitHub"
            className="h-12"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
