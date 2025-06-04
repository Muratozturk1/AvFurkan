import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Hizmetlerimiz
                        </h1>
                        <p className="text-xl text-gray-300">
                            Hukuki sorunlarınıza özel çözümler sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Hizmetlerimiz Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Ceza Hukuku */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Ceza Hukuku</h2>
                            <p className="text-gray-600 mb-6">
                                Ceza davalarında uzman ekibimizle yanınızdayız. Savunma ve danışmanlık hizmetleri sunuyoruz.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Ceza davalarında savunma</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Hukuki danışmanlık</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Duruşma takibi</span>
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <Link
                                    to="/blog?category=Ceza%20Hukuku"
                                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                                >
                                    Detaylı Bilgi
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Medeni Hukuk */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Medeni Hukuk</h2>
                            <p className="text-gray-600 mb-6">
                                Medeni hukuk alanında uzman kadromuzla hukuki sorunlarınıza çözüm üretiyoruz.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Sözleşme hukuku</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Borçlar hukuku</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Tazminat davaları</span>
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <Link
                                    to="/blog?category=Medeni%20Hukuk"
                                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                                >
                                    Detaylı Bilgi
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* İş Hukuku */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">İş Hukuku</h2>
                            <p className="text-gray-600 mb-6">
                                İş hukuku alanında işçi ve işveren haklarınızı korumak için yanınızdayız.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">İş sözleşmeleri</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">İşçi-işveren uyuşmazlıkları</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">İş güvenliği ve sağlığı</span>
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <Link
                                    to="/blog?category=İş%20Hukuku"
                                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                                >
                                    Detaylı Bilgi
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Gayrimenkul Hukuku */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Gayrimenkul Hukuku</h2>
                            <p className="text-gray-600 mb-6">
                                Gayrimenkul hukuku alanında uzman ekibimizle yanınızdayız.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Tapu işlemleri</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Kira sözleşmeleri</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Kat mülkiyeti davaları</span>
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <Link
                                    to="/blog?category=Gayrimenkul%20Hukuku"
                                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                                >
                                    Detaylı Bilgi
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Aile Hukuku */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Aile Hukuku</h2>
                            <p className="text-gray-600 mb-6">
                                Aile hukuku alanında uzman kadromuzla yanınızdayız.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Boşanma davaları</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Nafaka davaları</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Velayet davaları</span>
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <Link
                                    to="/blog?category=Aile%20Hukuku"
                                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                                >
                                    Detaylı Bilgi
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Ticaret Hukuku */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Ticaret Hukuku</h2>
                            <p className="text-gray-600 mb-6">
                                Ticaret hukuku alanında şirketlerinize özel çözümler sunuyoruz.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Şirket kurulumu</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Ticari sözleşmeler</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Şirket birleşme ve devralmaları</span>
                                </li>
                            </ul>
                            <div className="flex justify-center mt-6">
                                <Link
                                    to="/blog?category=Ticaret%20Hukuku"
                                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                                >
                                    Detaylı Bilgi
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* İletişim CTA Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Hukuki Sorunlarınız İçin Bize Ulaşın</h2>
                    <p className="text-xl mb-8">
                        Ücretsiz ön görüşme için hemen iletişime geçin.
                    </p>
                    <Link
                        to="/iletisim"
                        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                        İletişime Geçin
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services; 