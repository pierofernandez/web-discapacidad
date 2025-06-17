import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti5EntretenimientoPageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "'Lilo y Stitch': Disney ya considera una secuela tras el entusiasmo por el remake live-action",
        autor: "Renzo Napa - 22 Mayo 2025",
        descripcion:
            "La nueva versión en acción real de la cinta animada de 2002 se estrena este jueves 22 de mayo en cines y, antes de su lanzamiento, ya hay conversaciones sobre una posible secuela. " +
            "Lilo y Stitch están de vuelta, y no parece que quieran irse pronto. Aunque el remake live-action acaba de llegar a los cines, Disney ya estaría considerando expandir esta historia más allá de una sola película en acción real. Así lo dejó entrever Alan Bergman, co-presidente de Disney Entertainment, en una reciente entrevista con The Wall Street Journal." +
            "“Parece que va a funcionar muy bien, y es el tipo de propuesta que da para mucho más”, comentó el ejecutivo. Pero no solo se trata de taquilla. Según Bergman, el fenómeno Lilo y Stitch también ha despegado desde otros frentes: el streaming y, sobre todo, el merchandising. “Hemos visto explotar las cosas desde la perspectiva de Disney+ y los productos de consumo”, añadió.",
        SubTitle: "El universo de Lilo y Stitch",
        descripcion2:
            "Quienes recuerdan a Lilo y Stitch como una entrañable película animada de 2002 quizá se sorprendan al descubrir que esta franquicia tiene un universo mucho más amplio del que imaginaban. Además de dos secuelas lanzadas directamente a video, existe una continuación para televisión, tres series animadas —una de ellas producida en Japón—, varios especiales y hasta videojuegos." +
            "Una de las historias más recordadas es precisamente Lilo & Stitch 2: Stitch en cortocircuito (2005), donde la pequeña Lilo quiere seguir los pasos de su madre en un concurso de hula, mientras Stitch lucha contra un error en su programación que amenaza con hacerle perder el control. Como en la cinta original, esta secuela destaca por su humor y profundidad emocional, reforzando el valor de los vínculos familiares, uno de los pilares de la franquicia." +
            "Y por supuesto, Stitch —el experimento alienígena 626— ha mantenido una presencia constante en los parques temáticos de Disney, donde su popularidad nunca ha disminuido. Su figura tierna y esponjosa sigue generando ventas millonarias en productos de todo tipo, desde mochilas hasta pijamas, lo que confirma que la franquicia sigue viva en el corazón de múltiples generaciones.",
        SubTitle2: "¿Cuándo se estrena el live-action de Lilo y Stich?",
        descripcion3: "Originalmente planeada para estrenarse en Disney+, el estudio cambió de estrategia y anunció en agosto de 2024 que el live-action de Lilo y Stitch llegaría a los cines: el jueves 22 de mayo en Latinoamérica y el viernes 23 de mayo en Estados Unidos y Canadá." +
            "El live-action de 'Lilo y Stitch' obtuvo 56/100 en Metacritic, reflejando críticas mixtas de la prensa especializada."
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
                            src="/img/entretenimientonum5.png"
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
