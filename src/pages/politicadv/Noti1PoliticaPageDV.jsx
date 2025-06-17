import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti1PoliticaPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Poder Judicial evaluará si aplica control difuso sobre ley que penaliza a adolescentes",
        autor: "Redacción RPP - 7 Junio 2025",
        descripcion:
            "Días atrás, la presidenta del Poder Judicial, Janet Tello, anunció que la Sala Plena de la Corte Suprema evalúa la presentación de una demanda de inconstitucionalidad contra la ley que incorpora a los adolescentes de 16 y 17 años como sujetos imputables dentro del sistema penal." +
            "El juez especializado Carlos Zavaleta, integrante del Consejo Ejecutivo del Poder Judicial, señaló que los jueces y juezas tendrán que analizar en cada caso concreto si aplican o no la Ley 32330, la cual incorpora a los adolescentes de 16 y 17 años como sujetos imputables del sistema penal. " +
            "“Aún no hay un posicionamiento para hacer un control difuso de la norma, tendremos que ver si podemos aplicar un control difuso o en todo caso procesarlo como una persona adulta que es sujeto de un proceso penal”, dijo." +
            "Días atrás, la presidenta del Poder Judicial, Janet Tello, anunció que la Sala Plena de la Corte Suprema evalúa la presentación de una demanda de inconstitucionalidad contra la referida norma." +
            "No obstante, el magistrado  Zavaleta indicó que en Trujillo ya se dictó una medida de prisión preventiva contra una persona de 16 años que, conforme a la ley, aún es un menor de edad." +
            "Asimismo, informó que en las unidades de flagrancia se tendrán que ver los casos de adolescentes, siempre que sean detenidos cometiendo un acto delictivo.",
        SubTitle: "Unidades de flagrancia",
        descripcion2:
            "Por otro lado, Zavaleta Grández señaló que, a raíz de la dación de la Ley 32348 (Ley que crea el Sistema Nacional Especializado en Flagrancia Delictiva), todos los procesos que se originen en un delito flagrante, serán tratados en las Unidades de Flagrancia." +
            "Sin embargo, sostuvo que esta norma exceptúa su trámite en las unidades de flagrancia delitos como crimen organizado, terrorismo, lavado de activos y corrupción de funcionarios, debido a su complejidad y porque ya tienen juzgados especializados." +
            "Señaló que en las unidades de flagrancia el proceso se simplifica porque es un delito que tiene información y material probatorio, y donde el Ministerio Público presenta un requerimiento de proceso inmediato." +
            "Añadió que, luego de un filtro, un juez de juzgamiento hace un juicio oral y establece una sentencia, y tratándose de un caso donde hay información y material probatorio, las sentencias van a ser condenatorias. ",
        SubTitle2: "Cadena perpetua",
        descripcion3: "\"Las penas pueden ser efectivas desde dos días hasta cadena perpetua, dependiendo del tipo de delito\", indicó Zavaleta Grández." +
        "El magistrado también explicó que la nueva norma obliga a la Policía llevar directamente a los detenidos a las unidades de flagrancia, y no como antes que los trasladaban primero a las comisarías.  " +
        "Sostuvo que, actualmente, el Poder Judicial ha habilitado 15 unidades de flagrancia modelo y otras 15 que están a manera de plan piloto, y los jueces están presentes en todas ellas. " +
        "Añadió que por falta de gestión de los recursos económicos parte de fiscales y policías no están presentes en todos los complejos judiciales de flagrancia."
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
                            src="/img/politicanum1.png"
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
