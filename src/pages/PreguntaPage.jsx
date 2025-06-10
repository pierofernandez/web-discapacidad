import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PreguntaPage = () => {
    const questionText = "¿Tienes discapacidad visual?";
    const fullSpeechText = `${questionText} Presiona la tecla F para sí y la tecla J para no.`;

    const [displayedText, setDisplayedText] = useState("");
    const navigate = useNavigate();

    const getFemaleSpanishVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        return voices.find(voice =>
            voice.lang === "es-ES" && voice.name.toLowerCase().includes("female")
        ) || voices.find(voice => voice.lang === "es-ES");
    };

    const speakWithVoice = (text) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = getFemaleSpanishVoice();
        if (voice) utterance.voice = voice;
        utterance.lang = "es-ES";
        synth.cancel();
        synth.speak(utterance);
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(prev => prev + questionText.charAt(index));
            index++;
            if (index >= questionText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.speechSynthesis.getVoices().length === 0) {
                window.speechSynthesis.onvoiceschanged = () => speakWithVoice(fullSpeechText);
            } else {
                speakWithVoice(fullSpeechText);
            }
        }, 100);

        const handleKeyDown = (event) => {
            const key = event.key.toLowerCase();
            if (key === "f") navigate("/homedv");
            if (key === "j") navigate("/home");
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-amber-400 text-white">
            <h1 className="text-4xl md:text-6xl font-mono text-center mb-10 border-r-2 pr-2 animate-typing">
                {displayedText}
            </h1>

            <div className="flex gap-10 mt-4">
                <a href="/homedv">
                    <button className="px-10 py-4 text-2xl bg-green-600 hover:bg-green-700 rounded-xl transition">
                        Sí
                    </button>
                </a>
                <a href="/home">
                    <button className="px-10 py-4 text-2xl bg-red-600 hover:bg-red-700 rounded-xl transition">
                        No
                    </button>
                </a>
            </div>
        </div>
    );
};
