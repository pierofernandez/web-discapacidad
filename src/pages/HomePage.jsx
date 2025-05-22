import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";


export const HomePage = () => {
    // Función para manejar el evento de teclado
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                event.preventDefault();
                const mensaje = new SpeechSynthesisUtterance(
                    "Bienvenido. Utilice la tecla F para ver todo relacionado al arte, la tecla j para ver deporte y la tecla control para ver politica."
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

            <div className="relative w-full">
                {/* Fondo en la mitad superior */}
                <div className="absolute w-full h-5/6">
                    <div className="w-full h-full bg-[url('/img/fondo.png')] bg-cover bg-center bg-no-repeat"></div>
                </div>

                {/* Contenido encima del fondo */}
                <div className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-5 px-4 py-6 grid-rows-auto md:grid-rows-1 gap-4 w-full p-2 max-w-7xl mx-auto">
                        {/* Imagen principal */}
                        <div className="md:row-span-3 md:col-span-3 shadow-xs overflow-hidden h-28 md:h-auto relative">
                            <img
                                src="img/cristalu.png"
                                alt="Noticia principal"
                                className="w-full h-auto object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                                Deporte
                            </span>
                        </div>

                        {/* Imagen derecha superior 1 */}
                        <div className="md:row-span-1 md:col-start-4 shadow-xs overflow-hidden h-24 md:h-auto relative">
                            <img
                                src="img/noticiadeportiva.jpg"
                                alt="Noticia deportiva"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                                Deporte
                            </span>
                        </div>

                        {/* Imagen derecha superior 2 */}
                        <div className="md:row-span-1 md:col-start-5 shadow-xs overflow-hidden h-24 md:h-auto relative">
                            <img
                                src="img/noticiapolitica.jpg"
                                alt="Noticia política"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                Política
                            </span>
                        </div>

                        {/* Imagen inferior derecha */}
                        <div className="md:row-span-1 md:row-start-3 md:col-span-2 md:col-start-4 shadow-xs overflow-hidden h-24 md:h-auto relative">
                            <img
                                src="img/noticia5.jpg"
                                alt="Noticia destacada"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                                Entretenimiento
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5">Ultimas noticias</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />

            {/* segundo contenido*/}
            <div className="container mx-auto grid px-4 py-6 grid-cols-1 md:grid-cols-3 max-w-7xl gap-6">

                {/* Columna Izquierda */}
                <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                        <img
                            src="img/speed.png"
                            alt="Main Article"
                            className="rounded w-full h-auto object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                            Ultimas noticias
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">
                            Craig Bator - 27 Dec 2020
                        </p>
                        <h2 className="text-2xl font-bold mt-1 mb-2">
                            Now Is the Time to Think About Your Small Business Success
                        </h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
                            lobortis augue condimentum...
                        </p>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="space-y-4">
                    {[
                        {
                            title: "Penn’s Expanding Political Climate Gears Up Fo 2020 Election",
                            autor: "Craig Bator - 27 Dec 2022",
                            img: "img/universitario.png",
                        },
                        {
                            title: "Things To Look For In A Financial Trading Platform",
                            autor: "Craig Bator - 27 Dec 2025",
                            img: "img/dina.png",
                        },
                        {
                            title: "The Only Thing That Overcomes Hard Luck Is Hard Work",
                            autor: "Craig Bator - 27 Dec 2025",
                            img: "img/papa.png",
                        },
                        {
                            title: "Success Is Not A Good Teacher Failure Makes You Humble",
                            autor: "Craig Bator - 27 Dec 2023",
                            img: "img/putin.png",
                        },
                        {
                            title: "At Value-Focused Hotels, The Free Breakfast Gets Bigger",
                            autor: "Craig Bator - 27 Dec 2025",
                            img: "img/saludmental.png",
                        },
                    ].map((item, idx) => (
                        <div className="flex space-x-4" key={idx}>
                            <img
                                src={item.img}
                                alt="Article"
                                className="w-20 h-16 object-cover rounded"
                            />
                            <div>
                                <p className="text-sm text-gray-500">{item.autor}</p>
                                <p className="font-medium text-gray-800">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Separador */}
            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5">Entretenimiento</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />

            {/* tercer contenido*/}
            <div className="relative w-full px-4 py-6 max-w-7xl mx-auto">
                <img src="img/badbunny.png" alt="Banner" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 flex items-center">
                    <div className="px-8 max-w-2xl">
                        <span className="text-white bg-blue-600 px-3 py-1 text-sm font-semibold rounded">Hollywood</span>
                        <h1 className="text-white text-3xl font-bold mt-4">
                            Amanda Seyfried became ‘really obsessed’ with ghost stories
                        </h1>
                        <div className="w-20 h-0.5 bg-red-400 mt-4 mb-2"></div>
                        <p className="text-gray-200">
                            Hollywood actress Amanda Seyfried has recalled the time when she became obsessed with ghost stories
                        </p>
                    </div>
                </div>
            </div>

            {/* Cuarto contenido */}
            <div className="grid grid-cols-3 px-4 py-6 gap-6 mt-8 max-w-7xl mx-auto">
                {/* Tarjeta 1 */}
                <div className="flex gap-4">
                    <img src="img/juegodelcalamar.png" alt="Thumb 1" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded">Hollywood</span>
                        <p className="text-xs text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                        <h2 className="font-bold text-sm mt-1">Amanda Seyfried became ‘really obsessed’ with ghost stories</h2>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="flex gap-4">
                    <img src="img/you.png" alt="Thumb 2" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-cyan-400 text-white px-2 py-0.5 text-xs rounded">Bollywood</span>
                        <p className="text-xs text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                        <h2 className="font-bold text-sm mt-1">Irrfan Khan’s Last film “The Song of Scorpions” to release in 2021</h2>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="flex gap-4">
                    <img src="img/minecraft.png" alt="Thumb 3" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-green-500 text-white px-2 py-0.5 text-xs rounded">Entertainment</span>
                        <p className="text-xs text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                        <h2 className="font-bold text-sm mt-1">Apee Karim blessed with a daughter</h2>
                    </div>
                </div>
            </div>

            {/* Separador */}

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5">Deportes</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />

            {/* Quinto contenido */}
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-6">

                {/* Columna Izquierda */}
                <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                        <img
                            src="img/caute.png"
                            alt="Main Article"
                            className="rounded w-full h-auto object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                            Deporte
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">
                            Craig Bator - 27 Dec 2020
                        </p>
                        <h2 className="text-2xl font-bold mt-1 mb-2">
                            Now Is the Time to Think About Your Small Business Success
                        </h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
                            lobortis augue condimentum...
                        </p>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="space-y-4">
                    {[
                        {
                            title: "Penn’s Expanding Political Climate Gears Up Fo 2020 Election",
                            autor: "Craig Bator - 27 Dec 2022",
                            img: "img/psg.png",
                        },
                        {
                            title: "Things To Look For In A Financial Trading Platform",
                            autor: "Craig Bator - 27 Dec 2025",
                            img: "img/ufc.png",
                        },
                        {
                            title: "The Only Thing That Overcomes Hard Luck Is Hard Work",
                            autor: "Craig Bator - 27 Dec 2025",
                            img: "img/barcelona.png",
                        },
                        {
                            title: "Success Is Not A Good Teacher Failure Makes You Humble",
                            autor: "Craig Bator - 27 Dec 2023",
                            img: "img/tennis.png",
                        },
                        {
                            title: "At Value-Focused Hotels, The Free Breakfast Gets Bigger",
                            autor: "Craig Bator - 27 Dec 2025",
                            img: "img/voley.png",
                        },
                    ].map((item, idx) => (
                        <div className="flex space-x-4" key={idx}>
                            <img
                                src={item.img}
                                alt="Article"
                                className="w-20 h-16 object-cover rounded"
                            />
                            <div>
                                <p className="text-sm text-gray-500">{item.autor}</p>
                                <p className="font-medium text-gray-800">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Separador */}

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5">Estilo de vida</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />


            {/*sexto contenido*/}

            <div className="container mx-auto px-4 py-6 grid grid-cols-4 md:grid-cols-4 max-w-7xl gap-6">

                {/* Columna Izquierda */}
                <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                        <img
                            src="img/acervi.png"
                            alt="Main Article"
                            className="rounded w-full h-auto object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                            Deporte
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">
                            Craig Bator - 27 Dec 2020
                        </p>
                        <h2 className="text-2xl font-bold mt-1 mb-2">
                            Now Is the Time to Think About Your Small Business Success
                        </h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
                            lobortis augue condimentum...
                        </p>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                        <img
                            src="img/abuelo.png"
                            alt="Main Article"
                            className="rounded w-full h-auto object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                            Deporte
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">
                            Craig Bator - 27 Dec 2020
                        </p>
                        <h2 className="text-2xl font-bold mt-1 mb-2">
                            Now Is the Time to Think About Your Small Business Success
                        </h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
                            lobortis augue condimentum...
                        </p>
                    </div>
                </div>
            </div>


            {/* septimo contenido */}

            <div className="grid grid-cols-4 px-4 py-6 gap-6 mt-8 max-w-7xl mx-auto">
                {/* Tarjeta 1 */}
                <div className="flex gap-4 col-span-2">
                    <img src="img/salud1.png" alt="Thumb 1" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded">Hollywood</span>
                        <p className="text-xs text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                        <h2 className="font-bold text-sm mt-1">Amanda Seyfried became ‘really obsessed’ with ghost stories</h2>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="flex gap-4 col-span-2">
                    <img src="img/salud2.png" alt="Thumb 2" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-cyan-400 text-white px-2 py-0.5 text-xs rounded">Bollywood</span>
                        <p className="text-xs text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                        <h2 className="font-bold text-sm mt-1">Irrfan Khan’s Last film “The Song of Scorpions” to release in 2021</h2>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="flex gap-4 col-span-2">
                    <img src="img/salud3.png" alt="Thumb 3" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-green-500 text-white px-2 py-0.5 text-xs rounded">Entertainment</span>
                        <p className="text-xs text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                        <h2 className="font-bold text-sm mt-1">Apee Karim blessed with a daughter</h2>
                    </div>
                </div>

                {/* Tarjeta 4 */}
                <div className="flex gap-4 col-span-2">
                    <img src="img/salud4.png" alt="Thumb 3" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-green-500 text-white px-2 py-0.5 text-xs rounded">Entertainment</span>
                        <p className="text-xs text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                        <h2 className="font-bold text-sm mt-1">Apee Karim blessed with a daughter</h2>
                    </div>
                </div>
            </div>

            {/* Separador */}

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5">Video</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />

            {/* octavo contenido */}

            <section className="max-w-7xl px-4 py-6  mx-auto">
                {/* Banner Principal */}
                <div className="relative w-full h-[400px] mb-8">
                    <video
                        src="img/eafc.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 w-max mb-2">Esport</span>
                        <p className="text-sm text-gray-300">Craig Bator - 27 Dec 2020</p>
                        <h2 className="text-white text-2xl font-bold leading-tight mt-1">
                            Play This Game for Free on Epic Store This Weekend
                        </h2>

                    </div>
                </div>

                {/* Noticias Inferiores */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tarjeta 1 */}
                    <div className="relative">
                        <video src="img/video2.mp4" autoPlay
                            muted alt="Noticia 1" className="w-full h-48 object-cover " />

                        <div className="mt-3">
                            <span className="bg-emerald-500 text-white text-xs px-2 py-1 ">Esport</span>
                            <p className="text-sm text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                            <h3 className="text-base font-semibold mt-1">At Value-Focused Hotels, the Free Breakfast Gets Bigger</h3>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="relative">
                        <video autoPlay
                            muted src="img/video3.mp4" alt="Noticia 2" className="w-full h-48 object-cover " />

                        <div className="mt-3">
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 ">Esport</span>
                            <p className="text-sm text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                            <h3 className="text-base font-semibold mt-1">Failure is the condiment that gives success its flavor</h3>
                        </div>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="relative">
                        <video autoPlay
                            muted src="img/video4.mp4" alt="Noticia 3" className="w-full h-48 object-cover " />

                        <div className="mt-3">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 ">Esport</span>
                            <p className="text-sm text-gray-500 mt-1">Craig Bator – 27 Dec 2020</p>
                            <h3 className="text-base font-semibold mt-1">Les nouveaux maillots du Real Madrid pour la saison</h3>
                        </div>
                    </div>
                </div>
            </section>


            <div className="w-full mt-10">
                <img src="img/upn.png" alt="" className="w-full object-cover" />
            </div>



            <Footer />
        </div>
    );
}