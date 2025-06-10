import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const DeportePageDV = () => {
    return (

        <div className="w-full">
            {/* Columna Derecha */}
            <div className="bg-amber-400">
                <a href="/homedv">
                    <img className="h-28 ml-4" src="/img/upnlogo.png" alt="Logo de UPN" />
                </a>
            </div>

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Deporte</h1>
            <hr className="max-w-7xl mx-auto border-t-2 border-red-500 my-4" />


            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">

                <div className="px-4">
                    {[
                        {
                            title: "Christian Cueva \"llegó a un acuerdo\" para firmar por Emelec, según prensa argentina",
                            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
                            descripcion: "Tras pasar por el fútbol del extranjero, en el 2024 el volante peruano Christian Cueva regresó al Perú para ponerse la camiseta de Cienciano en la Liga1 Te Apuesto.",
                            img: "/img/deportenum1.png",
                            link: "/deportedv/noticia1deportedv",
                        },
                        {
                            title: "¿Diego Enríquez dejará Sporting Cristal? Club León, de la Liga MX, tiene en la mira al portero rimense",
                            autor: "Jean Dueñas - 24 Mayo 2025",
                            descripcion: "Desde que comenzó la temporada y a base de buenas actuaciones, Diego Enríquez se ha ido consolidando como uno de los mejores jugadores en Sporting Cristal.",
                            img: "/img/deportenum2.png",
                            link: "/deportedv/noticia2deportedv",
                        },
                        {
                            title: "Ruidíaz con estilo: con un penal 'a lo Panenka', abrió el marcador para Atlético Grau ante Binacional [VIDEO]",
                            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
                            descripcion: "El delantero Raúl Ruidíaz firmó el 1-0 de Atlético Grau con una soberbia definición en un tiro desde los doce pasos.",
                            img: "/img/deportenum3.png",
                            link: "/deportedv/noticia3deportedv",

                        },
                        {
                            title: "Siete equipos en la pelea: ¿qué les queda por jugar a los clubes en el cierre del Torneo Apertura 2025?",
                            autor: "Diego Figueroa Loayza - 24 Mayo 2025",
                            descripcion: "Jean Dueñas Universitario y Alianza Lima comparten el liderato del Torneo Apertura, pero cinco equipos más le siguen muy cerca: Melgar, Sport Huancayo, Cusco FC Alianza Atlético y Cristal.",
                            img: "/img/deportenum4.png",
                            link: "/deportedv/noticia4deportedv",

                        },
                        {
                            title: "¿Será en el Monumental? Conmebol inspeccionó el estadio de la 'U' de cara a la final de la Copa Libertadores",
                            autor: "Renzo Castillo Lazo - 24 Mayo 2025",
                            descripcion: "En Universitario, recibieron a la delegación de Conmebol para ser sede de la final de la Copa Libertadores 2025.",
                            img: "/img/deportenum5.png",
                            link: "/deportedv/noticia5deportedv",

                        },
                        {
                            title: "Selección Peruana de Vóley: ¿en qué torneos competirá el equipo femenino en la temporada 2025?",
                            autor: "Diego Figueroa Loayza - 24 Mayo 2025",
                            descripcion: "Se avecina el periodo de selecciones en el calendario del vóley peruano, con la participación en dos mundiales para la temporada 2025.",
                            img: "/img/deportenum6.png",
                            link: "/deportedv/noticia6deportedv",

                        },
                    ].map((item, idx) => (
                        <Link to={item.link} key={idx} className="flex space-x-4 py-4 hover:bg-gray-100 rounded transition duration-300">
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
                        </Link>
                    ))}
                </div>

                <div className="flex justify-start pb-6">
                    <a
                        href="/homedv"
                        className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-3xl hover:bg-red-600 transition duration-300"
                    >
                        <AiOutlineLeft className="mr-2" />
                        Volver
                    </a>
                </div>
            </div>
        </div>

    )
}