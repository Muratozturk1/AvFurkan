import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="text-2xl font-bold text-gray-800">
                        Av. Furkan Koç
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className={`${isActive('/') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} font-medium transition-colors duration-200`}
                        >
                            Ana Sayfa
                        </Link>
                        <Link
                            to="/hakkimizda"
                            className={`${isActive('/hakkimizda') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} font-medium transition-colors duration-200`}
                        >
                            Hakkımızda
                        </Link>
                        <Link
                            to="/hizmetlerimiz"
                            className={`${isActive('/hizmetlerimiz') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} font-medium transition-colors duration-200`}
                        >
                            Hizmetlerimiz
                        </Link>
                        <Link
                            to="/blog"
                            className={`${isActive('/blog') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} font-medium transition-colors duration-200`}
                        >
                            Hukuk / Blog
                        </Link>
                        <Link
                            to="/iletisim"
                            className={`${isActive('/iletisim') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} font-medium transition-colors duration-200`}
                        >
                            İletişim
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                to="/"
                                className={`${isActive('/') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Ana Sayfa
                            </Link>
                            <Link
                                to="/hakkimizda"
                                className={`${isActive('/hakkimizda') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Hakkımızda
                            </Link>
                            <Link
                                to="/hizmetlerimiz"
                                className={`${isActive('/hizmetlerimiz') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Hizmetlerimiz
                            </Link>
                            <Link
                                to="/blog"
                                className={`${isActive('/blog') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Hukuk / Blog
                            </Link>
                            <Link
                                to="/iletisim"
                                className={`${isActive('/iletisim') ? 'text-blue-900' : 'text-gray-600 hover:text-blue-600'} block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                İletişim
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 