import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti4ArtePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "'Mi madre se comió mi corazón', una obra íntima que rompe el silencio sobre la salud mental",
        autor: "Renzo Napa - 24 Mayo 2025",
        descripcion:
            "La obra escrita y dirigida por K’intu Galiano y protagonizada por Vania Accinelli propone una mirada íntima y urgente sobre la salud mental, los vínculos maternos y el poder transformador del dolor." +
            "Las luces se encienden para revelar a una mujer en medio del escenario. Ella confronta los prejuicios sobre la bipolaridad a través de su propia historia, mientras revisa a profundidad aquellos episodios que la marcaron como hija, madre y mujer. Se cuestiona constantemente, y el espectador la acompaña. ¿Será capaz de sobrevivir a este proceso?" +
            "La salud mental sigue siendo una de las grandes conversaciones pendientes. Y el teatro, ese espacio donde las emociones se amplifican, puede ser una herramienta poderosa para abordarla desde lo íntimo. Ese es el espíritu de Mi madre se comió mi corazón, la más reciente propuesta del dramaturgo K’intu Galiano, que llega con una interpretación potente de Vania Accinelli en el Teatro La Plaza.",
        SubTitle: "Un grito poético contra el silencio",
        descripcion2:
            "\"La salud mental es la piedra angular de nuestra salud como individuos y como sociedad\", afirma Galiano en entrevista con RPP. Y es desde esa convicción que nace esta obra: como un testimonio autoficcional que indaga en la complejidad de los vínculos maternos, el peso del dolor heredado y el largo camino hacia la sanación." +
            "Esa intimidad también se refleja en el origen mismo del texto. Fue escrito originalmente como una nota en el celular, desde la voz de una mujer que intenta sanar la relación con su madre para romper el ciclo y construir con su hija un vínculo menos doloroso. \"El título, Mi madre se comió mi corazón, brotó de manera intuitiva. Luego se convirtió en un campo semántico muy fértil para la experiencia escénica\", explica el autor." +
            "La puesta en escena minimalista envuelve al espectador en una marea de emociones sostenida por la fortaleza de Vania. Solo necesita una luz, una silla, un chal y un columpio; pero lo que entrega es una vorágine emocional: saltos de tiempo, multiplicidad de personajes y recursos escénicos que mantienen la atención fija del espectador, de principio a fin." +
            "No obstante, solo se trató de un acompañamiento.",
        SubTitle2:
            "Vania Accinelli: una actriz, muchas voces",
        descripcion3:
            "Sobre el escenario, Vania se luce. Salta, grita, calla, ríe, llora, corre, ocupa cada rincón. Interpreta a múltiples personajes -una niña, una madre, una voz interna, una terapeuta- y a todos los define con una precisión impactante." +
            "\"Hay una conexión muy orgánica con el público. Les hablo todo el tiempo, se genera un vínculo real\", cuenta la actriz. \"Lo más desafiante es prestarle mi corazón. Estar totalmente presente y dejar que su verdad me atraviese\"." +
            "Accinelli también destaca la crudeza del texto: \"Es muy visceral. El personaje es transparente, y eso hace que la gente conecte rápido, porque todos, en algún momento, hemos tenido que trabajar con un dolor familiar, con una herida, para poder crecer\".",
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
                window.location.href = "/artedv";
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
                            src="/img/artenum4.png"
                            alt="Article"
                            className="w-full h-85 object-cover "
                        />
                        <div>
                            <p className="text-xl text-gray-500 py-1">{contenido.autor}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion}</p>
                            <p className="text-2xl text-gray-600 py-1 font-bold">{contenido.SubTitle}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion2}</p>
                            <p className="text-2xl text-gray-600 py-1 font-bold">{contenido.SubTitle2}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion3}</p>


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
