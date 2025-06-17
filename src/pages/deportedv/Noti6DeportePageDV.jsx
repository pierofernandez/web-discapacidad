import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti6DeportePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Equipo completo: Ángela Leyva se unió a los entrenamientos de la Selección Peruana de Vóley",
        autor: "Diego Figueroa Loayza - 22 Mayo 2025",
        descripcion:
            "Después de cuatro años, Ángela Leyva está de regreso en la Selección Peruana, que se prepara para disputar la I Copa América de Vóley en Brasil." +
            "La Selección Peruana de Vóley femenino completó este lunes su plantel para los entrenamientos con miras a los próximos torneos de la categoría mayor, dirigida por el brasileño Antonio Rizola. " +
            "Ángela Leyva se unió a los trabajos en las instalaciones de la Videna, marcando así su regreso a la selección nacional después de cuatro años, debido a que por entonces tenía diferencias con el extécnico Francisco Hervás." +
            "Ángela Leyva había anticipado en 2024 que volvería al elenco rojiblanco, luego de sostener un diálogo con Antonio Rizola. La actual jugadora del Besiktas de Turquía se incorporó a las prácticas junto a la líbero Esmeralda Sánchez (Alianza Lima) y la atacante Aixa Vigil (San Martín), quedando así completa la preselección peruana." +
            "Perú se pone a punto para disputar la Copa América de Vóley 2025, la que se realizará en la ciudad de Betim, en Brasil, un torneo donde estarán presentes los equipos femeninos y masculinos de las selecciones sudamericanas." +
            "Del 2 al 6 de julio se realizará la primera edición de la Copa América de Vóley 2025. Este nuevo torneo impulsado por la Confederación Sudamericana de Vóley será de carácter oficial y brindará puntos para el ranking mundial de la FIVB." +
            "En este certamen, junto a Perú, también participan Argentina, Venezuela, Chile y México. En el caso de Brasil, el anfitrión competirá con un elenco Sub 23 dado que el elenco principal se encuentra en competencia por la Nations League.",
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
                            src="/img/deportenum6.png"
                            alt="Article"
                            className="w-full h-85 object-cover "
                        />
                        <div>
                            <p className="text-xl text-gray-500 py-1">{contenido.autor}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion}</p>
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
