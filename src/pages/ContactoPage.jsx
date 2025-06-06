import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const ContactoPage = () => {
    const [texto, setTexto] = useState('');
    const [grabando, setGrabando] = useState(false);
    const [reconocimiento, setReconocimiento] = useState(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'es-ES';
            recognition.interimResults = true;
            recognition.continuous = true; // 🔁 Grabación continua

            recognition.onresult = (event) => {
                const textoReconocido = Array.from(event.results)
                    .map((result) => result[0].transcript)
                    .join('');
                setTexto(textoReconocido);
            };

            recognition.onend = () => {
                if (grabando) {
                    // Reiniciar grabación si aún no se ha detenido manualmente
                    recognition.start();
                } else {
                    setGrabando(false);
                }
            };

            recognition.onerror = (event) => {
                console.error('Error en reconocimiento de voz:', event);
            };

            setReconocimiento(recognition);
        } else {
            console.error('Reconocimiento de voz no soportado en este navegador.');
        }
    }, [grabando]);

    const handleStart = () => {
        if (reconocimiento && !grabando) {
            setGrabando(true);
            try {
                reconocimiento.start();
            } catch (error) {
                console.error('Error al iniciar el reconocimiento de voz', error);
            }
        }
    };

    const handleStop = () => {
        if (reconocimiento) {
            reconocimiento.stop();
        }
        setGrabando(false);
    };

    const handleEnviar = () => {
        console.log("Mensaje enviado:", texto);
        alert("Mensaje enviado:\n" + texto);
        setTexto('');
    };

    return (
        <>
            <Navbar />

            <div className="px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Contáctanos
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Si deseas comunicarte con nosotros para cualquier consulta o comentario, puedes completar el siguiente formulario.
                    </p>
                </div>

                <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm leading-6 font-semibold text-gray-900">
                                Mensaje
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    value={texto}
                                    onChange={(e) => setTexto(e.target.value)}
                                    placeholder="Escribe algo o graba un mensaje..."
                                    rows="6"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-between">
                        <button
                            type="button"
                            onClick={grabando ? handleStop : handleStart}
                            className="flex-1 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                        >
                            {grabando ? 'Detener' : 'Grabar voz'}
                        </button>

                        <button
                            type="button"
                            onClick={handleEnviar}
                            disabled={!texto.trim()}
                            className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold shadow-sm ${texto.trim()
                                    ? "bg-green-600 text-white hover:bg-green-500"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            Enviar mensaje
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-full mt-10">
                <img src="img/upn.png" alt="" className="w-full object-cover" />
            </div>
            <Footer />
        </>
    );
};
