import '../styles/responsivo.css';

const Header = () => {
    const handleClick = (event, sectionId) => {
      event.preventDefault();
      const sectionElement = document.querySelector(`#${sectionId}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <nav className="p-4 flex justify-between items-center fixed z-50 w-full bg-gray-800 top-0 left-0">
        <a 
          href="#"
          onClick={(event) => handleClick(event, 'inicio')} 
          className="text-white text-xl font-bold hover:text-blue-500"

        >
          Elías Quinteros
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              onClick={(event) => handleClick(event, 'sobremi')}
              className="text-white hover:text-blue-500"
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => handleClick(event, 'habilidades')}
              className="text-white hover:text-blue-500"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => handleClick(event, 'proyectos')}
              className="text-white hover:text-blue-500"
            >
              Proyectos
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  

export default Header;