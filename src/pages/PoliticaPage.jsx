import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

export const PoliticaPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const articles = [
        {
            title: "Penn’s Expanding Political Climate Gears Up Fo 2020 Election",
            autor: "Craig Bator - 27 Dec 2022",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore magna aliqua.",
            img: "img/universitario.png",
        },
        {
            title: "Things To Look For In A Financial Trading Platform",
            autor: "Craig Bator - 27 Dec 2025",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore magna aliqua.",
            img: "img/dina.png",
        },
        {
            title: "The Only Thing That Overcomes Hard Luck Is Hard Work",
            autor: "Craig Bator - 27 Dec 2025",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore magna aliqua.",
            img: "img/papa.png",
        },
        {
            title: "Success Is Not A Good Teacher Failure Makes You Humble",
            autor: "Craig Bator - 27 Dec 2023",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore magna aliqua.",
            img: "img/putin.png",
        },
        {
            title: "At Value-Focused Hotels, The Free Breakfast Gets Bigger",
            autor: "Craig Bator - 27 Dec 2025",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore magna aliqua.",
            img: "img/saludmental.png",
        },
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            const code = event.code;
            if (code === "Space") {
                event.preventDefault();
                const mensaje = new SpeechSynthesisUtterance(
                    "Actualmente te encuentras en la sección política."
                );
                mensaje.lang = "es-ES";
                window.speechSynthesis.speak(mensaje);
            } else if (["KeyF", "KeyG"].includes(code)) {
                event.preventDefault();
                setSelectedIndex(prev => {
                    const newIndex = Math.max(0, prev - 1);
                    leerArticulo(newIndex);
                    return newIndex;
                });
            } else if (["KeyH", "KeyJ"].includes(code)) {
                event.preventDefault();
                setSelectedIndex(prev => {
                    const newIndex = Math.min(articles.length - 1, prev + 1);
                    leerArticulo(newIndex);
                    return newIndex;
                });
            }
        };

        const leerArticulo = (index) => {
            const articulo = articles[index];
            const mensaje = new SpeechSynthesisUtterance(
                `Artículo número ${index + 1}. Título: ${articulo.title}. Autor: ${articulo.autor}. Descripción: ${articulo.descripcion}`
            );
            mensaje.lang = "es-ES";
            window.speechSynthesis.cancel(); // Detiene cualquier lectura anterior
            window.speechSynthesis.speak(mensaje);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="w-full">
            <Navbar />
            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">
                <div className="px-4">
                    {articles.map((item, idx) => (
                        <div
                            className={`flex space-x-4 py-4 rounded ${idx === selectedIndex ? 'bg-yellow-100 border-l-4 border-yellow-500' : ''}`}
                            key={idx}
                        >
                            <img
                                src={item.img}
                                alt="Article"
                                className="w-60 h-44 object-cover rounded"
                            />
                            <div>
                                <p className="text-2xl text-gray-500">{item.autor}</p>
                                <p className="font-medium text-gray-800">{item.title}</p>
                                <p className="text-gray-600">{item.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
