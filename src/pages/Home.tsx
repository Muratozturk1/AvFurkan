import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="/resimm/heroaction.jpg"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>
                <div className="relative container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Hukuki Sorunlarınıza<br />
                            <span className="text-blue-500">Profesyonel Çözümler</span>
                        </h1>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                            <blockquote className="text-lg md:text-xl text-gray-100 italic leading-relaxed">
                                "Her hak arayışı bir sessiz çığlıktır; hukuk, bu çığlığın yankısını adil sonuca dönüştürme sanatıdır.
                                <br />
                                Gerçek adalet, yalnızca bir sonuca ulaşmak değil, o sonuca hangi yolla varıldığını da önemser.
                                <br />
                                Ve biz biliriz ki; güç karşısında değil, hakikat karşısında eğilen bir hukuk anlayışı, adaletin en sade hâlidir."
                            </blockquote>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/hizmetlerimiz"
                                className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                            >
                                Hizmetlerim
                            </Link>
                            <Link
                                to="/iletisim"
                                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                            >
                                İletişime Geçin
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hizmetlerimiz Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Hizmetlerim</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hukukun farklı alanlarında uzmanlaşmış olarak, müvekkillerime en iyi hizmeti sunmayı hedefliyorum.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-full h-56 bg-blue-50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img
                                    src="/resimm/cezahukuku.jpg"
                                    alt="Ceza Hukuku"
                                    className="w-full h-full object-cover rounded transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ceza Hukuku</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Ceza davalarında uzman ekibimizle yanınızdayız. Savunma ve danışmanlık hizmetleri sunuyoruz.
                            </p>
                            <Link
                                to="/hizmetlerimiz"
                                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                            >
                                Detaylı Bilgi
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-full h-56 bg-blue-50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img
                                    src="/resimm/medenihukuk.jpg"
                                    alt="Medeni Hukuk"
                                    className="w-full h-full object-cover rounded transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Medeni Hukuk</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Medeni hukuk alanında uzman kadromuzla hukuki sorunlarınıza çözüm üretiyoruz.
                            </p>
                            <Link
                                to="/hizmetlerimiz"
                                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                            >
                                Detaylı Bilgi
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-full h-56 bg-blue-50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                                <img
                                    src="/resimm/2.jpg"
                                    alt="İş Hukuku"
                                    className="w-full h-full object-cover rounded transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">İş Hukuku</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                İş hukuku alanında işçi ve işveren haklarınızı korumak için yanınızdayız.
                            </p>
                            <Link
                                to="/hizmetlerimiz"
                                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                            >
                                Detaylı Bilgi
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-full h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <img
                                    src="/resimm/gayrimenkul.jpg"
                                    alt="Gayrimenkul Hukuku"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Gayrimenkul Hukuku</h3>
                            <p className="text-gray-600 mb-6">
                                Gayrimenkul hukuku alanında uzman ekibimizle yanınızdayız.
                            </p>
                            <Link
                                to="/hizmetlerimiz"
                                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                            >
                                Detaylı Bilgi
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-full h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <img
                                    src="/resimm/ailehukuku.jpg"
                                    alt="Aile Hukuku"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Aile Hukuku</h3>
                            <p className="text-gray-600 mb-6">
                                Boşanma, nafaka, velayet ve diğer aile hukuku konularında uzman desteği sağlıyoruz.
                            </p>
                            <Link
                                to="/hizmetlerimiz"
                                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                            >
                                Detaylı Bilgi
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-full h-48 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <img
                                    src="/resimm/ticaret.jpg"
                                    alt="Ticaret Hukuku"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Ticaret Hukuku</h3>
                            <p className="text-gray-600 mb-6">
                                Şirketler hukuku, ticari davalar ve sözleşmeler konusunda profesyonel hukuki danışmanlık.
                            </p>
                            <Link
                                to="/hizmetlerimiz"
                                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                            >
                                Detaylı Bilgi
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Neden Biz Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Neden Beni Tercih Etmelisiniz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Güvenilirlik</h3>
                            <p className="text-gray-600">
                                Müvekkillerime karşı her zaman dürüst ve şeffaf bir yaklaşım sergiliyorum. Güvenilirliğim, uzun yıllara dayanan tecrübemin temelini oluşturuyor.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Uzmanlık</h3>
                            <p className="text-gray-600">
                                Her alanda uzmanlaşmış olarak, en güncel hukuki gelişmeleri takip ederek müvekkillerime en iyi hizmeti sunuyorum.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Müvekkil Odaklılık</h3>
                            <p className="text-gray-600">
                                Müvekkillerimin ihtiyaçlarını en iyi şekilde anlayarak, onlara özel çözümler üretiyorum. Her müvekkilim benim için özeldir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hakkımızda Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Hakkımızda</h2>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-600 mb-6">
                                    Furkan Koç, 2021–2025 yılları arasında Yalova Üniversitesi Hukuk Fakültesi'nde eğitim görmüş ve mezun olmuştur. Mezuniyetinin ardından, 2025 yılından bu yana hukuk alanında hizmet vermektedir.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Ceza hukuku, aile hukuku, taşınmaz mülkiyeti, ticari davalar, kira davaları, iş hukuku ve miras hukuku alanlarında uzmanlaşmıştır.
                                </p>
                                <p className="text-gray-600">
                                    Dinamik ve yenilikçi yaklaşımıyla, etkin, ulaşılabilir ve etik hukuk hizmeti sunmayı ilke edinmiştir. Hukuk alanındaki her çalışmasını, mesleki sorumluluk ve adalet bilinciyle yürütür; karmaşık hukuki süreçlerde netlik sağlar, zemini hukukla temellendirilmiş hızlı ve kalıcı çözümler üretir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Hukuki Sorunlarınız İçin Bana Ulaşın</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Ücretsiz ön görüşme için hemen iletişime geçin.
                    </p>
                    <Link
                        to="/iletisim"
                        className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                        İletişime Geçin
                    </Link>
                </div>
            </section>


        </div>
    );
};

export default Home; 