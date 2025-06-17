import { useEffect, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export const Noti5ArtePageDV = () => {
    const hasSpokenRef = useRef(false);

    const contenido = {
        title: "Revolución del maquillaje y el skincare: ¿el consumidor es más exigente con lo que usa en la piel?",
        autor: " Andrea Susana Caceres Alvarez - 23 Mayo 2025",
        descripcion:
            "El boom de la belleza en Perú viene acompañado de una oferta diversa y consumidores más exigentes. Expertos explicaron el crecimiento de este rubro en el mercado local." +
            "Los labiales, las sombras y los rubores ya no se limitan a embellecer: hoy ofrecen una gama infinita de colores, texturas y fórmulas pensadas para cada tipo de piel. El maquillaje ha dejado de ser una imposición estética para convertirse en un acto de identidad. Cada trazo sobre el rostro es una elección y una forma de expresar nuestro estilo personal." +
            "Esto ha impulsado el crecimiento del uso y la presencia de cosméticos y productos de skincare en el mercado peruano. Marcas locales e internacionales se han consolidado y han diversificado su oferta para atraer a un público cada vez más interesado en el cuidado de la piel y la belleza. Según un estudio de la Cámara de Comercio de Lima, el mercado peruano de cosméticos e higiene personal creció 8 % en el primer trimestre de 2025. ¿A qué se debe este boom? " +
            "“Hoy en día, en todo el mundo, el mercado de la belleza está creciendo rápidamente y se encamina a igualar al de la moda”, comentó Gabriela Vargas, representante de H&M Chile, Perú y Uruguay. Por su parte, Paola Orihuela, representante de Herrera Beauty en Perú, sostuvo que la categoría de maquillaje es muy cíclica. “Se está volviendo a vivir su auge con las innovaciones. Además, las redes sociales ayudan mucho a las categorías de belleza, siendo make-up una de las más importantes y la que te permite expresarte”, recalcó a RPP." +
            "El camino es claro: las marcas de maquillaje siguen tendencias globales y se adaptan a los consumidores: " ,
        SubTitle: "Belleza en clave fashion: cuando las marcas de moda lanzan cosméticos",
        descripcion2:
            "Reconocidas marcas como Chanel, Carolina Herrera y Rabanne han diversificado su negocio en el mundo de la moda incorporando líneas de belleza, con el objetivo de ofrecer una experiencia integral al consumidor. Hoy, estas firmas tienen presencia en el mercado peruano. ¿Qué las hace atractivas para el consumidor local? . " +
            "Herrera Beauty, por ejemplo, acaba de entrar al mercado peruano con un mensaje específico: no ofrecen solo maquillaje. Sus productos son también accesorios que se lucen fuera del bolso. “Se busca que la mujer pueda disfrutar, experimentar y no tener el maquillaje oculto en un neceser. Qué orgullo tener algo lindo colgando de tu cartera. Los productos son multiusos: uno puede usar los labiales como blush o las sombras como iluminadores. Esa mentalidad multifuncional se traslada al producto en sí para que sea un accesorio que se luzca”, explicó Orihuela sobre la tendencia de ir más allá y ofrecer un valor añadido al cliente. " +
            "Por el contrario, Chanel Beauty se posiciona en el mercado peruano por el know how detrás de sus productos. Ángela Kusen, estilista de moda peruana y embajadora de la marca, indicó que la solidez de la firma se complementa con su capacidad para innovar y atreverse a jugar con el color. “La nueva directiva de Chanel Beauty está tratando de dirigirse a un público más contemporáneo, mucho más joven, porque son los que se atreven a explorar el color”, afirmó." +
            "El crecimiento de la industria del maquillaje se refleja también en el mundo del skincare, que ya no se limita a productos para retirar el make-up, sino que se vive como una experiencia de bienestar enfocada en el cuidado y tratamiento de la piel. “El boom se vive internacional como local: hay una demanda creciente por el tema del skincare. Actualmente, los productos no tienen una sola función, sino que incorporan insumos para el tratamiento y el engreimiento. El mundo del skincare es muy amplio: desde limpiar, preparar, hidratar hasta tratar la piel”, indicó María Teresa Normand, gerente general de K’allma." + 
            "Además, se ha democratizado el conocimiento y el acceso al skincare en distintas edades del público consumidor, gracias a la información que circula en redes sociales. Hoy, quienes siguen una rutina de belleza están cada vez más informados sobre los ingredientes y beneficios de los productos que utilizan, según su tipo de piel. “El tratamiento facial puede tener cinco o seis pasos y la persona que lo sigue sabe muy bien qué contiene cada crema o sérum que utiliza”, agregó Normand." +
            "Gabriela Vargas comentó que las mujeres que visitan H&M Beauty se inclinan por productos relacionados con el cuidado de la piel. “Los productos estrella son la piedra Gua Sha de cuarzo natural, los kits de cepillos para limpieza, exfoliación y masajes, así como las mascarillas faciales”, destacó, aludiendo a la clara tendencia que marca el comportamiento del consumidor en este rubro." + 
            "Y es que la belleza ya no responde a reglas fijas ni a estándares únicos. El maquillaje y el skincare se convierten en herramientas de identidad, autocuidado y expresión. Con consumidores cada vez más informados y exigentes, las marcas deberán apostar por la sostenibilidad, nuevas tecnologías y personalización para mantenerse relevantes." ,
    };

    useEffect(() => {

        window.speechSynthesis.cancel(); //Detener cualquier audio anterior

        if (!hasSpokenRef.current) {
            const leerTexto = `${contenido.title}. ${contenido.autor}. ${contenido.descripcion}. ${contenido.SubTitle}. ${contenido.descripcion2}`;
            const utterance = new SpeechSynthesisUtterance(leerTexto);
            utterance.lang = "es-ES";
            window.speechSynthesis.speak(utterance);
            hasSpokenRef.current = true;
        }
    }, []);

    return (
        <div className="w-full">
            <div className="bg-amber-400">
                <a href="/homedv">
                    <img className="h-28 ml-4" src="/img/upnlogo.png" alt="Logo de UPN" />
                </a>
            </div>

            <h1 className="font-bold text-red-500 text-2xl mx-auto max-w-7xl mt-14 px-4">Arte y Cultura</h1>
            <hr className="max-w-7xl mx-auto border-t-2 border-red-500 my-4" />

            <div className="container mx-auto grid grid-cols-1 max-w-7xl gap-6">
                <div className="px-4">
                    <div className="flex flex-col space-y-4 py-4">
                        <p className="text-5xl font-bold text-gray-800 py-1">{contenido.title}</p>
                        <img
                            src="/img/artenum5.png"
                            alt="Article"
                            className="w-full h-85 object-cover "
                        />
                        <div>
                            <p className="text-xl text-gray-500 py-1">{contenido.autor}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion}</p>
                            <p className="text-2xl text-gray-600 py-1 font-bold">{contenido.SubTitle}</p>
                            <p className="text-2xl text-gray-600 py-1 text-justify leading-relaxed">{contenido.descripcion2}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pb-6">
                    <a
                        href="/artedv"
                        className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-3xl hover:bg-red-600 transition duration-300"
                    >
                        <AiOutlineLeft className="mr-2" />
                        Volver
                    </a>
                </div>
            </div>
        </div>
    );
};
