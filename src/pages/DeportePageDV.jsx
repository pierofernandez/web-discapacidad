import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const DeportePageDV = () => {
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

    const noticias = [
        {
            title: "Christian Cueva \"llegó a un acuerdo\" para firmar por Emelec, según prensa argentina",
            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
            descripcion: "Tras pasar por el fútbol del extranjero, en el 2024 el volante peruano Christian Cueva regresó al Perú para ponerse la camiseta de Cienciano en la Liga1 Te Apuesto.",
            img: "/img/deportenum1.png",
            link: "/deportedv/noticia1deportedv",
        },
        {
            title: "¿Diego Enríquez dejará Sporting Cristal? Club León, de la Liga MX, tiene en la mira al portero rimense",
            autor: "Jean Dueñas - 24 Mayo 2025",
            descripcion: "Desde que comenzó la temporada y a base de buenas actuaciones, Diego Enríquez se ha ido consolidando como uno de los mejores jugadores en Sporting Cristal.",
            img: "/img/deportenum2.png",
            link: "/deportedv/noticia2deportedv",
        },
        {
            title: "Ruidíaz con estilo: con un penal 'a lo Panenka', abrió el marcador para Atlético Grau ante Binacional [VIDEO]",
            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
            descripcion: "El delantero Raúl Ruidíaz firmó el 1-0 de Atlético Grau con una soberbia definición en un tiro desde los doce pasos.",
            img: "/img/deportenum3.png",
            link: "/deportedv/noticia3deportedv",
        },
        {
            title: "Siete equipos en la pelea: ¿qué les queda por jugar a los clubes en el cierre del Torneo Apertura 2025?",
            autor: "Diego Figueroa Loayza - 24 Mayo 2025",
            descripcion: "Jean Dueñas Universitario y Alianza Lima comparten el liderato del Torneo Apertura, pero cinco equipos más le siguen muy cerca: Melgar, Sport Huancayo, Cusco FC Alianza Atlético y Cristal.",
            img: "/img/deportenum4.png",
            link: "/deportedv/noticia4deportedv",
        },
        {
            title: "¿Será en el Monumental? Conmebol inspeccionó el estadio de la 'U' de cara a la final de la Copa Libertadores",
            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
            descripcion: "En Universitario, recibieron a la delegación de Conmebol para ser sede de la final de la Copa Libertadores 2025.",
            img: "/img/deportenum5.png",
            link: "/deportedv/noticia5deportedv",
        },
        {
            title: "Selección Peruana de Vóley: ¿en qué torneos competirá el equipo femenino en la temporada 2025?",
            autor: "Diego Figueroa Loayza - 24 Mayo 2025",
            descripcion: "Se avecina el periodo de selecciones en el calendario del vóley peruano, con la participación en dos mundiales para la temporada 2025.",
            img: "/img/deportenum6.png",
            link: "/deportedv/noticia6deportedv",
        },
    ];

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

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Deporte</h1>
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
