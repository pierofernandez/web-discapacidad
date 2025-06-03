export const Footer = () => {
    return (
        <footer className="bg-zinc-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        
                        <p className="text-sm leading-6 text-white">
                            Siguenos en todas nuestras principales Redes Sociales
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Facebook</span>
                                <img src="img/Facebook.png" alt="facebook" />
                            </a>

                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <img src="img/Twitter.png" alt="twitter" />
                            </a>

                             <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                <img src="img/Instagram.png" alt="instagram" />
                            </a>

                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">YouTube</span>
                                <img src="img/Youtube.png" alt="youtube" />
                            </a>
                        </div>
                    </div>
                    {/* Aquí sigue la columna de enlaces que ya habías empezado */}
                </div>
            </div>
        </footer>
    );
};
