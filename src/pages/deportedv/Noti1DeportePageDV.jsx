import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti1DeportePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Cienciano empieza a despedirse de Christian Cueva: \"Tomó la decisión de no seguir con nosotros\"",
        autor: " Renzo Castillo Lazo - 12 Junio 2025",
        descripcion:
            "El administrador de Cienciano, Sergio Ludeña, ofreció una conferencia de prensa en la que habló del caso Christian Cueva rumbo a Emelec." +
            "Cerca de volver al fútbol del exterior. Todo se perfila a que Christian Cueva, en el corto plazo, dejará la tienda de Cienciano para ponerse la camiseta de Emelec en la liga ecuatoriana de primera división." +
            "En relación a ello fue que se pronunció Sergio Ludeña, administrador de Cienciano. Este, en conferencia de prensa, indicó que Christian Cueva ha tomado la medida de salir, por lo que todo queda en la negociación para que su contrato en el 'Papá' termine antes de lo que se tiene estipulado." +
            "\"Apostamos por Cueva en un momento en el que estaba alejado del fútbol. Tiene mucho para darle al país como jugador, y pese a que hicimos un esfuerzo económico para mejorar nuestra actual propuesta, tomó la decisión de no seguir con nosotros\", sostuvo en un primer momento.",
        SubTitle: "¿Qué pasó entre Cueva, Cienciano y Emelec?",
        descripcion2:
            "Luego, indicó que -en un primer momento- no se dio un contacto directo de parte del cuadro 'eléctrico' que es parte de la Liga Pro de Ecuador." +
            "\"Nosotros no recibimos una comunicación de parte de Emelec y nos enteramos por redes de la presentación de un futbolista que tiene contrato y por ello dijimos que íbamos a demandar a la institución. Hay que respetar a Cienciano\", añadió." +
            "Por último, el directivo de Cienciano mencionó que no pondrán trabas para una eventual salida de Christian Cueva rumbo al cuadro azul." +
            "\"Luego tuvimos un diálogo con el presidente de Emelec y aún Cienciano negocia y estamos revisando el caso de su contrato. Todo aún está en proceso de detalles en los contratos para que este ciclo siga o se extinga de la mejor manera posible. No buscamos tener inconvenientes con nadie, pero no podemos dejar el tema 'forma' del club. Nadie está por encima\", dijo."
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
                            src="/img/deportenum1.png"
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
