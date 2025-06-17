import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const ContactoPage = () => {
    const [texto, setTexto] = useState('');

    const handleEnviar = () => {
        alert("Mensaje enviado: " + texto);
        setTexto(""); // Limpia el mensaje
    };

    return (
        <>
            <Navbar />

            <div className="px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Contáctanos
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Si deseas comunicarte con nosotros para cualquier consulta o comentario, puedes completar el siguiente formulario.
                    </p>
                </div>

                <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm leading-6 font-semibold text-gray-900">
                                Mensaje
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    value={texto}
                                    onChange={(e) => setTexto(e.target.value)}
                                    placeholder="Escribe tu mensaje aquí..."
                                    rows="6"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            onClick={handleEnviar}
                            disabled={!texto.trim()}
                            className={`flex-1 rounded-md px-4 py-2.5 text-xl font-semibold shadow-sm ${texto.trim()
                                ? "bg-green-600 text-white hover:bg-green-500"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            Enviar mensaje
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-full mt-10">
                <img src="img/upn.png" alt="" className="w-full object-cover" />
            </div>
            <Footer />
        </>
    );
};
