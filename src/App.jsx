import Header from './components/Header';
import SobreMi from './components/SobreMi';
import './index.css';

import { useState } from 'react';



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
            
        </section>

        <section id='proyectos'>
            
        </section>
    </>
  )
}

export default App
