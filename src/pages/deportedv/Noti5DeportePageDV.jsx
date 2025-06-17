import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti5DeportePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Conmebol se reunirá con autoridades peruanas para que Lima pueda ser sede de la final de la Copa Libertadores 2025",
        autor: "Erick Chavez - 02 Junio 2025",
        descripcion:
            "La comitiva de la Conmebol espera reunirse con autoridades peruanas, incluida la presidenta Dina Boluarte, para que puedan otorgar las garantías para albergar la final de la Copa Libertadores 2025." +
            "Todos los caminos conducen a Lima. RPP pudo conocer que la capital peruana tiene altas probabilidades de albergar la final de la Copa Libertadores de América. " +
            "De acuerdo con información recopilada, representantes de la Conmebol arribarán en los próximos días a Lima para reunirse con autoridades del Gobierno de cara a la posibilidad de que Lima albergue la final del torneo continental en este 2025." +
            "Además, se supo que, en esta cumbre, donde se espera que participe la presidenta Dina Boluarte, se buscará que el Gobierno se comprometa a otorgar las garantizas para la realización de la final.  " +
            "Como se sabe, Lima compite con Brasilia para albergar la final de la Copa Libertadores. Pero, la capital peruana le ha sacado ventaja a la brasileña, porque las confederaciones sudamericanas no están convencidas de la final se juegue en Brasil, por los constantes problemas que se han dado con los rivales de dicho país." ,        
        SubTitle: "Lima ya fue sede de una final de Copa Libertadores",
        descripcion2:
            "En 2019, la Conmebol decidió que el campeón de la Copa Libertadores se defina a un solo partido. Y, para ello, eligió el Estadio Nacional de Santiago para albergar esta histórica decisión." +
            "Sin embargo, debido a los conflictos sociales que ocurrían en la capital chilena, la sede de la final de la Copa Libertadores se trasladó al Estadio Monumental de Lima. " +
            "Aquí, Flamengo se coronó campeón, tras vencer 2-1 a River Plate con goles de Gabigol. ",
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
                            src="/img/deportenum5.png"
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
