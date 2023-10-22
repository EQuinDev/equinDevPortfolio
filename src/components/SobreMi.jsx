import myPhoto from '../images/media/Yo.webp';
import codingImage from '../images/media/coding.webp'; // Agregamos la imagen de fondo
import Typewriter from 'typewriter-effect';

const SobreMi = () => {
    const containerStyle = {
        background: `url(${codingImage})`, // Agregamos la imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Altura mínima para asegurar que no se tape por el encabezado
        padding: '1rem',
        borderRadius: '10px', // Borde redondeado
    };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '1rem', // Espaciado superior
    background: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '10px', // Borde redondeado para el texto
    padding: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h2 className="text-4xl font-bold text-white mb-5 md:text-5xl">
          <Typewriter
            options={{
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Elías Quinteros').start();
            }}
          />
        </h2>
        <p className="text-white text-lg md:text-xl">
          <Typewriter
            options={{
              delay: 20,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Ingeniero informático con experiencia en front-end, SQL y ciencia de datos. Especializado en aplicaciones web interactivas, consultas de bases de datos y análisis de datos con Python.').start();
            }}
          />
        </p>
      </div>
      <img
        src={myPhoto}
        alt="Mi foto"
        className="rounded-full w-64 h-auto border-4 border-white mb-4"
      />
    </div>
  );
};

export default SobreMi;
