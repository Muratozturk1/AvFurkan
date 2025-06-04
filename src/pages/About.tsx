import { Link } from 'react-router-dom';

const About = () => {
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
                <div className="relative container mx-auto px-4 py-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Modern Hukuk Anlayışı
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Güce değil, hakkaniyete dayalı; kişilere değil, ilkelere bağlı bir hukuk anlayışının savunucusu olmaktır.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="relative h-[600px] rounded-lg overflow-hidden">
                            <img
                                src="/resimm/Furkan.jpeg"
                                alt="Av. Furkan Koç"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="lg:pt-0">
                            <h2 className="text-3xl font-bold mb-6">Ben Kimim?</h2>
                            <div className="space-y-6 text-gray-600">
                                <p>
                                    Furkan Koç, 2021–2025 yılları arasında Yalova Üniversitesi Hukuk Fakültesi'nde eğitim görmüş ve mezun olmuştur. Mezuniyetinin ardından, 2025 yılından bu yana hukuk alanında hizmet vermektedir.
                                </p>
                                <p>
                                    Ceza hukuku, aile hukuku, taşınmaz mülkiyeti, ticari davalar, kira davaları, iş hukuku ve miras hukuku alanlarında uzmanlaşmıştır.
                                </p>
                                <p>
                                    Dinamik ve yenilikçi yaklaşımıyla, etkin, ulaşılabilir ve etik hukuk hizmeti sunmayı ilke edinmiştir. Hukuk alanındaki her çalışmasını, mesleki sorumluluk ve adalet bilinciyle yürütür; karmaşık hukuki süreçlerde netlik sağlar, zemini hukukla temellendirilmiş hızlı ve kalıcı çözümler üretir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vizyon ve Misyon Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Vizyonumuz</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Adaletin, yalnızca kanun maddelerinde değil; toplumsal vicdanda da karşılık bulduğu bir hukuk düzenine katkı sağlamaktır.
                                <br /><br />
                                Güce değil, hakkaniyete dayalı; kişilere değil, ilkelere bağlı bir hukuk anlayışının savunucusu olmaktır.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Misyonumuz</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Herkes için erişilebilir, tarafsız ve etik değerlere bağlı bir hukuk hizmeti sunmak.
                                <br /><br />
                                Hak arama özgürlüğünü güçlendirmek, adaletin yalnızca bir sonuç değil; sürecin kendisi olduğunu unutmadan, her aşamada dürüst, şeffaf ve kararlı bir şekilde süreci yürütmek.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Hukuki Sorunlarınız İçin Bana Ulaşın</h2>
                    <p className="text-xl text-gray-600 mb-4">
                        Ücretsiz ön görüşme için hemen iletişime geçin.
                    </p>
                    <a
                        href="tel:+905326963929"
                        className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-xl mb-8"
                    >
                        0 532 696 3929
                    </a>
                    <div>
                        <Link
                            to="/iletisim"
                            className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            İletişime Geçin
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 