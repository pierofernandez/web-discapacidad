import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti3PoliticaPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Daniel Noboa juró como presidente de Ecuador para un segundo mandato",
        autor: "Wendy Milla Loo - 22 Mayo 2025",
        descripcion:
            "La presidenta Dina Boluarte viajó hasta Quito y estuvo presente en la toma de mando para un segundo periodo de su homólogo ecuatoriano. " +
            "El presidente de Ecuador, Daniel Noboa, asumió oficialmente la Presidencia de Ecuador este sábado, 24 de mayo, para un segundo mandato de cuatro años, desde 2025 hasta 2029." +
            "El mandatario recibió la banda presidencial por parte del titular de la Asamblea Nacional, Niels Olsen, en Quito. Posteriormente, el titular del Parlamento ecuatoriano le impuso el Gran Collar de la Orden de San Lorenzo." +
            "Durante su discurso de toma de mando, Noboa saludó a Gustavo Petro, presidente de Colombia, quien asistió a la ceremonia de investidura de su homólogo y -posteriormente- se dirigió al pueblo ecuatoriano." +
            "Tras el juramento de Noboa, le siguió la vicepresidenta María José Pinto, quien reemplaza en el cargo a Verónica Abad, quien -en el pasado- protagonizó diversos enfrentamientos con el presidente ecuatoriano.  " +
            "“[Hoy] es un día para hablar con la verdad, con la memoria viva y con la convicción de que lo que hemos hecho y lo que está por venir nos pertenece a todos”, expresó el mandatario durante su primer discurso." +
            "Como se recuerda, el jefe de Estado ecuatoriano prolongó su estadía en el Palacio de Carondelet tras vencer a la candidata correísta Luisa González en la segunda vuelta.",
        SubTitle: "Dina Boluarte presente en la toma de mando de Daniel Noboa",
        descripcion2:
            "Dina Boluarte llegó temprano a la sede de la Asamblea Nacional de Ecuador para participar en la ceremonia de toma de mando del segundo periodo presidencial de Daniel Noboa, luego que el Congreso peruano aprobara su viaje, con 57 votos a favor, 34 en contra y una abstención. " +
            "La mandataria llegó acompañada del canciller Elmer Schialer y fue recibida por las autoridades de Ecuador." +
            "\"Este acto reafirma el compromiso del Perú con la integración regional y la cooperación entre pueblos hermanos\", señaló la jefa de Estado a través de sus canales oficiales",
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
                            src="/img/politicanum3.png"
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
