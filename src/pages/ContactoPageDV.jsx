import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const ContactoPageDV = () => {
    const [texto, setTexto] = useState('');
    const [grabando, setGrabando] = useState(false);
    const [reconocimiento, setReconocimiento] = useState(null);
    const hasSpokenRef = useRef(false); // <- para que solo hable una vez

    useEffect(() => {
        const speak = (msg) => {
            const synth = window.speechSynthesis;
            const utter = new SpeechSynthesisUtterance(msg);
            utter.lang = "es-ES";
            synth.speak(utter);
        };

        if (!hasSpokenRef.current) {
            speak("Pulsa la tecla F para hablar, la tecla J para enviar el formulario, y la tecla Espacio para volver al Home.");
            hasSpokenRef.current = true;
        }

        const handleKeyDown = (e) => {
            if (e.key === "f" || e.key === "F") {
                handleStart();
            }
            if (e.key === "j" || e.key === "J") {
                handleEnviar();
            }
            if (e.key === " " || e.code === "Space") {
                e.preventDefault();
                window.location.href = "/homedv";
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [texto, reconocimiento, grabando]);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'es-ES';
            recognition.interimResults = true;
            recognition.continuous = true;

            recognition.onresult = (event) => {
                const textoReconocido = Array.from(event.results)
                    .map((result) => result[0].transcript)
                    .join('');
                setTexto(textoReconocido);
            };

            recognition.onend = () => {
                if (grabando) recognition.start();
                else setGrabando(false);
            };

            recognition.onerror = (event) => {
                console.error('Error en reconocimiento de voz:', event);
            };

            setReconocimiento(recognition);
        } else {
            console.error('Reconocimiento de voz no soportado en este navegador.');
        }
    }, []);

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
        if (reconocimiento) reconocimiento.stop();
        setGrabando(false);
    };

    const handleEnviar = () => {
        if (!texto.trim()) return;
        alert("Mensaje enviado:\n" + texto);
        setTexto('');
    };

    return (
        <div className="w-full">
            <div className="bg-amber-400">
                <a href="/homedv">
                    <img className="h-28 ml-4" src="/img/upnlogo.png" alt="Logo de UPN" />
                </a>
            </div>

            <div className="px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900 ">
                        Contáctanos
                    </h2>
                </div>

                <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-3xl leading-6 font-semibold text-gray-900">
                                Mensaje
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    value={texto}
                                    onChange={(e) => setTexto(e.target.value)}
                                    placeholder="Escribe algo o graba un mensaje..."
                                    rows="8"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-between">
                        <button
                            type="button"
                            onClick={grabando ? handleStop : handleStart}
                            className="flex-1 rounded-md bg-indigo-600 px-4 py-3 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                        >
                            {grabando ? 'Detener' : 'Grabar voz'}
                        </button>

                        <button
                            type="button"
                            onClick={handleEnviar}
                            disabled={!texto.trim()}
                            className={`flex-1 rounded-md px-4 py-2.5 text-xl font-semibold shadow-sm ${texto.trim()
                                ? "bg-green-600 text-white hover:bg-green-500"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            Enviar mensaje
                        </button>
                    </div>
                </form>
            </div>

            <div className="container mx-auto flex justify-start pb-6 pl-96">
                <a
                    href="/homedv"
                    className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-3xl hover:bg-red-600 transition duration-300"
                >
                    <AiOutlineLeft className="mr-2" />
                    Volver
                </a>
            </div>
        </div>
    );
};
