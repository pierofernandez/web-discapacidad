import { useEffect } from "react";
import { FaClock, FaSearch } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";

export const Navbar = () => {

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key.toLowerCase() === 'f') {
                window.location.href = '/arte';
            } else if (event.key.toLowerCase() === 'j') {
                window.location.href = '/deporte';
            } else if (event.key.toLowerCase() === 'g') {
                window.location.href = '/politica';
            }
            else if (event.key.toLowerCase() === 'h') {
                window.location.href = '/entretenimiento';
            }

        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">

                {/* Izquierda: Clima y fecha */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1 text-gray-700">
                        <WiDaySunny className="text-xl" />
                        <span>15°</span>
                        <span>Perú</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-700">
                        <FaClock className="text-sm" />
                        <span>Martes, 27 Mayo 2025</span>
                    </div>
                </div>

                {/* Derecha: Breaking News */}
                <div className="flex items-center">
                    <span className="bg-red-500 text-white font-semibold px-2 py-1 rounded-sm mr-2">
                        Último Minuto
                    </span>
                    <span className="text-gray-700 truncate max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl">
                        Nuevo Aeropuerto Jorge Chávez opera con pista incompleta
                    </span>
                </div>
            </div>
            {/* Logo */}
            <div className="bg-amber-400">
                <a href="/">
                    <img className="h-28 ml-4" src="/img/upnlogo.png" alt="Logo de UPN" />
                </a>
            </div>
            <nav className="bg-stone-900 shadow-lg">
                <div className="md:flex items-center justify-between py-2 px-8 md:px-12">

                    {/* Menú de navegación */}
                    <div className="hidden md:flex md:flex-row">
                        <a href="/" className="text-white hover:bg-red-500 hover:text-gray-100 hover:font-medium py-2 px-4 md:mx-2">Home</a>
                        <a href="/arte" className="text-white hover:bg-red-500 hover:text-gray-100 hover:font-medium py-2 px-4 md:mx-2">Arte y Cultura</a>
                        <a href="/deporte" className="text-white hover:bg-red-500 hover:text-gray-100 hover:font-medium py-2 px-4 md:mx-2">Deporte</a>
                        <a href="/politica" className="text-white hover:bg-red-500 hover:text-gray-100 hover:font-medium py-2 px-4 md:mx-2">Política</a>
                        <a href="/entretenimiento" className="text-white hover:bg-red-500 hover:text-gray-100 hover:font-medium py-2 px-4 md:mx-2">Entretenimiento</a>
                        <a href="/contacto" className="text-white hover:bg-red-500 hover:text-gray-100 hover:font-medium py-2 px-4 md:mx-2">Contacto</a>
                    </div>


                    {/* Buscador */}
                    <div className="relative flex mt-2 md:mt-0">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="pl-10 pr-4 py-2 bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-stone-700"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
            </nav>
        </div>
    )
};