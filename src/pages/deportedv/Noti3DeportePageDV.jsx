import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti3DeportePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Ruidíaz con estilo: con un penal 'a lo Panenka', abrió el marcador para Atlético Grau ante Binacional",
        autor: "Renzo Castillo Lazo - 24 Mayo 2025",
        descripcion:
            "El delantero Raúl Ruidíaz firmó el 1-0 de Atlético Grau con una soberbia definición en un tiro desde los doce pasos." +
            "Con Raúl Ruidíaz como titular, la tienda de Atlético Grau recibió al elenco de Binacional en el calor de Piura, en el marco de la jornada 14 del Torneo Apertura 2025 de la Liga1 Te Apuesto." +
            "Atlético Grau fue protagonista en los primeros minutos del cotejo que se disputó en el Estadio Campeones del 36 (Sullana). Es así que el encargado de anotar el primer tanto fue el delantero peruano Raúl Ruidíaz, quien celebró a los 11 minutos de juego por medio de un tiro penal." +
            "Se cobró una falta en el área del popular 'Poderoso del Sur' y es así que Ruidíaz no dudó, por lo que tomó la pelota y se paró frente al arco visitante." ,
        SubTitle: "Ruidíaz, la figura de Atlético Grau",
        descripcion2:
            "Fiel a su estilo, el internacional con la Selección Peruana 'picó' el balón a lo Panenka y de esta manera puso el 1-0 a favor de los dirigidos por Ángel Comizzo." +
            "Hay que tener en cuenta que con este gol ya son cuatro las anotaciones del conocido como 'Pulga' en lo que va de temporada de la liga peruana de primera división. Anteriormente le marcó a Sport Boys (doblete) y Melgar." +
            "Para este partido, Atlético Grau tuvo una oncena titular conformada por Patricio Álvarez; Renato Rojas, Rodrigo Tapia, José Bolívar; Jeremy Rostaing, Diego Soto, Rodrigo Vilca, Rafael Guarderas, Elsar Rodas; Christopher Olivares y Raúl Ruidíaz. " +
            "En tanto, la visita salió con Ángel Azurín; Hairo Timana, Denylson Chávez, Carlos Pérez, Arthur Gutiérrez; Yorkman Tello, Franchesco Flores, Edson Aubert, Juan Carranza; Nicolás Rodríguez y Marlon Torres."
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
                window.location.href = "/deportedv";
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
                            src="/img/deportenum3.png"
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
                        href="/deportedv"
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
