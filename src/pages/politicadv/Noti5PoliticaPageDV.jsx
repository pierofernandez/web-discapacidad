import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti5PoliticaPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Donald Trump asegura que Israel e Irán alcanzarán pronto la paz: \"Muchas llamadas y reuniones están teniendo lugar ahora\"",
        autor: "Pedro Luis Ramos Martinez - 15 Junio 2025",
        descripcion:
            "El mandatario estadounidense utilizó sus redes sociales para afirmar que ambas naciones trabajan para llegar a consensos gracias a su intervención." +
            "El presidente estadounidense, Donald Trump, aseguró este domingo que \"pronto habrá paz entre Israel e Irán\" gracias a las reuniones que se están dando en las últimas horas para llegar a un acuerdo. Esto luego de los ataques que se han dado entre ambas naciones desde el último jueves." +
            "¡Pronto tendremos paz entre Israel e Irán! Muchas llamadas y reuniones están teniendo lugar ahora. Hago mucho y nunca me dan crédito por nada, pero está bien, la gente lo entiende. ¡Haz que el Medio Oriente sea grande otra vez!\", escribió el mandatario en su red personal Truth Social." +
            "Trump recordó en su mensaje que, durante su primer mandato, países como Serbia y Kosovo también estaban en un conflicto bélico, pero con su intervención la situación se solucionó.  " +
            "\"Serbia y Kosovo estaban en marcha, como lo han hecho durante décadas, y este conflicto de larga duración estaba a punto de estallar en la guerra. Lo detuve... Otro caso es el de Egipto y Etiopía, y su lucha por una enorme presa que está afectando al magnífico río Nilo. Hay paz, al menos por ahora, gracias a mi intervención, ¡y seguirá siendo así! Del mismo modo, ¡pronto habrá PAZ entre Israel e Irán!\", añadió." ,
        SubTitle: "Gobierno peruano hace un llamado al diálogo",
        descripcion2:
            "Por su parte, el gobierno de Dina Boluarte, a través del Ministerio de Relaciones Exteriores, solicitó a Israel e Irán detener los bombardeos que se están dando entre ambas naciones y en su lugar iniciar las negociaciones de paz, apelando a los mecanismos establecidos en el derecho internacional." +
            "La Cancillería advirtió que este enfrentamiento armado no solo afecta a la estabilidad en esa región del Medio Oriente, sino que pone en peligro también a “poblaciones ajenas a la zona de conflicto”, constituyendo “una seria amenaza a la paz y seguridad internacionales”. " +
            "“El progreso del conflicto es un escenario indeseable que podría generar situaciones de incalculables y nefastas consecuencias”, señala el comunicado del Ministerio de Relaciones Exteriores. " ,
    };

    useEffect(() => {

        window.speechSynthesis.cancel(); //Detener cualquier audio anterior

        if (!hasSpokenRef.current) {
            const leerTexto = `${contenido.title}. ${contenido.autor}. ${contenido.descripcion}. ${contenido.SubTitle}. ${contenido.descripcion2}`;
            const utterance = new SpeechSynthesisUtterance(leerTexto);
            utterance.lang = "es-ES";
            window.speechSynthesis.speak(utterance);
            hasSpokenRef.current = true;
        }
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
                            src="/img/politicanum5.png"
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
                        href="/politicadv"
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
