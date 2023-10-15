import React from 'react';
import ScrollReveal from 'scrollreveal';

const Proyectos = ({ proyectos }) => {
  React.useEffect(() => {
    ScrollReveal().reveal('.proyecto', { delay: 200 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8 mx-4 mb-20">
      <h2 className="text-3xl font-bold text-white mb-4">Proyectos</h2>
      <div className="grid grid-cols-2 gap-4">
        {proyectos.map((proyecto) => (
          <div
            className="proyecto p-4 rounded-lg shadow-lg bg-gray-800 text-center"
            key={proyecto.url}
          >
            <div className="w-full h-48 rounded-t-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={proyecto.image}
                alt={proyecto.name}
              />
            </div>
            <h3 className="text-xl font-bold text-white mt-4">{proyecto.name}</h3>
            <p className="text-gray-300 mt-2">{proyecto.description}</p>
            <a
              className="inline-block px-6 py-2 mt-4 rounded-full bg-blue-500 text-white hover:bg-blue-600"
              href={proyecto.url}
              target="_blank"
            >
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
