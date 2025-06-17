import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti2DeportePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "¿Diego Enríquez dejará Sporting Cristal? Club León, de la Liga MX, tiene en la mira al portero rimense",
        autor: "Jean Dueñas - 24 Mayo 2025",
        descripcion:
            "Según pudo conocer RPP, el Club León de México sigue las buenas actuaciones de Diego Enríquez en Sporting Cristal." +
            "Desde que comenzó la temporada y a base de buenas actuaciones, Diego Enríquez se ha ido consolidando como uno de los mejores jugadores en Sporting Cristal." +
            "Pese al irregular momento de Sporting Cristal en el Torneo Apertura de la Liga1 Te Apuesto y la Copa Libertadores, el portero Diego Enríquez fue figura en más de un partido y ahora su nombre se ha vuelto muy atractivo para el mercado internacional, específicamente para el Club León." +
            "RPP pudo conocer que el León, de la Liga MX, ha venido siguiendo las actuaciones de Enríquez en la tienda celeste y todos los informes recopilados han sido positivos. De hecho, el técnico del equipo, Eduardo Berizzo, también ha podido ver las actuaciones del arquero peruano de 23 años.",
        SubTitle: "Los números de Diego Enríquez, pretendido por León",
        descripcion2:
            "El guardameta también convocado a la Selección Peruana tiene contrato vigente con el club de La Florida hasta diciembre del 2027 y es para muchos el mejor arquero en lo que va del campeonato" +
            "En lo que va de la temporada, el arquero ha disputado 16 encuentros; 11 por la Liga 1 2025 y 4 por la fase de grupos de la Copa Libertadores." +
            "Por otra parte, y con Diego Enríquez, Sporting Cristal prepara lo que será el partido de este miércoles frente a Palmeiras en Sao Paulo, por la sexta y última fecha del Grupo G de la Copa Libertadores." +
            "Los dirigidos por Paulo Autuori, en su idea de meterse a los octavos de final, están en la obligación de vencer al 'verdao' en el Allianz Parque y esperar que Cerro Porteño no sume frente a Bolívar en La Paz. Tarea complicada, pero no imposible."
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
                            src="/img/deportenum2.png"
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
