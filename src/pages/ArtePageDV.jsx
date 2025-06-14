import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const ArtePageDV = () => {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const cardRefs = useRef([]);
    const mensajeLeido = useRef(false);

    //funcion para obtener la voz femenina 
    const getFemaleSpanishVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        return voices.find(voice =>
            voice.lang === "es-ES" && voice.name.toLowerCase().includes("female")
        ) || voices.find(voice => voice.lang === "es-ES");
    };

    const noticias = [
        {
            title: "\"No es un tema de capricho, sino de reglas\": Jessica Newton descarta participación de Luciana Fuster en Miss Universo",
            autor: "Brenda García Retamal - 22 Mayo 2025",
            descripcion: "Jessica Newton explicó por qué Luciana Fuster no puede participar en otros certámenes de belleza.",
            img: "/img/artenum1.png",
            link: "/artedv/noticia1artedv",
        },
        {
            title: "Cannes 2025: Tatiana Calmell deslumbra en la alfombra roja con look de alta costura",
            autor: "Brenda García Retamal - 23 Mayo 2025",
            descripcion: "La peruana desfiló en la alfombra roja con un diseño del filipino Michael Cinco.",
            img: "/img/artenum2.png",
            link: "/artedv/noticia2artedv",
        },
        {
            title: "\"Nos pasa a todas\", un libro que recoge testimonios conmovedores de mujeres en un programa radial",
            autor: "Redacción RPP - 23 Mayo 2025",
            descripcion: "Se presenta el 28 de mayo en la Casa de la Literatura Peruana.",
            img: "/img/artenum3.png",
            link: "/artedv/noticia3artedv",
        },
        {
            title: "\"Mi madre se comió mi corazón\", una obra íntima que rompe el silencio sobre la salud mental",
            autor: "Renzo Napa - 24 Mayo 2025",
            descripcion: "Una mirada íntima sobre salud mental y vínculos maternos.",
            img: "/img/artenum4.png",
            link: "/artedv/noticia4artedv",
        },
        {
            title: "Revolución del maquillaje y el skincare: ¿el consumidor es más exigente con lo que usa en la piel?",
            autor: "Andrea Susana Caceres Alvarez - 24 Mayo 2025",
            descripcion: "El boom de la belleza en Perú y consumidores exigentes.",
            img: "/img/artenum5.png",
            link: "/artedv/noticia5artedv",
        },
        {
            title: "Candidata a Miss Puerto Rico 2025 renunció sorpresivamente al certamen de belleza",
            autor: "Brenda García Retamal - 24 Mayo 2025",
            descripcion: "Kiara Escudero reafirma su compromiso con el sector salud.",
            img: "/img/artenum6.png",
            link: "/artedv/noticia6artedv",
        },
    ];

    const speak = (text) => {
        const synth = window.speechSynthesis;

        const speakWithVoice = () => {
            const utterance = new SpeechSynthesisUtterance(text);
            const voice = getFemaleSpanishVoice();
            if (voice) utterance.voice = voice;
            synth.cancel();
            synth.speak(utterance);
        };

        // A veces las voces aún no están cargadas al principio
        if (synth.getVoices().length === 0) {
            window.speechSynthesis.onvoiceschanged = () => {
                speakWithVoice();
            };
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
                const voice = getFemaleSpanishVoice(); // <- Aquí
                if (voice) utterance.voice = voice;   // <- Y aquí
                utterance.lang = "es-ES";              // Asegúrate también de definir el idioma

                utterance.onend = () => {
                    navigate(noticias[selectedIndex].link);
                };

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

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Arte y Cultura</h1>
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
                            className={`flex space-x-4 py-4 rounded transition duration-300 ${selectedIndex === idx ? "bg-yellow-200" : "hover:bg-gray-100"
                                }`}
                        >
                            <img
                                src={item.img}
                                alt="Article"
                                className="w-80 h-44 object-cover rounded"
                            />
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
