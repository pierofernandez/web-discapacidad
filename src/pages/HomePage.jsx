import { Link } from "react-router-dom";
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

            {/* Contenido principal */}

            <div className="relative w-full">
                {/* Fondo en la mitad superior */}
                <div className="absolute w-full h-5/6">
                    <div className="w-full h-full bg-[url('/img/fondo.png')] bg-cover bg-center bg-no-repeat"></div>
                </div>

                {/* Contenido encima del fondo */}
                <div className="relative z-10">

                    <div className="grid grid-cols-1 md:grid-cols-5 px-4 py-6 gap-4 w-full p-2 max-w-7xl mx-auto">

                        {/* Noticia principal - Política */}
                        <Link href="/politica/noticia6politica" className="md:row-span-3 md:col-span-3 shadow-xs overflow-hidden h-72 md:h-auto relative group block">
                            <img
                                src="/img/papamain.png"
                                alt="Noticia principal"
                                className="w-full h-auto object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                                Política
                            </span>
                            <div className="absolute inset-0 flex items-end">
                                <div className="px-8 pb-6 max-w-lg">
                                    <h1 className="text-white text-2xl font-bold">
                                        León XIV recordó su labor misionera en Perú durante audiencia ante la curia: “El pueblo peruano maduró mi vocación pastoral”
                                    </h1>
                                    <div className="w-20 h-0.5 bg-red-400 mt-4 mb-2"></div>
                                    <p className="text-gray-200">
                                        Otro de los mejores momentos de la transmisión fue cuando Gianni Infantino declaró que Cristiano Ronaldo podría formar parte del próximo Mundial de Clubes.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Noticia secundaria - Hollywood */}
                        <Link href="/hollywood/noticia2hollywood" className="md:row-span-1 md:col-start-4 shadow-xs overflow-hidden h-24 md:h-auto relative hidden md:block">
                            <img
                                src="/img/freddymain.png"
                                alt="Noticia deportiva"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                Hollywood
                            </span>
                            <div className="absolute inset-0 flex items-end">
                                <div className="px-8 pb-6 max-w-lg">
                                    <h1 className="text-white text-base font-bold">
                                        Una biografía afirma que Freddie Mercury tuvo una hija.
                                    </h1>
                                    <div className="w-20 h-0.5 bg-red-400 mt-4 mb-2"></div>
                                    <p className="text-gray-200 text-sm">
                                        Freddie Mercury murió en 1991 por una neumonía derivada del VIH.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Noticia secundaria - Deportes */}
                        <Link href="/deportes/noticia3deportes" className="md:row-span-1 md:col-start-5 shadow-xs overflow-hidden h-24 md:h-auto relative hidden md:block">
                            <img
                                src="/img/lukamain.png"
                                alt="Noticia política"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                                Deportes
                            </span>
                            <div className="absolute inset-0 flex items-end">
                                <div className="px-8 pb-6 max-w-lg">
                                    <h1 className="text-white text-base font-bold">
                                        Quiero decir una frase que he visto y me gustó...
                                    </h1>
                                    <div className="w-20 h-0.5 bg-red-400 mt-4 mb-2"></div>
                                    <p className="text-gray-200 text-sm">
                                        El croata se despidió del Real Madrid...
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Noticia inferior derecha - Deportes */}
                        <Link href="/deportes/noticia4deportes" className="hidden md:block md:row-span-1 md:row-start-3 md:col-span-2 md:col-start-4 shadow-xs overflow-hidden h-24 md:h-auto relative">
                            <img
                                src="/img/anchelottimain.png"
                                alt="Noticia destacada"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                                Deportes
                            </span>
                            <div className="absolute inset-0 flex items-end">
                                <div className="px-8 pb-6 max-w-lg">
                                    <h1 className="text-white text-base font-bold">
                                        Hasta las lágrimas: así fue la emotiva despedida...
                                    </h1>
                                    <div className="w-20 h-0.5 bg-red-400 mt-4 mb-2"></div>
                                    <p className="text-gray-200 text-sm">
                                        "Nuestra historia es inolvidable", dijo un emocionado...
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>


                    {/* Contenedor solo para mobile */}
                    <div className="flex gap-4 md:hidden px-4 -mt-2">
                        <div className="flex-1 shadow-xs overflow-hidden h-52 relative">
                            <img
                                src="img/freddymain.png"
                                alt="Noticia deportiva"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                                Deporte
                            </span>
                        </div>
                        <div className="flex-1 shadow-xs overflow-hidden h-52 relative">
                            <img
                                src="img/anchelottimain.png"
                                alt="Noticia política"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                Política
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Separador */}

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5 px-4">Política</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />

            {/* Quinto contenido */}
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-6">

                {/* Columna Izquierda */}
                <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                        <img
                            src="img/politicamain.png"
                            alt="Main Article"
                            className="rounded w-full h-auto object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-violet-600 text-white text-xs px-2 py-1 rounded">
                            Política
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">
                            Renzo Castillo Lazo - 24 Mayo 2025
                        </p>
                        <h2 className="text-2xl font-bold mt-1 mb-2">
                            En Argentina dan detalles del posible fichaje de Christian Cueva al elenco ecuatoriano de Emelec.
                        </h2>
                        <p className="text-gray-600">
                            Tras pasar por el fútbol del extranjero, en el 2024 el volante peruano Christian Cueva regresó al Perú para ponerse la camiseta de Cienciano en la Liga1 Te Apuesto.
                        </p>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="space-y-4">
                    {[
                        {
                            title: "¿Diego Enríquez deja Sporting Cristal?, club de la liga MX lo tiene en la mira.",
                            autor: "Jean Dueñas - 24 Mayo 2025",
                            img: "img/politicasec1.png",
                        },
                        {
                            title: "Siete equipos en la pelea: ¿qué les queda por jugar a los clubes en el cierre del Torneo Apertura 2025?",
                            autor: "Diego Figueroa Loayza - 24 Mayo 2025",
                            img: "img/politicasec2.png",
                        },
                        {
                            title: "Ruidíaz con estilo: con un penal 'a lo Panenka', abrió el marcador para Sullana.",
                            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
                            img: "img/politicasec3.png",
                        },
                        {
                            title: "¿Será en el Monumental? Conmebol inspeccionó el estadio de la 'U'.",
                            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
                            img: "img/politicasec4.png",
                        },
                        {
                            title: "Selección Peruana de Vóley: ¿en qué torneos competirá el equipo femenino en la temporada 2025?",
                            autor: "Diego Figueroa Loayza - 24 Mayo 2025",
                            img: "img/politicasec5.png",
                        },
                    ].map((item, idx) => (
                        <div className="flex space-x-4" key={idx}>
                            <img
                                src={item.img}
                                alt="Article"
                                className="w-24 h-24 object-cover rounded"
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
            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5 px-4">Entretenimiento</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />

            {/* tercer contenido*/}
            <div className="relative w-full px-4 pt-6 max-w-7xl mx-auto">
                <img src="img/entretenimientomain.png" alt="Banner" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 flex items-center">
                    <div className="px-8 max-w-2xl">
                        <span className="text-white bg-blue-600 px-3 py-1 text-sm font-semibold rounded">Hollywood</span>
                        <h1 className="text-white text-3xl font-bold mt-4">
                            ¿Messi o Ronaldo? Gianni Infantino da una respuesta diplomática a Speed sobre su jugador favorito
                        </h1>
                        <div className="w-20 h-0.5 bg-red-400 mt-4 mb-2"></div>
                        <p className="text-gray-200">
                            Otro de los mejores momentos de la transmisión fue cuando Gianni Infantino declaró que Cristiano Ronaldo podría formar parte del próximo Mundial de Clubes.                        </p>
                    </div>
                </div>
            </div>

            {/* Cuarto contenido */}
            <div className="grid grid-cols-3 px-4 pb-6 gap-6 mt-8 max-w-7xl mx-auto">
                {/* Tarjeta 1 */}
                <div className="flex gap-4">
                    <img src="img/entretenimientosecundary.png" alt="Thumb 1" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded">Hollywood</span>
                        <p className="text-xs text-gray-500 mt-1">Brenda García Retamal - 24 Mayo 2024</p>
                        <h2 className="font-bold text-sm mt-1">"Esta no es su primera advertencia"</h2>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="flex gap-4">
                    <img src="img/entretenimientosecundary1.png" alt="Thumb 2" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded">Hollywood</span>
                        <p className="text-xs text-gray-500 mt-1">Renzo Alvarez - 21 Mayo 2025</p>
                        <h2 className="font-bold text-sm mt-1">Tom Cruise responde incómoda pregunta tras la decisión de su hija Suri de no llevar su apellido</h2>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="flex gap-4">
                    <img src="img/entretenimientosecundary2.png" alt="Thumb 3" className="w-24 h-24 object-cover rounded" />
                    <div>
                        <span className="bg-amber-500 text-white px-2 py-0.5 text-xs rounded">Farándula</span>
                        <p className="text-xs text-gray-500 mt-1">Renzo Alvarez - 23 Mayo 2025</p>
                        <h2 className="font-bold text-sm mt-1">Pamela López expone a Christian Cueva con chats íntimos: "Había caído muy bajo"</h2>
                    </div>
                </div>
            </div>

            {/* Separador */}

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5 px-4">Deportes</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />

            {/* Quinto contenido */}
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-6">

                {/* Columna Izquierda */}
                <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                        <img
                            src="img/deportemain.png"
                            alt="Main Article"
                            className="rounded w-full h-auto object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-green-400 text-white text-xs px-2 py-1 rounded">
                            Deporte
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">
                            Renzo Castillo Lazo - 24 Mayo 2025
                        </p>
                        <h2 className="text-2xl font-bold mt-1 mb-2">
                            En Argentina dan detalles del posible fichaje de Christian Cueva al elenco ecuatoriano de Emelec.
                        </h2>
                        <p className="text-gray-600">
                            Tras pasar por el fútbol del extranjero, en el 2024 el volante peruano Christian Cueva regresó al Perú para ponerse la camiseta de Cienciano en la Liga1 Te Apuesto.
                        </p>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="space-y-4">
                    {[
                        {
                            title: "¿Diego Enríquez deja Sporting Cristal?, club de la liga MX lo tiene en la mira.",
                            autor: "Jean Dueñas - 24 Mayo 2025",
                            img: "img/deportesec.png",
                        },
                        {
                            title: "Siete equipos en la pelea: ¿qué les queda por jugar a los clubes en el cierre del Torneo Apertura 2025?",
                            autor: "Diego Figueroa Loayza - 24 Mayo 2025",
                            img: "img/deportesec1.png",
                        },
                        {
                            title: "Ruidíaz con estilo: con un penal 'a lo Panenka', abrió el marcador para Sullana.",
                            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
                            img: "img/deportesec2.png",
                        },
                        {
                            title: "¿Será en el Monumental? Conmebol inspeccionó el estadio de la 'U'.",
                            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
                            img: "img/deportesec3.png",
                        },
                        {
                            title: "Selección Peruana de Vóley: ¿en qué torneos competirá el equipo femenino en la temporada 2025?",
                            autor: "Diego Figueroa Loayza - 24 Mayo 2025",
                            img: "img/deportesec4.png",
                        },
                    ].map((item, idx) => (
                        <div className="flex space-x-4" key={idx}>
                            <img
                                src={item.img}
                                alt="Article"
                                className="w-24 h-24 object-cover rounded"
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

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5 px-4">Arte y Cultura</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />


            {/*sexto contenido*/}

            <div className="container mx-auto px-4 py-6 grid grid-cols-4 md:grid-cols-4 max-w-7xl gap-6">

                {/* Columna Izquierda */}
                <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                        <img
                            src="img/artemain.png"
                            alt="Main Article"
                            className="rounded w-full h-auto object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-yellow-700 text-white text-xs px-2 py-1 rounded">
                            Arte y Cultura
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">
                            Brenda García Retamal - 23 Mayo 2025
                        </p>
                        <h2 className="text-2xl font-bold mt-1 mb-2">
                            "No es un tema de capricho, sino de reglas": Jessica Newton descarta participación de Luciana Fuster en Miss Universo
                        </h2>
                        <p className="text-gray-600">
                            Al tener el título de Miss Grand International, Jessica Newton explicó por qué Luciana Fuster no puede participar en otros certámenes de belleza.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                    <div className="relative">
                        <img
                            src="img/artemain2.png"
                            alt="Main Article"
                            className="rounded w-full h-auto object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-yellow-700 text-white text-xs px-2 py-1 rounded">
                            Arte y Cultura
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">
                            Brenda García Retamal - 23 Mayo 2025
                        </p>
                        <h2 className="text-2xl font-bold mt-1 mb-2">
                            Cannes 2025: Tatiana Calmell deslumbra en la alfombra roja con look de alta costura
                        </h2>
                        <p className="text-gray-600">
                            La peruana coronada como Miss Universo Américas 2024 desfiló en la alfombra roja con un diseño del filipino Michael Cinco, tras haber participado en su desfile en Francia.
                        </p>
                    </div>
                </div>
            </div>


            {/* septimo contenido */}

            <div className="grid grid-cols-4 px-4 py-6 gap-6 max-w-7xl mx-auto">
                {/* Tarjeta 1 */}
                <div className="flex gap-4 col-span-2">
                    <img src="img/artesec1.png" alt="Thumb 1" className="w-30 h-30 object-cover rounded" />
                    <div>
                        <span className="bg-yellow-700 text-white px-2 py-0.5 text-xs rounded">Arte y Cultura</span>
                        <p className="text-xs text-gray-500 mt-1">Redacción RPP - 20 Mayo 2025</p>
                        <h2 className="font-bold text-sm mt-1">'Nos pasa a todas', un libro que recoge testimonios conmovedores de mujeres en un programa radial</h2>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="flex gap-4 col-span-2">
                    <img src="img/artesec2.png" alt="Thumb 2" className="w-30 h-30 object-cover rounded" />
                    <div>
                        <span className="bg-yellow-700 text-white px-2 py-0.5 text-xs rounded">Arte y Cultura</span>
                        <p className="text-xs text-gray-500 mt-1">Renzo Napa - 22 Mayo 2025</p>
                        <h2 className="font-bold text-sm mt-1">'Mi madre se comió mi corazón'  una obra íntima que rompe el silencio sobre la salud mental</h2>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="flex gap-4 col-span-2">
                    <img src="img/artesec3.png" alt="Thumb 3" className="w-30 h-30 object-cover rounded" />
                    <div>
                        <span className="bg-yellow-700 text-white px-2 py-0.5 text-xs rounded">Arte y Cultura</span>
                        <p className="text-xs text-gray-500 mt-1">Brenda Garcia Retamal - 22 Mayo 2025</p>
                        <h2 className="font-bold text-sm mt-1">Candidata a Miss Puerto Rico 2025 renunció sorpresivamente al certamen de belleza: ¿qué pasó?</h2>
                    </div>
                </div>

                {/* Tarjeta 4 */}
                <div className="flex gap-4 col-span-2">
                    <img src="img/artesec4.png" alt="Thumb 3" className="w-30 h-30 object-cover rounded" />
                    <div>
                        <span className="bg-yellow-700 text-white px-2 py-0.5 text-xs rounded">Arte y Cultura</span>
                        <p className="text-xs text-gray-500 mt-1">Andrea Susana Caceres Alvarez - 23 Mayo 2025</p>
                        <h2 className="font-bold text-sm mt-1">Revolución del maquillaje y el skincare: ¿el consumidor es más exigente con lo que usa en la piel?</h2>
                    </div>
                </div>
            </div>

            {/* Separador */}

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-5 px-4">Videos</h1>
            <hr className="max-w-7xl mx-auto border-t-4 border-red-500 my-4" />

            {/* octavo contenido */}

            <section className="max-w-7xl px-4 py-6  mx-auto">
                {/* Banner Principal */}
                <div className="relative w-full h-[400px] mb-8">
                    <img
                        src="img/videomain.png"
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 w-max mb-2">Hollywood</span>
                        <p className="text-sm text-gray-300">Carlos Rodríguez - 22 Mayo 2025</p>
                        <h2 className="text-white text-5xl font-bold leading-tight mt-1">
                            WWE Saturday Night's Main Event: John Cena vs R-Truth EN VIVO
                        </h2>

                    </div>
                </div>

                {/* Noticias Inferiores */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tarjeta 1 */}
                    <div className="relative">
                        <img src="img/videosec1.png" alt="Noticia 1" className="w-full h-60 object-cover " />

                        <div className="mt-3">
                            <span className="bg-red-600 text-white text-xs px-2 py-1 ">Delincuencia</span>
                            <p className="text-sm text-gray-500 mt-1">Fernando Chuquillanqui - 24 Mayo 2025</p>
                            <h3 className="text-base font-semibold mt-1">Callao: capturan a presunto responsable de tiroteo en el que resultaron heridas una mujer y una niña</h3>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="relative">
                        <img autoPlay
                            src="img/videosec2.png" alt="Noticia 2" className="w-full h-60 object-cover " />

                        <div className="mt-3">
                            <span className="bg-green-400 text-white text-xs px-2 py-1 ">Deportes</span>
                            <p className="text-sm text-gray-500 mt-1">Ernesto Astonitas - 24 Mayo 2025</p>
                            <h3 className="text-base font-semibold mt-1">¡Algarabía total!: Con bengalas y fuegos artificiales, Nápoles celebra el cuarto 'Scudetto' de su historia
                            </h3>
                        </div>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="relative">
                        <img src="img/videosec3.png" alt="Noticia 3" className="w-full h-60 object-cover " />

                        <div className="mt-3">
                            <span className="bg-red-600 text-white text-xs px-2 py-1 ">Delincuencia</span>
                            <p className="text-sm text-gray-500 mt-1">Jorge Luis Pinedo Barrera - 25 Mayo 2025</p>
                            <h3 className="text-base font-semibold mt-1">La Libertad: asesinan a balazos a dueño de empresa de seguridad en Trujillo</h3>
                        </div>
                    </div>
                </div>
            </section>


            <div className="w-full mt-10">
                <img src="img/upn.png" alt="" className="w-full object-cover" />
            </div>



            <Footer />
        </div >
    );
}