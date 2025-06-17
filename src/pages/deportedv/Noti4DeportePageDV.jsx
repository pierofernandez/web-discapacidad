import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti4DeportePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Ocho equipos en la pelea: ¿qué les queda por jugar a los clubes en el cierre del Torneo Apertura 2025?",
        autor: "Diego Figueroa Loayza - 26 Mayo 2025",
        descripcion:
            "Universitario y Alianza Lima comparten el liderato del Torneo Apertura, pero seis equipos más le siguen muy cerca: Melgar, Sport Huancayo, Deportivo Garcilaso, Cusco FC, Alianza Atlético y Sporting Cristal." +
            "El Torneo Apertura entra en la recta final y cada vez estamos más cerca de conocer al ganador del primer certamen de la Liga1 Te Apuesto 2025. Tras la fecha 14, la competición entrará en pausa por la ventana internacional FIFA, un periodo donde algunos clubes que pelean en la parte alta se pondrán al día, como Universitario de Deportes, FBC Melgar y Alianza Lima, todos en condición de visitante." +
            "Universitario se recuperó ganándole a Sporting Cristal y con el empate de Melgar ante Alianza Universidad vuelve a depender de sí mismo para ser campeón del Apertura. El equipo de Jorge Fossati tiene una importante diferencia de gol a favor, factor clave para el tramo decisivo." +
            "Mientras define su suerte a nivel internacional, a la ‘U’ le quedará por jugar cinco cotejos más, donde no encontrará a rivales directos y con dos visitas a la altura: frente a Ayacucho y ante Deportivo Garcilaso." ,
        SubTitle: "¿Quién será el ganador del Torneo Apertura 2025?",
        descripcion2:
            "Alianza Lima no dejó pasar la chance de seguir el paso de Universitario e igualó su puntaje en la cima de la clasificación tras derrotar a Sport Boys. Tras la para del torneo, los íntimos recibirán a Huancayo, un rival directo, y luego será visitante ante Comerciantes Unidos. MIientras que una de sus paradas más difíciles será visitar a Melgar en Arequipa. Seguirá el duelo con Binacional en Matute y cerrará ante UTC en Cajabamba." +
            "Melgar tiene por delante dos visitas a la altura, factor que no juega en contra para los rojinegros. Uno de sus rivales será Huancayo, además de encontrarse con Alianza Lima en la UNSA." +
            "Sport Huancayo es una de las sorpresas, elenco que descansó en la fecha 14. Cuando regrese a la acción visitará a Alianza Lima y recibirá luego a Melgar, un periodo que podría definir su suerte en la pelea por el Apertura." +
            "Deportivo Garcilaso escaló posiciones al golear 4-0 a Juan Pablo II. Con este resultado, sumó 23 puntos y de momento se ubica en el quinto lugar." + 
            "Cusco FC se unió al grupo selecto de los que pelean arriba luego de imponerse a Comerciantes Unidos en Cajabamba. Los dorados tienen en su fixture tres duelos más en altura y dos en el llano: ante Grau y Sport Boys." +
            "Alianza Atlético y Sporting Cristal son sétimo y octavo lugar respectivamente con 22 unidades. A los de Sullana le esperan tres visitas en la altura y a los celestes le quedan tres encuentros en Lima y dos en ciudades de altura."
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
                            src="/img/deportenum4.png"
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
