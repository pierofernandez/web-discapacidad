import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti3ArtePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "'Nos pasa a todas', un libro que recoge testimonios conmovedores de mujeres en un programa radial",
        autor: "Redacción RPP - 23 Mayo 2025",
        descripcion:
            "Este miércoles 28 de mayo a las 7:00 p. m., la Casa de la Literatura Peruana será escenario de la presentación de Nos pasa a todas, un libro que trae historias reales compartidas por mujeres en un programa radial. " +
            "La narradora, Lucía, se convierte en un puente de empatía, orientación y consuelo, relatando los testimonios que llegan cada día a la cabina." +
            "\"Nos pasa a todas no solo visibiliza las problemáticas que enfrentan las mujeres —desde la violencia emocional hasta los dilemas cotidianos de la maternidad, la soledad, la pérdida o el amor propio—, sino que también ofrece una guía emocional con consejos, como los que daría una amiga de confianza \", indica un comunicado de prensa." +
            "La publicación pone en primer plano las voces femeninas desde la intimidad, la experiencia compartida y la resiliencia. El evento contará con la presencia de los autores Rosmery Valdez y Robert Miranda.",
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
                            src="/img/artenum3.png"
                            alt="Article"
                            className="w-full h-85 object-cover "
                        />
                        <div>
                            <p className="text-xl text-gray-500 py-1">{contenido.autor}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion}</p>
                            <p className="text-2xl text-gray-600 py-1 font-bold">{contenido.SubTitle}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pb-6">
                    <a
                        href="/artedv"
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
