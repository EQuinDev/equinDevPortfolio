import myPhoto from '../images/media/Yo.webp';
import codingImage from '../images/media/coding.webp'; // Ruta a la imagen coding.jpg
import Typewriter from 'typewriter-effect';

const SobreMi = () => {
    const textContainerStyle = {
        background: 'rgba(0, 0, 0, 0.7)', // Fondo semi-transparente
        padding: '1rem',
        borderRadius: '10px', // Borde redondeado
    };

    return (
        <div className="flex items-center justify-center min-h-screen min-w-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${codingImage})` }}
            ></div>
            <div className="flex flex-row items-center justify-center z-10">
                <div className="flex flex-col items-start justify-center" style={textContainerStyle}>
                    <h2 className="texto text-4xl font-bold text-white mb-5 mt-8 md:text-5xl">
                        <Typewriter
                            options={{
                                delay: 50,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Elías Quinteros | Ingeniero informático')
                                    .start();
                            }}
                        />
                    </h2>
                    <p className="texto text-white text-lg text-left md:text-xl">
                        <Typewriter
                            options={{
                                delay: 20,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        'Bienvenidos a mi portafolio, Soy un desarrollador de software con conocimientos en desarrollo front-end de aplicaciones web, análisis de bases de datos con SQL y experiencia en ciencia de datos utilizando Python y sus librerías clave como Pandas, NumPy, Matplotlib y Seaborn. Me enfoco en crear aplicaciones web interactivas y eficientes, priorizando una experiencia de usuario fluida y atractiva. Además, tengo habilidades sólidas en consulta y manipulación de bases de datos utilizando SQL, y puedo aplicar técnicas de análisis y visualización de datos para extraer información valiosa. '
                                    )
                                    .start();
                            }}
                        />
                    </p>
                </div>
                <img
                    src={myPhoto}
                    alt="Mi foto"
                    className="rounded-full w-full h-auto border-4 border-white md:w-64 md:h-auto"
                />
            </div>
        </div>
    );
};

export default SobreMi;
