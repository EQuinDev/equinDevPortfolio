import React from 'react';
import '../styles/responsivo.css';
import fotoLinkedin from '../images/media/linkedin_icon.svg';
import fotoGitHub from '../images/icons/github.svg';


const Footer = () => {
  const linkedinLink = 'https://www.linkedin.com/in/equinteros98/';
  const githubLink = 'https://github.com/EQuinDev';

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>Todos los derechos reservados | Año 2024</p>
        <div className="flex space-x-4">
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fotoLinkedin}
              alt="Logo de LinkedIn"
              className="h-12"
            />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fotoGitHub}
              alt="Logo de GitHub"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
