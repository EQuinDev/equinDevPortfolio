import React, { useState, useEffect } from 'react';
import '../styles/responsivo.css';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 100;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const sectionElement = document.querySelector(`#${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerStyle = {
    position: 'fixed',
    backgroundColor: '#222',
    padding: '1.5rem 1rem',
    transition: 'top 0.3s ease-in-out',
    top: visible ? '0' : '-100px',
  };

  const linkStyle = 'text-white text-xl font-bold hover:text-blue-500';

  return (
    <nav
      className={`flex justify-between items-center z-50 w-full left-0`}
      style={headerStyle}
    >
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
