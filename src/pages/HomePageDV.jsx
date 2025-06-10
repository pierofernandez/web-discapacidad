import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";

export const HomePageDV = () => {

    //funcion para obtener la voz femenina 
    const getFemaleSpanishVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        return voices.find(voice =>
            voice.lang === "es-ES" && voice.name.toLowerCase().includes("female")
        ) || voices.find(voice => voice.lang === "es-ES");
    };

    const [focusedIndex, setFocusedIndex] = useState(0);

    const cards = [
        { label: "Arte y Cultura", href: "/artedv" },
        { label: "Deporte", href: "/deportedv" },
        { label: "Politica", href: "/politicadv" },
        { label: "Entretenimiento", href: "/entretenimientodv" },
        { label: "Contacto", href: "/contactodv" }
    ];

    // Lectura de texto (voz)
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
        // Solo se ejecuta una vez al cargar la página
        speak("Bienvenido a la revista digital. Pulsa la tecla F que está ubicado a la izquierda para navegar y la tecla J que está a tu derecha para seleccionar el contenido.");
    }, []);


    useEffect(() => {

        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === "f") {
                const nextIndex = (focusedIndex + 1) % cards.length;
                setFocusedIndex(nextIndex);
                speak(cards[nextIndex].label);
            }

            if (e.key.toLowerCase() === "j") {
                const selectedCard = cards[focusedIndex];
                const utterance = new SpeechSynthesisUtterance(`Has seleccionado: ${selectedCard.label}`);
                utterance.onend = () => {
                    window.location.href = selectedCard.href;
                };
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [focusedIndex]);

    return (
        <div className="min-h-screen bg-[url('/img/discapacidad/fondoupn.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-6 space-y-6">
            {/* Header */}
            <div className="w-full max-w-6xl grid grid-cols-3 items-center">
                <div></div>
                <div className="flex justify-center">
                    <img src="img/discapacidad/logoblanco.png" alt="logoupn" className="h-30" />
                </div>
                <div className="flex justify-end pr-4">
                    <a
                        href="/"
                        className="text-white text-lg flex items-center gap-2 hover:text-red-400 transition"
                    >
                        <FiLogOut className="text-2xl" />
                        Abandonar
                    </a>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap gap-6 w-full max-w-6xl justify-center">
                {cards.map((card, index) => (
                    <a
                        key={card.href}
                        href={card.href}
                        className={`relative w-[35%] h-52 rounded-2xl overflow-hidden shadow-lg outline-none
                        ${index === focusedIndex ? "ring-4 ring-yellow-400" : ""}`}
                    >
                        <img
                            src={`/img/discapacidad/${card.label.toLowerCase().replace(/ /g, "")}.png`}
                            alt={`Imagen ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-4 left-4 text-white text-base font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                            {card.label}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};
