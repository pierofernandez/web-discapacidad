import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti2EntretenimientoPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Britney Spears protagonizó incidente en avión: encendió un cigarro y bebió alcohol en pleno vuelo",
        autor: "Brenda García Retamal - 22 Mayo 2025",
        descripcion:
            "La artista, que viajaba en un jet privado, fue reprendida por la tripulación. El episodio se suma a otros antecedentes de conducta imprudente en aviones. " +
            "Las últimas vacaciones de Britney Spears terminaron con un nuevo episodio polémico, luego de que la cantante de 43 años fuera reprendida por su comportamiento durante un vuelo privado desde Cabo San Lucas a Los Ángeles. Según reportes de People y TMZ, Spears encendió un cigarrillo y consumió alcohol durante el trayecto, acciones que violan las regulaciones federales de aviación. " +
            "La situación generó alarma entre la tripulación del avión chárter, operado por JSX (de solo 30 asientos), quienes le exigieron que lo apagara. Aunque cumplió la orden, las autoridades fueron alertadas en pleno vuelo. Al aterrizar en el aeropuerto de LAX, la intérprete fue recibida por oficiales que le dieron una advertencia formal por su conducta. Posteriormente, fue autorizada a retirarse sin consecuencias legales. " +
            "Una fuente cercana declaró a People que \"esta no es su primera advertencia\", refiriéndose a antecedentes similares, como un incidente en diciembre pasado donde la artista llevó un encendedor de butano a bordo de otro vuelo privado, también en violación de normas de seguridad aérea. ",
        SubTitle: "¿Qué dijo Britney Spears tras su incidente?",
        descripcion2:
            "Britney Spears se pronunció sobre el hecho en su cuenta de Instagram, publicando un video en el que brinda desde el avión y asegura que pensó que la presencia de las autoridades era un gesto de apoyo. En el texto, la cantante explicó que asumió que fumar estaba permitido por el diseño del asiento y que fue la primera vez que bebía vodka en un vuelo, lo que -según dijo- le hizo sentir \"muy inteligente\"." +
            "La intérprete de Toxic también se disculpó con quienes pudieran haberse sentido ofendidos y criticó la actitud de una asistente de vuelo, alegando que fue tratada con rudeza y que no se le permitió levantarse durante los primeros 20 minutos del viaje." +
            "Este incidente se suma a una serie de comportamientos controversiales recientes por parte de la llamada “princesa del pop”, quien ha expresado públicamente su frustración con el escrutinio mediático. En diciembre, incluso mencionó la posibilidad de mudarse a México para escapar del acoso de los paparazzi, aunque fuentes cercanas aseguran que no fue una decisión definitiva.",
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
                            src="/img/entretenimientonum2.png"
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
