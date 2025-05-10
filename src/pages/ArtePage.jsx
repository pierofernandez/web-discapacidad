import { useEffect } from "react";

export const ArtePage = () => {

    useEffect(() => {
            const handleKeyDown = (event) => {
                if (event.code === "Space") {
                    event.preventDefault(); 
                    const mensaje = new SpeechSynthesisUtterance(
                        "Actualmente te encuentras en la sección arte."
                    );
                    mensaje.lang = "es-ES";
                    window.speechSynthesis.speak(mensaje);
                }
            };
    
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }, []);


    return (
        <h1>
            Arte
        </h1>
    )
};