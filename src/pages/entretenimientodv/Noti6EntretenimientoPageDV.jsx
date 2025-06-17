import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti6EntretenimientoPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "'El juego del calamar 3' mostrará \"lo más bajo del ser humano\", adelanta el director Hwang Dong-hyuk",
        autor: "Harold Quispe - 24 Mayo 2025",
        descripcion:
            "\"La serie está llegando a su clímax\", sostuvo Hwang Dong-hyuk sobre la tercera temporada de 'El juego del calamar' que llegará a Netflix el próximo 27 de junio." +
            "El juego del calamar emitirá pronto su tercera —y última— temporada en Netflix para seguir rompiendo récords de audiencia con los 456 participantes quienes buscarán, una vez más, llevarse el premio de 45,6 millones de wones (38, 288 dólares) arriesgando sus vidas superando los más peligrosos juegos." +
            "Ahora, el director Hwang Dong-hyuk habló con Entertainment Weekly sobre el enfoque que tendrá la tercera temporada de El juego del Calamar afirmando que buscará superar las visualizaciones conseguidas por la segunda parte de la serie en 92 países en todo el mundo. " +
            "“En el caso de la tercera temporada, quise introducir juegos que realmente mostraran lo más bajo del ser humano, porque la serie está llegando a su clímax”, comenzó diciendo el director y guionista surcoreana de 53 años. En ese sentido, recalcó que su objetivo es que los participantes “saquen a flote las partes más oscuras de la naturaleza humana”." +
            "Del mismo modo, mencionó que habrá un cambio en la lista de juegos para los capítulos finales de El juego del calamar a diferencia de su segunda temporada. “En la primera temporada utilizamos el juego de la cuerda para provocar miedo, algo que en la temporada dos no tuvimos (…) Por eso, en la tercera temporada, decidí introducir juegos que pudieran infundir terror en las personas con pura altura”, mencionó." +
            "Por último, afirmó que tiene como objetivo resaltar “el sentido de humanidad” en las personas a través de las escenas en El juego del calamar. “Quise plantear cómo podemos conservar nuestro sentido de humanidad y cómo debemos seguir siendo humanos a pesar de esta competencia feroz. Trato de plantear eso como una pregunta final”, añadió.",
        SubTitle: "¿Cuándo se estrenará la tercera temporada de El juego del calamar?",
        descripcion2:
            "La tercera —y última— temporada de El juego del calamar se estrenará en Netflix el 27 de junio de 2025 llegando a Estados Unidos y Latinoamérica con seis episodios finales.",
        SubTitle2: "¿De qué trata la tercera temporada de El juego del calamar?",
        descripcion3: "La serie seguirá nuevamente a Seong Gi-hun (Lee Jung-jae), un padre endeudado que, junto a otros 455 participantes, acepta competir en una serie de juegos infantiles con giros peligrosos que son observados por una secta secretada dirigida por Hwang In-ho (Lee Byung-Hun), 'El Líder'." + 
        "\"Seong Gi-hun persiste en su objetivo de poner fin al juego, mientras que el Líder continúa con su siguiente movimiento y las decisiones de los jugadores supervivientes traerán consecuencias más graves con cada ronda. ¿Podemos tener esperanzas de humanidad en la más cruel de las realidades? Los fans de todo el mundo cuentan los días para que se revele la respuesta final\", se lee en la sinopsis oficial. "
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
                window.location.href = "/entretenimientodv";
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
                            src="/img/entretenimientonum6.png"
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
