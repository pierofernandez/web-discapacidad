import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Paginator } from "../components/Paginator";

export const EntretenimientoPage = () => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                event.preventDefault();
                const mensaje = new SpeechSynthesisUtterance(
                    "Actualmente te encuentras en la sección noticias en el mundo."
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

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Entretenimiento</h1>
            <hr className="max-w-7xl mx-auto border-t-2 border-red-500 my-4" />

            {/* Columna Derecha */}
            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">

                <div className="px-4">
                    {[
                        {
                            title: "¿Messi o Ronaldo? Gianni Infantino da una respuesta diplomática a Speed sobre su jugador favorito",
                            autor: "Renzo Alvarez - 24 Mayo 2025",
                            descripcion: "Otro de los mejores momentos de la transmisión fue cuando Gianni Infantino declaró que Cristiano Ronaldo podría formar parte del próximo Mundial de Clubes.",
                            img: "img/entretenimientonum1.png",
                        },
                        {
                            title: "Britney Spears protagonizó incidente en avión: encendió un cigarro y bebió alcohol en pleno vuelo",
                            autor: "Brenda García Retamal - 24 Mayo 2025",
                            descripcion: "La artista, que viajaba en un jet privado, fue reprendida por la tripulación. El episodio se suma a otros antecedentes de conducta imprudente en aviones.",
                            img: "img/entretenimientonum2.png",
                        },
                        {
                            title: "Tom Cruise responde incómoda pregunta tras la decisión de su hija Suri de no llevar su apellido",
                            autor: "Renzo Alvarez - 21 Mayo 2025",
                            descripcion: "Suri, la hija menor del actor Tom Cruise, decidió prescindir del apellido de su padre en 2024 durante su ceremonia de graduación que celebró en Nueva York y a la que el artista no asistió.",
                            img: "img/entretenimientonum3.png",
                        },
                        {
                            title: "Pamela López expone a Christian Cueva con chats íntimos tras el anuncio de su separación: \"Había caído muy bajo\"",
                            autor: "Renzo Alvarez - 23 Mayo 2025",
                            descripcion: "Una conversación del 2 de julio de 2024 revela que, pese al comunicado de Cueva sobre el fin de su matrimonio, él y López habrían tenido relaciones íntimas dos días antes, Contradice su versión.",
                            img: "img/entretenimientonum4.png",
                        },
                        {
                            title: "'Lilo y Stitch': el live-action más humano (y entrañable) que ha hecho Disney en años [RESEÑA]",
                            autor: "Renzo Napa - 23 Mayo 2025",
                            descripcion: "Más de dos décadas de la película animada original, la versión live-action de Lilo y Stitch llega a los cines con una historia que, aunque actualizada, conserva el corazón de siempre.",
                            img: "img/entretenimientonum5.png",
                        },
                        {
                            title: "'El juego del calamar 3' mostrará \"lo más bajo del ser humano\", adelanta el director Hwang Dong-hyuk",
                            autor: "Harold Quispe - 24 Mayo 2025",
                            descripcion: "\"La serie está llegando a su clímax\", sostuvo Hwang Dong-hyuk sobre la tercera temporada de 'El juego del calamar' que llegará a Netflix el próximo 27 de junio.",
                            img: "img/entretenimientonum6.png",
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