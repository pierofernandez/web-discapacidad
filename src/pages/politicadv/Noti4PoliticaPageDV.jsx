import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti4PoliticaPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Ucrania asegura que ha destruido 40 aviones rusos en bombardeos contra tres aeródromos en Murmansk e Irkutsk",
        autor: "Brenda García Retamal - 22 Mayo 2025",
        descripcion:
            "De acuerdo con fuentes de la Inteligencia de Ucrania, al menos 40 aeronaves rusos han sido destruidas en estas operaciones contra la aviación estratégica rusa, efectuadas por aviones no tripulados." +
            "El Servicio de Seguridad de Ucrania (SBU) ha anunciado este domingo tres ataques contra la \"aviación estratégica\" de Rusia que han alcanzado varios aparatos en tres aeródromos de las regiones de Murmansk e Irkutsk, esta última en Siberia, escenario de un ataque sin precedentes desde el comienzo del conflicto." +
            "De acuerdo con fuentes de Inteligencia al canal Nosotros Ucrania, al menos 40 aviones rusos han sido destruidos en estas operaciones, efectuadas por aviones no tripulados, que han alcanzado aviones de reconocimiento A-50, bombarderos estratégicos Tu-95 y bombarderos de largo alcance Tu-22M3." +
            "Los ataques han ocurrido concretamente en el aeródromo de Olenya, en Murmansk y en el aeródromo de Belaya y el centro de aviación de Irkutsk. " +
            "El gobernador de Irkutsk, Igor Kobzev, ha confirmado en su cuenta de Telegram \"el primer ataque con drones en Siberia\", sin dar más detalles al margen de asegurar que no se tiene constancia de víctimas." +
            "Este ataque ucraniano ha ocurrido después de lo que el Ministerio de Defensa de Kiev ha denunciado como una noche de asaltos rusos sin precedentes. \"Las defensas aéreas ucranianas repelieron un ataque masivo de 479 armas aéreas rusas, incluyendo 472 drones Shahed, misiles balísticos y de crucero\", ha hecho saber el Ministerio en un comunicado." +
            "Desde ayer por la tarde hasta las 13.30 de este domingo, hora local, \"385 objetivos aéreos fueron destruidos o suprimidos por unidades de defensa aérea en diversas regiones\" del país, según el Ministerio.",
        SubTitle: "Doce muertos en ataque ruso a punto de entrenamiento militar ucraniano",
        descripcion2:
            "Doce soldados murieron y más de 60 resultaron heridos este domingo en un ataque ruso con misil contra una unidad de entrenamiento militar, informaron las Fuerzas Terrestres de las Fuerzas Armadas ucranianas en un comunicado." +
            "\"Hoy, 1 de junio, el enemigo ha lanzado un ataque con misiles contra el emplazamiento de una de las unidades de entrenamiento de las Fuerzas Terrestres de las Fuerzas Armadas de Ucrania. Desgraciadamente, hay militares muertos y heridos\", puede leerse en el comunicado difundido en Telegram, que agrega que los afectados están recibiendo toda la atención médica necesaria." +
            "Las Fuerzas Armadas aseguran que no hubo ninguna formación ni concentración masiva de personal y que tras el anuncio de alerta de ataque aéreo la mayoría del personal se encontraba en refugios." +
            "Según el portavoz de las Fuerzas Terrestres de las Fuerzas Armadas ucranianas, Vitali Sarantsev, el ataque ruso fue realizado con un misil Iskander contra una unidad de entrenamiento en la región de Dnipropetrovsk, informó la televisión pública ucraniana Suspilne." +
            "En el Mando de las Fuerzas Terrestres de las Fuerzas Armadas de Ucrania se ha creado una comisión para investigar todas las circunstancias y causas que llevaron a la pérdida de personal y se ha ordenado una investigación interna." +
            "\"Si se establece que las muertes y lesiones de los militares fueron causadas por las acciones o la inacción de los oficiales, los responsables deberán rendir cuentas estrictamente\", se advierte en el comunicado." +
            "Además, \"se están tomando medidas de seguridad adicionales para proteger la vida y la salud de los militares ante los ataques aéreos y con misiles del agresor en las zonas de retaguardia\", agrega."
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
                            src="/img/politicanum4.png"
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
