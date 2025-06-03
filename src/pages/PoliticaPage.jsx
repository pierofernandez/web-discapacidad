import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Paginator } from "../components/Paginator";

export const PoliticaPage = () => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                event.preventDefault();
                const mensaje = new SpeechSynthesisUtterance(
                    "Actualmente te encuentras en la sección arte."
                );
                mensaje.lang = "es-ES";
                window.speechSynthesis.speak(mensaje);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);


    return (

        <div className="w-full">
            <Navbar />
            {/* Columna Derecha */}

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Política</h1>
            <hr className="max-w-7xl mx-auto border-t-2 border-red-500 my-4" />

            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">

                <div className="px-4">
                    {[
                        {
                            title: "Titular del Minem propone que el Ejecutivo sea \"garante del diálogo\" entre concesionarios y mineros informales",
                            autor: "Luis Felipe Rodriguez Jimenez - 24 Mayo 2025",
                            descripcion: "El ministro Jorge Montero propuso que el Gobierno facilite el diálogo para que pequeños mineros informales logren contratos de explotación con concesionarios.",
                            img: "img/politicanum1.png",
                        },
                        {
                            title: "Israel bombardeó la casa de una pediatra en Gaza y mató a nueve de sus hijos",
                            autor: "Agencia EFE - 24 Mayo 2025",
                            descripcion: "Dos menores siguen entre escombros, mientras siete fueron rescatados y trasladados al Hospital Nasser junto a familiares gravemente heridos.",
                            img: "img/politicanum2.png",
                        },
                        {
                            title: "Daniel Noboa juró como presidente de Ecuador para un segundo mandato",
                            autor: "Wendy Milla Loo - 24 Mayo 2025",
                            descripcion: "La presidenta Dina Boluarte viajó hasta Quito y estuvo presente en la toma de mando para un segundo periodo de su homólogo ecuatoriano.",
                            img: "img/politicanum3.png",
                        },
                        {
                            title: "Ucrania y Rusia realizan nuevo intercambio de prisioneros en medio de intensos ataques en Kiev",
                            autor: "France 24 - 24 Mayo 2024",
                            descripcion: "Mientras se prepara un intercambio de prisioneros masivo, Ucrania denunció un ataque ruso prolongado que causó incendios y daños en varios barrios de Kiev.",
                            img: "img/politicanum4.png",
                        },
                        {
                            title: "La ONU confía en la justicia para hacer frente a las amenazas de Trump contra Harvard",
                            autor: "Agencia EFE - 24 Mayo 2025",
                            descripcion: "El portavoz adjunto de la ONU destacó la importancia de proteger la libertad de pensamiento y expresión en las universidades.",
                            img: "img/politicanum5.png",
                        },
                        {
                            title: "Rusia informó que atacó con misiles un portacontenedores en el puerto ucraniano de Odesa",
                            autor: "Agencia EFE - 24 Mayo 2025",
                            descripcion: "Según un comunicado del Ministerio de Defensa de Rusia en Telegram, a bordo del buque había cientos de contenedores con material militar, como drones y materiales de munición.",
                            img: "img/politicanum6.png",
                        },
                    ].map((item, idx) => (
                        <div className="flex space-x-4 py-4" key={idx}>
                            <img
                                src={item.img}
                                alt="Article"
                                className="w-80 h-44 object-cover rounded"
                            />
                            <div>
                                <p className="text-xl text-gray-500 py-1">{item.autor}</p>
                                <p className="text-3xl font-medium text-gray-800 py-1">{item.title}</p>
                                <p className="text-lg text-gray-600 py-1">{item.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Paginator />
            <div className="w-full mt-10">
                <img src="img/upn.png" alt="" className="w-full object-cover" />
            </div>
            <Footer />

        </div>

    )
};