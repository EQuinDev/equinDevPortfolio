import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';
import './index.css';

import { useState } from 'react';


import fotoCafe from './images/media/blogcafe.webp';
import fotoMusical from './images/media/musical.webp';
import fotoCryptos from './images/media/cryptos.webp';
import fotoVeterinaria from './images/media/veterinaria.webp';


const proyectos = [
    {
        name: 'Blog de café',
        description: 'Pequeña web hecha con HTML + CSS',
        image: fotoCafe,
        url: 'https://blogcoffeeequinteros.netlify.app',
        
    },
    {
        name: 'Festival musical',
        description: 'Proyecto web hecha con SASS y GULP',
        image: fotoMusical,
        url: 'https://fesmusicalequinteros.netlify.app',
        
    },
    {
        name: 'Precios criptomonedas',
        description: 'Proyecto web que consume la api cryptocompare',
        image: fotoCryptos,
        url: 'https://precioscryptosequinteros.netlify.app',
        
    },
    {
        name: 'Veterinaria',
        description: 'Proyecto web con Tailwind CSS y LocalStorage',
        image: fotoVeterinaria,
        url: 'https://proyectomascotasequinteros.netlify.appp',
        
    }
];



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />

        <section id='inicio'>
            
        </section>

        <section id='sobremi'>
            <SobreMi />
        </section>

        <section id='habilidades'>
            <Habilidades />
        </section>

        <section id='proyectos'>
            <Proyectos proyectos={proyectos} />
            
        </section>

        <section>
            <Footer />
        </section>
    </>
  )
}

export default App
