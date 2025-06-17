import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti6PoliticaPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Vladímir Putin plantea ante Donald Trump ser mediador en el conflicto entre Israel e Irán",
        autor: "Agencia Europa Press - 14 Junio 2025",
        descripcion:
            "Vladímir Putin, presidente de Rusia, subraya su compromiso con la negociación con Ucrania y felicita a Trump por su cumpleaños." +
            "El presidente ruso, Vladímir Putin, ha planteado este sábado durante una conversación telefónica con su homólogo estadounidense, Donald Trump, la posibilidad de ejercer como mediador entre Irán e Israel después del ataque israelí sobre territorio iraní y la posterior respuesta de la República Islámica." +
            "\"La importancia de evitar una escalada del conflicto y la disposición de Rusia para realizar posibles gestiones\", ha explicado el asesor de Putin para Asuntos Internacionales, Yuri Ushakov, según recoge la agencia de noticias rusa TASS." +
            "Rusia ha propuesto \"medidas concretas\" en las negociaciones sobre el programa nuclear iraní para llegar a \"acuerdos mutuamente aceptables\" entre Estados Unidos e Irán. \"Es normal que los presidentes ruso y estadounidense, a pesar de la complicada situación, no descarten volver a la vía de la negociación sobre el programa nuclear iraní\", ha argüido Ushakov." +
            "Ushakov ha comparecido ante la prensa para informar de la conversación con Trump, al que ha felicitado en el día de su 79º cumpleaños, y le ha expresado la disposición de Rusia de continuar con los contactos con Ucrania después del 22 de junio. La llamada ha durado unos 50 minutos. " +
            "\"El país ha expresado su disposición a seguir con las negociaciones con los ucranianos tras el 22 de junio, tal como se acordó\", ha indicado Ushakov. \"Donald Trump ha tomado nota de esta información y ha vuelto a poner de manifiesto su interés en poner fin rápidamente al conflicto ruso-ucraniano\", ha añadido.",
        SubTitle: "Intercambio de prisioneros",
        descripcion2:
            "Asimismo han hablado sobre el progreso en el acuerdo de intercambio de prisioneros alcanzado entre las partes el 2 de junio en Estambul. \"Nuestro presidente ha indicado que estos días se está realizando un intercambio de prisioneros de guerra que incluye a los heridos graves y a los prisioneros de guerra de menos de 25 años. Ucrania ha aceptado también dos remesas de cuerpos de fallecidos\", ha explicado. " +
            "Más tarde, el propio Trump ha publicado en su red social, Truth Social, que Putin le ha deseado \"un feliz cumpleaños muy amablemente\", \"pero, más importante, hemos hablado de Irán, un país que conoce muy bien\". \"Hemos hablado largo y tendido. Hemos dedicado menos tiempo ha hablar de Rusia/Ucrania, pero eso será para la semana que viene\", ha indicado antes de mencionar el acuerdo para el intercambio de prisioneros de guerra." +
            "\"La llamada ha durado aproximadamente una hora. Cree, como yo, que esta guerra Israel-Irán debe terminar, a lo que le he argumentado que su guerra también debería terminar\", ha apuntado." +
            "Esta es la tercera conversación entre Trump y Putin en el último mes y la quinta en lo que va de año. Las anteriores llamadas fueron las del 19 de mayo y el 4 de junio."
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
                            src="/img/politicanum6.png"
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
