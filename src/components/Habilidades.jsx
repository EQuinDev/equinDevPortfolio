import { useEffect } from 'react';
import '../styles/habilidades.css';
import ScrollReveal from 'scrollreveal';

const Habilidades = () => {
  // Importa todas las imágenes svg de la carpeta src/images/icons
  const images = import.meta.globEager('../images/icons/*.svg');

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.skills-gallery', { duration: 2000 });
  }, []);

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
