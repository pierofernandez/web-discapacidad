import { useEffect } from "react";

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
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="w-full">
            <nav className="bg-red-600 shadow-lg">
                <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-white md:text-3xl">
                            <a href="#">Upenianos</a>
                        </div>
                        
                    </div>
                    <div className="hidden md:flex md:flex-row -mx-2">
                        <a href="/arte" className="text-white rounded hover:bg-red-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Arte</a>
                        <a href="/deporte" className="text-white rounded hover:bg-red-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Deporte</a>
                        <a href="/politica" className="text-white rounded hover:bg-red-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Política</a>
                        <a href="/mundo" className="text-white rounded hover:bg-red-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Mundo</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};