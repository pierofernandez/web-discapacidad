import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti2ArtePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Candidata a Miss Puerto Rico 2025 renunció sorpresivamente al certamen de belleza: ¿qué pasó?",
        descripcion:
            "Kiara Escudero, modelo e influencer de 29 años, explicó que su decisión nace del respeto hacia sí misma y reafirma su compromiso con el sector salud." +
            "La competencia rumbo a Miss Universo 2025 ya ha comenzado a tomar forma en varios países, y Puerto Rico no es la excepción." +
            "Sin embargo, una de las participantes más esperadas, Kiara Escudero, anunció su sorpresivo retiro del certamen Miss Universo Puerto Rico a través de una carta abierta publicada en sus redes sociales. " +
            "La joven de 29 años expresó que su decisión fue motivada por una conexión profunda con su sentir personal, afirmando que\" \"cada camino tiene su momento y cada decisión, su propósito\"" +
            "En su emotivo mensaje, Escudero subrayó que esta determinación nace del respeto hacia sí misma, y que se retira con serenidad, gratitud y fe en el plan que Dios tiene para su vida." +
            "A pesar de dejar el concurso, Escudero afirmó que continuará con su vocación de servicio, especialmente en la defensa y visibilización del trabajo de los profesionales del sector salud. " +
            " \"Esa es y siempre será la corona que llevo con más orgullo por y para mi Puerto Rico\", declaró. " +
            "La influencer también aprovechó para agradecer a las personas y organizaciones que la apoyaron durante su trayecto en el certamen, asegurando que la experiencia le dejó lecciones valiosas y fortaleció su identidad. " +
            "Cabe recordar que Kiara Escudero representó a Toa Baja en la edición 2023, donde obtuvo el título de segunda finalista. " +
            "En esa ocasión, Karla Guilfú Acevedo fue coronada y posteriormente representó a Puerto Rico en Miss Universo celebrado en El Salvador, donde la ganadora fue la nicaragüense Sheynnis Palacios. " +
            "La renuncia de Kiara Escudero se suma a la de Nicole Marie Colón, quien también decidió no volver a competir este año, alegando conflictos contractuales con marcas con las que trabaja actualmente.",
        SubTitle: "¿Cuántos Miss Universo ha ganado Puerto Rico en su historia?",
        descripcion2:
            "Puerto Rico logró la corona internacional en cinco ocasiones. Conoce de quiénes se trata:"+
            "Puerto Rico ha ganado el certamen de Miss Universo en cinco ocasiones: en 1970 con Marisol Malaret, 1985 con Deborah Carthy-Deu, 1993 con Dayanara Torres, 2001 con Denise Quiñones y 2006 con Zuleyka Rivera. Gracias a estos triunfos, el país se ubica entre los más exitosos en la historia del concurso."
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
                            src="/img/artenum2.png"
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
