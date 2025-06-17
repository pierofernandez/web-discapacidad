import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti3EntretenimientoPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Tom Cruise responde incómoda pregunta tras la decisión de su hija Suri de no llevar su apellido",
        autor: "Renzo Alvarez - 22 Mayo 2025",
        descripcion:
            "Suri, la hija menor del actor Tom Cruise, decidió prescindir del apellido de su padre en 2024 durante su ceremonia de graduación que celebró en Nueva York y a la que el artista no asistió." +
            "Tom Cruise protagonizó un momento incómodo en medio de la campaña promocional de la película Misión Imposible: La sentencia final. Durante la alfombra roja del estreno en Nueva York, una periodista del medio E! News le consultó sobre sus planes para el Día del Padre. \"¿Cómo sería para vos un Día del Padre ideal?, preguntó la comunicadora.\" " +
            "\"Ya saben…\", respondió el actor titubeando y evitando el contacto visual con la periodista. \"Simplemente divirtiéndome. Haciendo películas, grandes aventuras y pasándola genial\", añadió para luego alejarse de la entrevistadora." +
            "Cruise es padre de tres hijos; Isabella (32) y Connor (30), ellos fueron adoptados cuando estuvo con Nicole Kidman. También es progenitor de Suri (18), fruto de su matrimonio con Katie Holmes, sin embargo, la relación entre entre ambos no sería la más cercana; de hecho, la última imagen pública de padre e hija data de 2013, cuando visitaron Disneyland juntos.",
        SubTitle: "Suri optó por no llevar el apellido de Tom Cruise",
        descripcion2:
            "Suri nació el 18 de abril de 2006 y según medios estadounidenses, desde hace más de una década, no mantiene contacto con su padre. En 2023, durante su graduación escolar, optó por no usar su apellido paterno y fue presentada como Suri Noelle, en alusión al segundo nombre de su madre, Katie Noelle Holmes." +
            "Según declaraciones de un exvocero de la Iglesia de la Cienciología, a la cual Tom Cruise pertenece, Suri \"no es ciencióloga y nunca lo será\", lo que explicaría el distanciamiento con su padre, en contraste con sus otros dos hijos, quienes decidieron ser parte del culto." +
            "Katie Holmes, por su parte, nunca se ha referido públicamente a la Cienciología. Esta actitud se atribuye a los acuerdos de confidencialidad que habría firmado tras su separación del actor, los cuales le impedirían hablar sobre su matrimonio y su paso por la Iglesia. " +
            "Suri creció en Nueva York junto a Holmes y, desde temprana pequeña, se mostró interesada en la moda. El año pasado, anunció a través de TikTok su ingreso a la Escuela de Diseño de Carnegie Mellon, lo que motivó su mudanza a Pittsburgh, Pensilvania."
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
                            src="/img/entretenimientonum3.png"
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
