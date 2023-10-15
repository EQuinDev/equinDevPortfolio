import myPhoto from '../images/media/Yo.jpg';
import codingImage from '../images/media/coding.jpg'; // Ruta a la imagen coding.jpg
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
                                    .typeString('Elías Quinteros | Software Developer')
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
                                        'Bienvenidos a mi portafolio, soy Elías Quinteros y me dedico al desarrollo de software'
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
