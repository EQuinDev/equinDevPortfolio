import React, { useEffect } from 'react';
import '../styles/habilidades.css';
import ScrollReveal from 'scrollreveal';

const Habilidades = () => {
  // Importa todas las imágenes png de la carpeta src/img/icons
  const images = import.meta.globEager('../images/habilidades/*.svg');

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.skills-gallery', { duration: 2000 });
  }, []);

  const handleHabilidadesClick = (event) => {
    event.preventDefault();
    const sectionElement = document.querySelector('#habilidades');
    if (sectionElement) {
      const headerHeight = document.querySelector('nav').clientHeight; // Altura del header
      const offset = headerHeight + 1000; // Ajusta este valor según sea necesario
      window.scroll({
        top: sectionElement.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="skills-container mt-20">
      <h2 className="text-3xl font-bold mb-4 text-white">Mis habilidades</h2>
      <div className="skills-gallery bg-gray-800 p-4 rounded-lg">
        {Object.entries(images).map(([path, image]) => (
          <img
            key={path}
            src={image.default}
            alt="Icono de habilidad"
            className="skills-icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
