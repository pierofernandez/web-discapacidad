import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti4EntretenimientoPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "\"Contigo todo es mejor\": Christian Cueva y Pamela Franco comparten un romántico video desde un jacuzzi",
        autor: "Brenda García Retamal - 22 Mayo 2025",
        descripcion:
            "El romántico encuentro de Cueva y Franco generó comentarios de todo tipo en redes sociales." +
            "Sin preocuparse por el qué dirán. Pamela Franco compartió un video en Instagram en el que aparece junto a su pareja Christian Cueva en un jacuzzi. Las imágenes, junto a mensajes cargados de romanticismo, parecen ser parte de una cita nocturna de una de las parejas más polémicas de la farándula local." +
            "\"Momentos. Porque contigo todo es mejor, Christian Cueva\", escribió la intérprete, para luego agregar un mensaje aún más directo: \"Te amo, Christian Cueva\".",
        SubTitle: "Christian Cueva le canta al amor",
        descripcion2:
            "La reacción de 'Aladino' no tardó en llegar. El futbolista compartió un video en el que aparece junto a Pamela Franco dentro de un automóvil, mientras ambos entonan Se quiere bonito, tema de la agrupación salsera Costa Brava." +
            "\"A tu lado siempre todo es más bonito, amor mío. Pamela Franco, te adoro\", escribió el jugador de Cienciano." +
            "Tras la romántica dedicatoria de Christian Cueva, la cantante no tardó en compartirla a través de sus historias de Instagram.",
        SubTitle2: "Pamela Franco revela que le dio ultimátum a Christian Cueva",
        descripcion3:
            "Tras los recientes escándalos de infidelidad revelados por Pamela López en el programa El valor de la verdad, la cantante Pamela Franco decidió hablar sobre los límites en su relación con el futbolista Christian Cueva. Según contó, ya tuvieron una conversación seria al respecto y ella fue clara en pedirle que no la haga perder el tiempo con una traición." +
            "Pamela aseguró que se adelantó a posibles problemas en la relación y dejó una advertencia directa: si él tiene intención de serle infiel, que no lo prolongue innecesariamente." +
            "\"Le he dicho: 'Si me vas a engañar, por favor, que sea rápido, para no perder tanto tiempo. No te demores, porque ni el tiempo ni la oportunidad regresan'. Mi papá siempre decía que la oportunidad perdida, el tiempo y la flecha lanzada -las palabras que uno dice- no vuelven\", expresó la cumbiambera en La Karibeña. "
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
                            src="/img/entretenimientonum4.png"
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
