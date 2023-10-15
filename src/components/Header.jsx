import '../styles/responsivo.css';

const Header = () => {
    const handleClick = (event, sectionId) => {
      event.preventDefault();
      const sectionElement = document.querySelector(`#${sectionId}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const headerStyle = {
        backgroundColor: '#222', // Color de fondo oscuro
        padding: '1.5rem 1rem', // Espaciado superior e inferior aumentado
    };

    const linkStyle = 'text-white text-xl font-bold hover:text-blue-500'; // Estilo común para los enlaces

    return (
      <nav className="flex justify-between items-center fixed z-50 w-full top-0 left-0" style={headerStyle}>
        <a 
          href="#"
          onClick={(event) => handleClick(event, 'inicio')} 
          className={linkStyle}
        >
          Elías Quinteros
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              onClick={(event) => handleClick(event, 'sobremi')}
              className={linkStyle}
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => handleClick(event, 'habilidades')}
              className={linkStyle}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => handleClick(event, 'proyectos')}
              className={linkStyle}
            >
              Proyectos
            </a>
          </li>
        </ul>
      </nav>
    );
};

export default Header;


