import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const PoliticaPageDV = () => {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const cardRefs = useRef([]);
    const mensajeLeido = useRef(false);

    const getFemaleSpanishVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        return voices.find(voice =>
            voice.lang === "es-ES" && voice.name.toLowerCase().includes("female")
        ) || voices.find(voice => voice.lang === "es-ES");
    };

    const speak = (text) => {
        const synth = window.speechSynthesis;

        const speakWithVoice = () => {
            const utterance = new SpeechSynthesisUtterance(text);
            const voice = getFemaleSpanishVoice();
            if (voice) utterance.voice = voice;
            utterance.lang = "es-ES";
            synth.cancel();
            synth.speak(utterance);
        };

        if (synth.getVoices().length === 0) {
            window.speechSynthesis.onvoiceschanged = () => speakWithVoice();
        } else {
            speakWithVoice();
        }
    };

    const noticias = [
        {
            title: "Titular del Minem propone que el Ejecutivo sea \"garante del diálogo\" entre concesionarios y mineros informales",
            autor: "Luis Felipe Rodriguez Jimenez - 24 Mayo 2025",
            descripcion: "El ministro Jorge Montero propuso que el Gobierno facilite el diálogo para que pequeños mineros informales logren contratos de explotación con concesionarios.",
            img: "img/politicanum1.png",
            link: "/politicadv/noticia1politicadv",

        },
        {
            title: "Israel bombardeó la casa de una pediatra en Gaza y mató a nueve de sus hijos",
            autor: "Agencia EFE - 24 Mayo 2025",
            descripcion: "Dos menores siguen entre escombros, mientras siete fueron rescatados y trasladados al Hospital Nasser junto a familiares gravemente heridos.",
            img: "img/politicanum2.png",
            link: "/politicadv/noticia2politicadv",

        },
        {
            title: "Daniel Noboa juró como presidente de Ecuador para un segundo mandato",
            autor: "Wendy Milla Loo - 24 Mayo 2025",
            descripcion: "La presidenta Dina Boluarte viajó hasta Quito y estuvo presente en la toma de mando para un segundo periodo de su homólogo ecuatoriano.",
            img: "img/politicanum3.png",
            link: "/politicadv/noticia3politicadv",

        },
        {
            title: "Ucrania y Rusia realizan nuevo intercambio de prisioneros en medio de intensos ataques en Kiev",
            autor: "France 24 - 24 Mayo 2024",
            descripcion: "Mientras se prepara un intercambio de prisioneros masivo, Ucrania denunció un ataque ruso prolongado que causó incendios y daños en varios barrios de Kiev.",
            img: "img/politicanum4.png",
            link: "/politicadv/noticia4politicadv",

        },
        {
            title: "La ONU confía en la justicia para hacer frente a las amenazas de Trump contra Harvard",
            autor: "Agencia EFE - 24 Mayo 2025",
            descripcion: "El portavoz adjunto de la ONU destacó la importancia de proteger la libertad de pensamiento y expresión en las universidades.",
            img: "img/politicanum5.png",
            link: "/politicadv/noticia5politicadv",

        },
        {
            title: "Rusia informó que atacó con misiles un portacontenedores en el puerto ucraniano de Odesa",
            autor: "Agencia EFE - 24 Mayo 2025",
            descripcion: "Según un comunicado del Ministerio de Defensa de Rusia en Telegram, a bordo del buque había cientos de contenedores con material militar, como drones y materiales de munición.",
            img: "img/politicanum6.png",
            link: "/politicadv/noticia6politicadv",

        },
    ];

    useEffect(() => {
        if (!mensajeLeido.current) {
            mensajeLeido.current = true;
            speak("Pulsa la tecla F que está ubicado a la izquierda para navegar, la tecla J que está a tu derecha para seleccionar el contenido, y la tecla espacio para volver al inicio.");
        }

        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === "f") {
                setSelectedIndex((prev) => {
                    let next = prev === null || prev === noticias.length - 1 ? 0 : prev + 1;
                    const nextCard = cardRefs.current[next];
                    if (nextCard) {
                        nextCard.scrollIntoView({ behavior: "smooth", block: "center" });
                        const contenido = `${noticias[next].title}. ${noticias[next].autor}. ${noticias[next].descripcion}`;
                        speechSynthesis.cancel();
                        speak(contenido);
                    }
                    return next;
                });
            } else if (e.key.toLowerCase() === "j" && selectedIndex !== null) {
                speechSynthesis.cancel();
                const mensaje = "Has seleccionado este artículo";
                const utterance = new SpeechSynthesisUtterance(mensaje);
                const voice = getFemaleSpanishVoice();
                if (voice) utterance.voice = voice;
                utterance.lang = "es-ES";
                utterance.onend = () => navigate(noticias[selectedIndex].link);
                speechSynthesis.speak(utterance);
            } else if (e.code === "Space") {
                e.preventDefault();
                navigate("/homedv");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    return (
        <div className="w-full">
            <div className="bg-amber-400">
                <a href="/homedv">
                    <img className="h-28 ml-4" src="/img/upnlogo.png" alt="Logo de UPN" />
                </a>
            </div>

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Politica</h1>
            <hr className="max-w-7xl mx-auto border-t-2 border-red-500 my-4" />

            <div className="max-w-7xl mx-auto px-4 text-lg font-medium text-gray-800 bg-yellow-100 p-4 rounded mb-6">
                Pulsa la tecla <strong>F</strong> que está ubicado a la izquierda para navegar, la tecla <strong>J</strong> que está a tu derecha para seleccionar el contenido, y la tecla <strong>espacio</strong> para volver al inicio.
            </div>

            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">
                <div className="px-4">
                    {noticias.map((item, idx) => (
                        <Link
                            to={item.link}
                            key={idx}
                            ref={(el) => (cardRefs.current[idx] = el)}
                            className={`flex space-x-4 py-4 rounded transition duration-300 ${selectedIndex === idx ? "bg-yellow-200" : "hover:bg-gray-100"}`}
                        >
                            <img src={item.img} alt="Article" className="w-80 h-44 object-cover rounded" />
                            <div>
                                <p className="text-xl text-gray-500 py-1">{item.autor}</p>
                                <p className="text-3xl font-medium text-gray-800 py-1">{item.title}</p>
                                <p className="text-lg text-gray-600 py-1">{item.descripcion}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-start pb-6">
                    <a
                        href="/homedv"
                        className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-3xl hover:bg-red-600 transition duration-300"
                    >
                        <AiOutlineLeft className="mr-2" />
                        Volver
                    </a>
                </div>
            </div>
        </div>
    );
};
