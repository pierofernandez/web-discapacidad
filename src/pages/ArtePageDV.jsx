import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ArtePageDV = () => {
    return (

        <div className="w-full">
            {/* Columna Derecha */}
            <div className="bg-amber-400">
                <a href="/homedv">
                    <img className="h-28 ml-4" src="/img/upnlogo.png" alt="Logo de UPN" />
                </a>
            </div>

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Arte y Cultura</h1>
            <hr className="max-w-7xl mx-auto border-t-2 border-red-500 my-4" />


            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">

                <div className="px-4">
                    {[
                        {
                            title: "\"No es un tema de capricho, sino de reglas\": Jessica Newton descarta participación de Luciana Fuster en Miss Universo",
                            autor: "Brenda García Retamal - 22 Mayo 2025",
                            descripcion: "Al tener el título de Miss Grand International, Jessica Newton explicó por qué Luciana Fuster no puede participar en otros certámenes de belleza.",
                            img: "/img/artenum1.png",
                            link: "/artedv/noticia1artedv",
                        },
                        {
                            title: "Cannes 2025: Tatiana Calmell deslumbra en la alfombra roja con look de alta costura",
                            autor: "Brenda García Retamal - 23 Mayo 2025",
                            descripcion: "La peruana coronada como Miss Universo Américas 2024 desfiló en la alfombra roja con un diseño del filipino Michael Cinco, tras haber participado en su desfile en Francia.",
                            img: "/img/artenum2.png",
                            link: "/artedv/noticia2artedv",

                        },
                        {
                            title: "\"Nos pasa a todas\", un libro que recoge testimonios conmovedores de mujeres en un programa radial",
                            autor: "Redacción RPP - 23 Mayo 2025",
                            descripcion: "Este miércoles 28 de mayo a las 7:00 p. m., se presenta Nos pasa a todas, libro con historias reales de mujeres, en la Casa de la Literatura Peruana.",
                            img: "/img/artenum3.png",
                            link: "/artedv/noticia3artedv",

                        },
                        {
                            title: "\"Mi madre se comió mi corazón\", una obra íntima que rompe el silencio sobre la salud mental",
                            autor: "Renzo Napa - 24 Mayo 2025",
                            descripcion: "La obra escrita y dirigida por K’intu Galiano y protagonizada por Vania Accinelli propone una mirada íntima y urgente sobre la salud mental, los vínculos maternos y el poder transformador del dolor.",
                            img: "/img/artenum4.png",
                            link: "/artedv/noticia4artedv",

                        },
                        {
                            title: "Revolución del maquillaje y el skincare: ¿el consumidor es más exigente con lo que usa en la piel?",
                            autor: "Andrea Susana Caceres Alvarez - 24 Mayo 2025",
                            descripcion: "El boom de la belleza en Perú viene acompañado de una oferta diversa y consumidores más exigentes. Expertos explicaron el crecimiento de este rubro en el mercado local.",
                            img: "/img/artenum5.png",
                            link: "/artedv/noticia5artedv",

                        },
                        {
                            title: "Candidata a Miss Puerto Rico 2025 renunció sorpresivamente al certamen de belleza: ¿qué pasó?",
                            autor: "Brenda García Retamal - 24 Mayo 2025",
                            descripcion: "Kiara Escudero, modelo e influencer de 29 años, explicó que su decisión nace del respeto hacia sí misma y reafirma su compromiso con el sector salud.",
                            img: "/img/artenum6.png",
                            link: "/artedv/noticia6artedv",

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