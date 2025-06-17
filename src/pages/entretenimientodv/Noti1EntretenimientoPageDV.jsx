import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti1EntretenimientoPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "¿Messi o Ronaldo? Gianni Infantino da una respuesta diplomática a Speed sobre su jugador favorito",
        autor: "Renzo Alvarez - 24 Mayo 2025",
        descripcion:
            "Otro de los mejores momentos de la transmisión fue cuando Gianni Infantino declaró que Cristiano Ronaldo podría formar parte del próximo Mundial de Clubes." +
            "El presidente de la FIFA, Gianni Infantino, apareció durante una transmisión en vivo con el popular streamer IShowSpeed, para hablar sobre el próximo Mundial de Clubes, que comenzará el 14 de junio. Durante la conversación, Speed le preguntó a su invitado \"¿quién es mejor, Messi o Ronaldo?\", pero su respuesta fue diplomática. " +
            "\"Dos grandes jugadores. Dos jugadores increíbles. Si eres portugués, entonces apoyas a Ronaldo. Si eres argentino, apoyas a Messi. Pero si eres fan del fútbol, o del ‘soccer’, como lo llamen, quieres ver a ambos porque es un juego hermoso. Me encantaría verlos jugar juntos. Imagínate a los dos en el mismo equipo, ¿no sería algo especial?\", señaló." +
            "Además, Speed no pudo evitar preguntarse si algún día Lionel Messi y Cristiano Ronaldo compartirán vestuario. \"¿Por qué siento que eso va a pasar algún día?\", comentó el streamer. " +
            "Infantino, sin perder el tono optimista, respondió:  \"Tal vez en el equipo FIFA, contigo (Speed). Formamos un equipo y jugamos todos juntos... por una buena causa. \"" +
            "Actualmente, Cristiano Ronaldo milita en el Al-Nassr de Arabia Saudita, pero su contrato culminará pronto. Por su parte, Lionel Messi también se encuentra en el último año de su contrato con el Inter de Miami.",
        SubTitle: "¿Ronaldo en el Mundial de Clubes?",
        descripcion2:
            "Otro de los mejores momentos de la transmisión fue cuando Gianni Infantino declaró que Cristiano Ronaldo podría formar parte del próximo Mundial de Clubes, a pesar de que su equipo actual, el Al-Nassr, no está clasificado. Según el mandamás de la FIFA, existen conversaciones con clubes interesados en contar con el astro portugués para el torneo." +
            "\"Ronaldo podría jugar también con uno de los equipos en el Mundial de Clubes. Hay conversaciones, hay charlas con algunos clubes. Así que si algún club está viendo esto y está interesado en contratar a Ronaldo para el Mundial de Clubes… quién sabe, quién sabe\", declaró." +
            "Cristiano Ronaldo fichó a fines del 2022 por Al Nassr, club donde ha logrado una gran marca de goles. Es más, jugar en el club saudí le ha servido para alcanzar los 934 goles de su carerra. Sin embargo, ahora no disfruta de un buen momento." +
            "La renovación de CR7 se habría paralizado y el medio español Marca indicó que el cinco veces Balón de Oro ha recibido un \"oferta tentadora\" de un club brasileño, que sería un cambio radical en su carrera." +
            "Además, se señaló que el club brasileño le brindaría la posibilidad a Cristiano Ronaldo de jugar el próximo Mundial de Clubes."
    };

    useEffect(() => {
        window.speechSynthesis.cancel(); // Detener cualquier audio anterior

        if (!hasSpokenRef.current) {
            const leerTexto = `${contenido.title}. ${contenido.autor}. ${contenido.descripcion}. ${contenido.SubTitle}. ${contenido.descripcion2}`;
            const utterance = new SpeechSynthesisUtterance(leerTexto);
            utterance.lang = "es-ES";
            window.speechSynthesis.speak(utterance);
            hasSpokenRef.current = true;
        }

        // Escuchar tecla Espacio para volver
        const handleKeyDown = (e) => {
            if (e.code === "Space") {
                e.preventDefault(); // Evita scroll si es necesario
                window.location.href = "/entretenimientodv";
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="w-full">
            <div className="bg-amber-400">
                <a href="/homedv">
                    <img className="h-28 ml-4" src="/img/upnlogo.png" alt="Logo de UPN" />
                </a>
            </div>

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Arte y Cultura</h1>
            <hr className="max-w-7xl mx-auto border-t-2 border-red-500 my-4" />

            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">
                <div className="px-4">
                    <div className="flex flex-col space-y-4 py-4">
                        <p className="text-5xl font-bold text-gray-800 py-1">{contenido.title}</p>
                        <img
                            src="/img/entretenimientonum1.png"
                            alt="Article"
                            className="w-full h-85 object-cover "
                        />
                        <div>
                            <p className="text-xl text-gray-500 py-1">{contenido.autor}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion}</p>
                            <p className="text-2xl text-gray-600 py-1 font-bold">{contenido.SubTitle}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion2}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pb-6">
                    <a
                        href="/entretenimientodv"
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
