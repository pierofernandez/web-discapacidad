import { FiLogOut } from "react-icons/fi";

export const HomePageDV = () => {
    return (
        <div className="min-h-screen bg-[url('/img/discapacidad/fondoupn.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-6 space-y-6">
            {/* Grid para logo centrado y botón abandonar a la derecha */}
            <div className="w-full max-w-6xl grid grid-cols-3 items-center">
                <div></div> {/* Columna vacía */}
                <div className="flex justify-center">
                    <img src="img/discapacidad/logoblanco.png" alt="logoupn" className="h-30" />
                </div>
                <div className="flex justify-end pr-4">
                    <a
                        href="/"
                        className="text-white text-lg flex items-center gap-2 hover:text-red-400 transition"
                    >
                        <FiLogOut className="text-2xl" />
                        Abandonar
                    </a>
                </div>
            </div>
            {/* Fila 1 */}
            <div className="flex flex-row flex-wrap gap-6 w-full max-w-6xl justify-center">
                <a href="/artedv" className="relative w-[35%] h-52 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="/img/discapacidad/arte.png"
                        alt="Imagen 1"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-4 left-4 text-white text-base font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                        Arte y Cultura
                    </span>
                </a>

                <a href="/deportedv" className="relative w-[35%] h-52 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="/img/discapacidad/deporte.png"
                        alt="Imagen 2"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-4 left-4 text-white text-base font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                        Deporte
                    </span>
                </a>
            </div>

            {/* Fila 2 */}
            <div className="flex flex-row flex-wrap gap-6 w-full max-w-6xl justify-center">
                <a href="/politicadv" className="relative w-[35%] h-52 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="/img/discapacidad/politica.png"
                        alt="Imagen 3"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-4 left-4 text-white text-base font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                        Política
                    </span>
                </a>

                <a href="/entretenimientodv" className="relative w-[35%] h-52 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="/img/discapacidad/entretenimiento.png"
                        alt="Imagen 4"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-4 left-4 text-white text-base font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                        Entretenimiento
                    </span>
                </a>
            </div>

            {/* Fila 3 (una imagen centrada) */}
            <div className="flex justify-center w-full">
                <a href="/contactodv" className="relative w-[22%] h-52 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="/img/discapacidad/contacto.png"
                        alt="Imagen 5"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-4 left-4 text-white text-base font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                        Contacto
                    </span>
                </a>
            </div>
        </div>
    );
};
