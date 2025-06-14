import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const EntretenimientoPageDV = () => {
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
            title: "¿Messi o Ronaldo? Gianni Infantino da una respuesta diplomática a Speed sobre su jugador favorito",
            autor: "Renzo Alvarez - 24 Mayo 2025",
            descripcion: "Otro de los mejores momentos de la transmisión fue cuando Gianni Infantino declaró que Cristiano Ronaldo podría formar parte del próximo Mundial de Clubes.",
            img: "/img/entretenimientonum1.png",
            link: "/entretenimientodv/noticia1entretenimientodv",
        },
        {
            title: "Britney Spears protagonizó incidente en avión: encendió un cigarro y bebió alcohol en pleno vuelo",
            autor: "Brenda García Retamal - 24 Mayo 2025",
            descripcion: "La artista, que viajaba en un jet privado, fue reprendida por la tripulación. El episodio se suma a otros antecedentes de conducta imprudente en aviones.",
            img: "/img/entretenimientonum2.png",
            link: "/entretenimientodv/noticia2entretenimientodv",
        },
        {
            title: "Tom Cruise responde incómoda pregunta tras la decisión de su hija Suri de no llevar su apellido",
            autor: "Renzo Alvarez - 21 Mayo 2025",
            descripcion: "Suri, la hija menor del actor Tom Cruise, decidió prescindir del apellido de su padre en 2024 durante su ceremonia de graduación que celebró en Nueva York y a la que el artista no asistió.",
            img: "/img/entretenimientonum3.png",
            link: "/entretenimientodv/noticia3entretenimientodv",
        },
        {
            title: "Pamela López expone a Christian Cueva con chats íntimos tras el anuncio de su separación",
            autor: "Renzo Alvarez - 23 Mayo 2025",
            descripcion: "Una conversación del 2 de julio de 2024 revela que, pese al comunicado de Cueva sobre el fin de su matrimonio, él y López habrían tenido relaciones íntimas dos días antes.",
            img: "/img/entretenimientonum4.png",
            link: "/entretenimientodv/noticia4entretenimientodv",
        },
        {
            title: "'Lilo y Stitch': el live-action más humano (y entrañable) que ha hecho Disney en años",
            autor: "Renzo Napa - 23 Mayo 2025",
            descripcion: "Más de dos décadas de la película animada original, la versión live-action de Lilo y Stitch llega a los cines con una historia que, aunque actualizada, conserva el corazón de siempre.",
            img: "/img/entretenimientonum5.png",
            link: "/entretenimientodv/noticia5entretenimientodv",
        },
        {
            title: "'El juego del calamar 3' mostrará \"lo más bajo del ser humano\", adelanta el director Hwang Dong-hyuk",
            autor: "Harold Quispe - 24 Mayo 2025",
            descripcion: "La serie está llegando a su clímax, sostuvo Hwang Dong-hyuk sobre la tercera temporada de 'El juego del calamar' que llegará a Netflix el próximo 27 de junio.",
            img: "/img/entretenimientonum6.png",
            link: "/entretenimientodv/noticia6entretenimientodv",
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

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Entretenimiento</h1>
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
