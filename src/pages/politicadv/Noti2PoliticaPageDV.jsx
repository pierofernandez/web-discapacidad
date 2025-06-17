import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti2PoliticaPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Israel y Hamás confirman que van a retomar negociaciones para un alto al fuego en Gaza",
        autor: "Redacción RPP - 22 Mayo 2025",
        descripcion:
            "Días atrás, Hamás acusó al primer ministro israelí, Benjamín Netanyahu, de entorpecer las negociaciones al imponer nuevas condiciones cuando las bases para un nuevo acuerdo ya estaban sólidas. " +
            "Israel y Hamás confirmaron este jueves que van a retomar en Doha junto a los mediadores -Catar, Egipto y EEUU- las negociaciones sobre un alto el fuego en la Franja de Gaza que en estas últimas semanas habían quedado de nuevo bloqueadas. " +
            "La oficina del primer ministro israelí, Benjamín Netanyahu, anunció en un comunicado que el mandatario ha dado el visto bueno a que una delegación encabezada por el servicio de inteligencia exterior, el Mosad, y el interior, el Shin Bet, junto al Ejército israelí, viajen a Doha \"para continuar con las negociaciones\". " +
            "De momento, se desconoce qué día viajará la delegación israelí." +
            "Newton fue clara al respecto, ya que Luciana Fuster mostró su intención de participar en el Miss Universo, por ello, mencionó que si bien tiene las características y el perfil " +
            "El grupo islamista Hamás, por su parte, aseguró que su delegación mañana jueves en Doha retomará las conversaciones para desatascar el acuerdo que hace unas semanas parecía inminente." +
            "\"Mañana retomaremos las negociaciones con todo los mediadores en Doha\", confirmó a EFE Basem Naim, miembro del buró político de Hamás." +
            "Después de que las conversaciones se reactivaran a principios de diciembre, con señales positivas de ambas partes sobre la posibilidad de lograr un acuerdo -incluso el primer ministro israelí, Benjamín Netanyahu, dijo a las familias que había llegado el momento de un pacto-, el diálogo se rompió de nuevo hace una semana." +
            "Hamás acusó a Netanyahu de imponer nuevas condiciones cuando las bases para un nuevo acuerdo ya estaban sólidas.",
        SubTitle: "\"El acuerdo es posible\"",
        descripcion2:
            "Una fuente de Hamás en Egipto señaló este jueves a EFE que \"el acuerdo es posible y puede lograrse pronto si el gobierno de Netanyahu se retracta de las nuevas condiciones que obstaculizaron el logro de un acuerdo entre las dos partes\". " +
            "\"Hay muchos puntos conflictivos entre Israel y Hamás en las negociaciones\", entre los que destaca la lista de secuestrados vivos que \"Israel insiste en obtener\". Hamás argumenta que necesita unos días de tregua para ponerse en contacto con otros grupos que custodian rehenes para saber donde están y si están vivos o muertos. " +
            "Por otro lado, una fuente egipcia familiarizada con las negociaciones entre Israel y Hamás dijo a EFE que \"el acuerdo está casi listo y se pueden superar los obstáculos\", dado que Hamás \"no se opone a completar el acuerdo en dos etapas\"." +
            "La Yihad Islámica, otro grupo que tiene en su poder algunos rehenes israelíes, indicó hoy que uno de sus cautivos trató de suicidarse hace tres días cuando se enteró de que las negociaciones habían fracasado ante las nuevas demandas de Netanyahu." +
            "De los 251 rehenes que las milicias palestinas lideradas por Hamás tomaron cautivos el 7 de octubre, quedan dentro del enclave 96 -34 de ellos están confirmados muertos-, pero hay otros cuatro secuestrados desde hace años, entre ellos dos soldados muertos desde 2014." +
            "Desde que comenzó la guerra, Israel y Hamás solo lograron un acuerdo de tregua de una semana a finales de noviembre de 2023, en el que se intercambió a 105 rehenes a cambio de 240 prisioneros palestinos, mientras que el Ejército israelí ha rescatado con vida a ocho cautivos y recuperado los cuerpos de 38 y Hamás liberó por razones \"humanitarias\" a cuatro mujeres pocas semanas después del ataque. "
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
                window.location.href = "/politicadv";
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
                            src="/img/politicanum2.png"
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
