import { Link, useSearchParams } from 'react-router-dom';

const Blog = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    const blogPosts = [
        {
            id: 1,
            title: 'Ceza Hukukunda Yeni Düzenlemeler ve Değişiklikler',
            excerpt: 'Ceza hukukunda yapılan son değişiklikler, yeni düzenlemeler ve bunların uygulamaya etkileri hakkında detaylı bir inceleme.',
            date: '1 Haziran 2024',
            category: 'Ceza Hukuku',
            image: '/resimm/cezahukuku.jpg',
            author: 'Av. Furkan Koç',
            readTime: '6 dk okuma'
        },
        {
            id: 2,
            title: 'Medeni Hukukta Boşanma Süreci ve Haklar',
            excerpt: 'Boşanma sürecinde tarafların hakları, nafaka, velayet ve mal paylaşımı konularında detaylı bilgilendirme.',
            date: '1 Haziran 2024',
            category: 'Medeni Hukuk',
            image: '/resimm/ailehukuku.jpg',
            author: 'Av. Furkan Koç',
            readTime: '7 dk okuma'
        },
        {
            id: 3,
            title: 'İş Hukukunda İşçi Hakları ve Yeni Düzenlemeler',
            excerpt: 'İşçi hakları, iş güvenliği, tazminat ve yeni iş kanunu düzenlemeleri hakkında kapsamlı bilgi.',
            date: '15 Nisan 2024',
            category: 'İş Hukuku',
            image: '/resimm/2.jpg',
            author: 'Av. Furkan Koç',
            readTime: '8 dk okuma'
        },
        {
            id: 4,
            title: 'Ticaret Hukukunda Şirket Kurulumu ve Yönetimi',
            excerpt: 'Şirket kurulum süreçleri, yönetim organları ve ticari işlemlerde dikkat edilmesi gerekenler.',
            date: '10 Nisan 2024',
            category: 'Ticaret Hukuku',
            image: '/resimm/ticaret.jpg',
            author: 'Av. Furkan Koç',
            readTime: '5 dk okuma'
        },
        {
            id: 5,
            title: 'Gayrimenkul Hukukunda Satış ve Kiralama İşlemleri',
            excerpt: 'Gayrimenkul satış ve kiralama süreçlerinde tarafların hakları ve yasal düzenlemeler.',
            date: '5 Nisan 2024',
            category: 'Gayrimenkul Hukuku',
            image: '/resimm/gayrimenkul.jpg',
            author: 'Av. Furkan Koç',
            readTime: '6 dk okuma'
        },
        {
            id: 6,
            title: 'Aile Hukukunda Nafaka Davaları ve Yeni Düzenlemeler',
            excerpt: 'Nafaka davalarında tarafların hakları, hesaplama yöntemleri ve yeni düzenlemeler hakkında detaylı bilgi.',
            date: '28 Mayıs 2024',
            category: 'Aile Hukuku',
            image: '/resimm/ailehukuku.jpg',
            author: 'Av. Furkan Koç',
            readTime: '7 dk okuma'
        },
        {
            id: 7,
            title: 'Ticaret Hukukunda Şirket Birleşmeleri ve Devralmaları',
            excerpt: 'Şirket birleşme ve devralma süreçleri, yasal prosedürler ve dikkat edilmesi gereken noktalar.',
            date: '25 Mayıs 2024',
            category: 'Ticaret Hukuku',
            image: '/resimm/ticaret.jpg',
            author: 'Av. Furkan Koç',
            readTime: '6 dk okuma'
        }
    ];

    const filteredPosts = category
        ? blogPosts.filter(post => post.category === category)
        : blogPosts;

    const categories = [...new Set(blogPosts.map(post => post.category))];

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
                            Hukuk / Blog
                        </h1>
                        <p className="text-xl text-gray-300">
                            Hukuki gelişmeler, yeni düzenlemeler ve önemli konular hakkında güncel yazılar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/blog"
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${!category
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Tümü
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                key={cat}
                                to={`/blog?category=${encodeURIComponent(cat)}`}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${category === cat
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-56">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{post.author}</span>
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                                        >
                                            Devamını Oku
                                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog; 