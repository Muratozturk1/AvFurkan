import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">İletişim</h3>
                        <p className="text-gray-600 mb-2">Adres: Yalova, Türkiye</p>
                        <p className="text-gray-600 mb-2">Telefon: +90 532 696 39 29</p>
                        <p className="text-gray-600">E-posta: furkan.koc@avfurkankoc.com.tr</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/hizmetlerimiz" className="text-gray-600 hover:text-blue-600">
                                    Ceza Hukuku
                                </Link>
                            </li>
                            <li>
                                <Link to="/hizmetlerimiz" className="text-gray-600 hover:text-blue-600">
                                    Medeni Hukuk
                                </Link>
                            </li>
                            <li>
                                <Link to="/hizmetlerimiz" className="text-gray-600 hover:text-blue-600">
                                    İş Hukuku
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/hakkimizda" className="text-gray-600 hover:text-blue-600">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-600 hover:text-blue-600">
                                    Hukuk / Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/iletisim" className="text-gray-600 hover:text-blue-600">
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Alt Footer */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Koç Avukatlık. Tüm hakları saklıdır.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                                Gizlilik Politikası
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                                Kullanım Şartları
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                                KVKK
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 