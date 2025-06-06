import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti7PoliticaPage = () => {


    return (

        <div className="w-full">
            <Navbar />
            {/* Columna Derecha */}

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Arte y Cultura</h1>
            <hr className="max-w-7xl mx-auto border-t-2 border-red-500 my-4" />


            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">

                <div className="px-4">
                    {[
                        {
                            title: "\"No es un tema de capricho, sino de reglas\": Jessica Newton descarta participación de Luciana Fuster en Miss Universo",
                            autor: "Brenda García Retamal - 22 Mayo 2025",
                            descripcion:
                                "Al tener el título de Miss Grand International, Jessica Newton explicó por qué Luciana Fuster no puede participar en otros certámenes" +
                                "de belleza.Pese al reciente acercamiento de Luciana Fuster a la organización del Miss Universo en El Salvador, se especuló que la modelo peruana " +
                                "podría formar parte de este certamen internacional; sin embargo, Jessica Newton, directora del Miss Perú, descartó que pueda competir por la corona. " +
                                "¿La razón? Actualmente, tiene el título de Miss Grand International y para que pueda participar en el concurso de belleza más importante, tendrá que terminar su mandato." +
                                "Newton fue clara al respecto, ya que Luciana Fuster mostró su intención de participar en el Miss Universo, por ello, mencionó que si bien tiene las características y el perfil" +
                                "para representar a Perú, no puede hacerlo como participante.",
                            SubTitle: "Luciana Fuster en las previas del Miss Universo",
                            descripcion2:
                                "Hace unos días, Fuster fue invitada en las actividades previas al Miss Universo, donde compartió momentos con las candidatas a la corona. Si bien su presencia fue motivo " +
                                "de especulaciones sobre una posible participación en el certamen, esto no se dará, al menos por ahora. " +
                                "La modelo se tomó fotos con los organizadores y todo el equipo, por lo que muchos interpretaron que tenía asegurada su candidatura. No obstante, solo se trató de un acompañamiento.",
                            img: "/img/papamain.png",
                        },
                    ].map((item, idx) => (
                        <div className="flex flex-col space-y-4 py-4" key={idx}>
                            <p className="text-5xl font-bold text-gray-800 py-1">{item.title}</p>
                            <img
                                src={item.img}
                                alt="Article"
                                className="w-full h-85 object-cover "
                            />
                            <div>
                                <p className="text-xl text-gray-500 py-1">{item.autor}</p>
                                <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{item.descripcion}</p>
                                <p className="text-2xl text-gray-600 py-1 font-bold">{item.SubTitle}</p>
                                <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{item.descripcion2}</p>
                            </div>
                        </div>

                    ))}
                </div>
                {/* Botón de Volver */}
                <div className="flex justify-start">
                    <a
                        href="/politica"
                        className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-3xl hover:bg-red-600 transition duration-300"
                    >
                        <AiOutlineLeft className="mr-2" />
                        Volver
                    </a>
                </div>
            </div>

            <div className="w-full mt-10">
                <img src="img/upn.png" alt="" className="w-full object-cover" />
            </div>
            <Footer />

        </div>

    )
};