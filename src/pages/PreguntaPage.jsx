import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PreguntaPage = () => {
    const fullText = "¿ Tienes discapacidad visual?";
    const [displayedText, setDisplayedText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + fullText.charAt(index));
            index++;
            if (index >= fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const speak = () => {
            const utterance = new SpeechSynthesisUtterance(
                "¿Tienes discapacidad visual? Presiona la tecla F para sí y la tecla J para no."
            );
            utterance.lang = "es-ES";
            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
        };

        const timer = setTimeout(speak, 70);

        const handleKeyDown = (event) => {
            if (event.key.toLowerCase() === "f") {
                navigate("/homedv");
            } else if (event.key.toLowerCase() === "j") {
                navigate("/home");
            }
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
